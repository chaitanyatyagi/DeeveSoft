import React, { useState } from 'react';
import NavBar from './NavBar';
import "../styles/profile.css";
import { store } from "../firebase"
import Avatar from "@mui/material/Avatar"

function Profile() {
    const [progress, setProgress] = useState(0);
    const formHandler = (e) => {
        e.preventDefault();
        const file = e.target[0].files[0];
        uploadFiles(file);
    };

    const [url,setUrl] = useState(null)
    const uploadFiles = (file) => {
      
        const uploadTask = store.ref(`files/${file.name}`).put(file);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
               
                const prog = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(prog);
            },
            (error) => console.log(error),
            () => {
                store
                    .ref("files")
                    .child(file.name)
                    .getDownloadURL()
                    .then((url) => {
                        setUrl(url)
                    });
            }
        );
    };
    return (
        <div className="profile">
            <NavBar className="insnavbar" />
            <div className="image">
                <Avatar alt="Remy Sharp" src={url} sx={{ width: 200, height: 200 }} />
            </div>
            <div className="progress">Uploading done {progress}%</div>
            <form onSubmit={formHandler} className="upload">
                <input type="file" accept="image/*" className='btnupload' />
                <button className="submitp">Submit</button>
            </form>
        </div>
    )
}

export default Profile;
