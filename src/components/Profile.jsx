import React from 'react';
import NavBar from './NavBar';
import "../styles/profile.css";
import firebase from 'firebase';

function Profile() {
    const user = localStorage.getItem('Email')
    // if(firebase.auth().currentUser.photoURL){
    //     document.querySelector(".img34").src = firebase.auth().currentUser.photoURL
    // }
    const UploadImage = (event) => {
        const fileRef = firebase.storage().ref().child(`/users/${user}/profile`)
        const uploadTask = fileRef.put(event.target.files[0])
        uploadTask.on('state_changed',
            (snapshot) => {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                if (progress == '100') { window.M.toast({ html: "UPLOAD", classes: "green" }) }

            },
            () => {
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    // firebase.auth().currentUser.updateProfile({
                    //     photoURL:downloadURL
                    // })
                });
            }
        );
    }
    return (
        <div className="profile">
            <NavBar className="insnavbar" />
            <div className="image">
                <div className="img34"></div>
                {/* <image className="img34" src="../images/loginicon.png"></image>  */}
            </div>
            <div className="upload">
                <input type="file" accept="image/*" onChange={(event) => UploadImage(event)} className='btnupload' />
            </div>
        </div>
    )
}

export default Profile;
