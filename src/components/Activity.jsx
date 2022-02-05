import React,{useState} from 'react';
import "../styles/activity.css"
import NavBar from './NavBar';
import {db} from "../firebase"

function Activity() {
    const user = localStorage.getItem('Email')
    const [val,setVal] = useState("")
    const [cmnt,setCmnt] = useState([])
    const addCmnt = () => {
        setCmnt([...cmnt,{
          id:cmnt.length,
          value:val
        }])
        setVal("")
      }
      const Todo = () => {
        db.collection(user).doc("activity").set({cmnt});
        window.M.toast({ html: "Your Data Has been safed", classes: "green" })
        setCmnt([])
      }

    return (
        <div className="activity">
            <NavBar className="insnavbar1" />
            <div className="body1">
                <div className="left1">
                    <h1 className='h1activity'>List Your Goal</h1>
                </div>
                <div className="right1">
                    <div className="todo">
                        <div className="activityinput"><input type="text" placeholder="Add your activity" value={val} onChange = {e => setVal(e.target.value)}/></div>
                        <div className="addsection"><button className='add' onClick={addCmnt}>ADD</button></div>
                    </div>
                    <div className="csection">
                    {
                        cmnt.map(c => (
                        <div key = {c.id} className="comment">{c.value}</div>
                        ))
                    }
                    </div>
                    <div className="submitsection">
                        <div className="submit" onClick={() => Todo()}>SUBMIT</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activity;
