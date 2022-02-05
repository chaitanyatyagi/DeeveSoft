import NavBar from "./NavBar";
import "../styles/goal.css"
import { useState} from "react"
import { db } from "../firebase"

function Goal() {
    const user = localStorage.getItem('Email')
    const [value, setValue] = useState("")
    const [goal, setGoal] = useState([])
    const [t, setT] = useState(true)

    const goals = {
        d1: "Get learner",
        d2: "Get active again",
        d3: "Reduce pain or injury",
        d4: "Improve cardio or speed",
        d5: "Improve sports performance"
    }
    const AddToList = () => {
        setGoal([...goal, {
            'goal': value
        }])
        console.log("yes")
    }


    const TargetToFirebase = () => {
        db.collection(user).doc("goal").set({ goal });
        window.M.toast({ html: "Your Data Has been safed", classes: "green" })
    }
    const Message = () => {
        window.M.toast({ html: "Already Safed", classes: "green" })
    }
    return (
        <div className="goal">
            <NavBar className="insnavbar" />
            <div className="body">
                <div className="left">
                    <h1>GOAL</h1>
                    <p>Select your Primary Goal.What do you want to accomplish in next few months?</p>
                </div>
                <div className="right">
                    <div className="rightup">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"     onClick={() => {
                                setValue(goals.d1)
                            AddToList()
                        }}>{goals.d1}</span>
                        </label>

                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"   onClick={() => {
                                setValue(goals.d2)
                                AddToList()
                            }}>{goals.d2}</span>
                        </label>

                        <label class="container" >
                            <input type="checkbox"  />
                            <span class="checkmark" onClick={() => {
                            setValue(goals.d3)
                            AddToList()
                        }}>{goals.d3}</span>
                        </label>

                        <label class="container" >
                            <input type="checkbox"  />
                            <span class="checkmark" onClick={() => {
                            setValue(goals.d4)
                            AddToList()
                        }}>{goals.d4}</span>
                        </label>
                        <label class="container" onClick={() => {
                                setValue(goals.d5)
                            AddToList()
                        }}>
                            <input type="checkbox" />
                            <span class="checkmark">{goals.d5}</span>
                        </label>
                    </div>
                    <div className="rightdown">
                        {
                            t ? <button className="btn" onClick={() => TargetToFirebase()}>SUBMIT</button> : <button className="btn" onClick={() => {
                                setT(false)
                                Message()
                            }}>SUBMIT</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Goal;
