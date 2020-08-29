import React from 'react'
import { Button } from '@material-ui/core'
import "./Login.css"
import { auth, provider } from '../../firebase'
import { useStateValue } from '../../StateProvider'
import { actionTypes } from '../../reducer'

function Login() {

    const[state,dispatch]= useStateValue();
    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then(result=>{
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            })
        }).catch(error=>alert(error.message))
    }
    return (
        <div className="Login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt=""/>
                <img src="https://download.logo.wine/logo/Facebook/Facebook-Logo.wine.png" alt=""/>
            </div>
            <Button type="submit" onClick={signIn}>sign in</Button>
        </div>
    )
}

export default Login
