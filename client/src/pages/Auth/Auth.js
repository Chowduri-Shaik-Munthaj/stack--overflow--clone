import React from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import './Auth.css'
import icon from '../../assets/icon.png'
import AboutAuth from './AboutAuth'
import { useState } from 'react'
import {signup,login} from '../../actions/auth'
const Auth = () => {
    const [isSignUp , setIsSignup] = useState(false);
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('5')
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const handleSwitch = () => {
        setIsSignup(!isSignUp)
    } 
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(isSignUp){
            // console.log("in Auth.jsx sign up")
            dispatch(signup({name,email,password}, navigate));  
        }
        else{
            dispatch(login({email, password}, navigate));
        }
          
        if(isSignUp & !name){
            alert("Enter a name to container")
        }
          //if login or sign in with name
        else if(!email){
            alert("Enter email to container")
         }  
        else if(!password){
            alert("Enter password to container")
          }
        
        console.log({email,password})
    }
    return(
        <section class='auth-section'>
            {isSignUp && <AboutAuth />}
            <div class='auth-container'>
            {isSignUp || <img src={icon} style={{width:38}}alt='stack overflow' className='login-logo'/>}
                <form onSubmit={handleSubmit}>
                    {
                        isSignUp && (
                            <label htmlFor='name'>
                                <h4>Display Name</h4>
                                <input type="text" id="name" name="name"  onChange={(e) => {setName(e.target.value)}}/>
                            </label>
                        )
                    }
                    <label htmlFor='email'>
                        <h4>Email</h4>
                        <input type="email" name='email' id='email' onChange={(e) => {setEmail(e.target.value)}} />
                    </label>
                    <label htmlFor='password'>
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                           <h4>Password</h4>
                           {!isSignUp && <h4 style={{color:"#007ac6"}}>Forgot Password ?</h4>}
                        </div>
                        <input type="password" name='password' id='password' onChange={(e) => {setPassword(e.target.value)}} />
                        { isSignUp && <p style={{color:"#343434",fontSize : 13}}>Passwords must contain at least eight<br /> 
                        characters,including at least 1 letter and 1 number</p>}
                    </label>
                    {
                        isSignUp && (
                            <label htmlFor='check'>
                                <input type="checkbox" id='check' />
                                <p style={{color:'#454545',fontSize : 13}}> Opt-in to recieve occasional,<br />
                                product updates,research invitations,<br />
                                company announcements, and digests.</p>
                            </label>
                        )
                    }
                    <button type='submit' className='auth-btn'>{isSignUp ? 'Sign up': 'Log in'}</button>
                    {
                        isSignUp && (
                            <p style={{color:"#666763",fontSize : 13}}>
                                By clicking "Sign up",you agree to our 
                                <span style={{ color: "#007ac6",fontSize:13}}> terms <br/> of service</span>,
                                <span style={{ color: "#007ac6",fontSize:13}}>privacy policy </span> and 
                                <span style={{ color: "#007ac6",fontSize:13}}> cookie policy</span>
                            </p>
                        )
                    }
                </form>
                <p>
                    {isSignUp ? "Already have an account?": "Don't have any account? "}
                    <button type='button' style={{fontSize:16, color: "#007ac6"}}className='handle-switch-btn' onClick={handleSwitch}>{ isSignUp ? "Log in":"sign up"}</button>
                </p>

            </div>
        </section>
    )
}
export default Auth;