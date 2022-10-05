import { Button } from '@mui/material'
import React from 'react'
import FB from "../src/FB.png"
import fbl from "../src/fbl.png"
import "./Login.css"
import {auth,provider} from "./firebase"
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'
function Login() {
    const [state,dispatch]=useStateValue();
    const signIn=()=>{
        auth
        .signInWithPopup(provider)
        .then(result=>{
            dispatch({
           type:actionTypes.SET_USER,
           user:result.user,
            })
        }).catch((error)=>alert(error.message))
    }
  return (
    <div className='login'>
        <div className='login_logo'>
            <img className='log1' src={FB}/>
            <br/>
            <img className='log2' src={fbl}/>
        </div>
        <Button className='btn' type='submit' onClick={signIn}>
            Sign In
        </Button>
    </div>
  )
}

export default Login