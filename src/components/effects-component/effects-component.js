import userEvent, { useEffect, useState } from "react";

export function Login () {
    useEffect(() =>{
        alert("Login Component Requested and will mount");
        return() =>{
            alert("Login Component Unmounted")
        }
    },[])
    return(
        <div>
            <h2>User Login</h2>
        </div>
    )
}

export function Register () {
    useEffect(() =>{
        alert("Register Component Requested and will mount");
        return() =>{
            alert("Register Component Unmounted")
        }
    },[])
    return(
        <div>
            <h2>Register New User</h2>
        </div>
    )
}

export function EffectComponent () {
const [component,setComponent] = useState('');

function LoginClick () {
    setComponent(<Login />)
}
 
function RegisterClick () {
    setComponent(<Register />)
}

    return (
        <div className="container-fluid">

        <button className="btn btn-primary m-2" onClick={LoginClick} >Login</button>
        <button className="btn btn-danger m-2" onClick={RegisterClick} >Register</button>
        <div>
            {component}
        </div>
        </div>
    )
}