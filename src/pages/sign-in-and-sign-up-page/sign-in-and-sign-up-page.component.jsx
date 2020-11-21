import React from 'react'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'
import './sign-in-and-sign-up-page.styles.css'
import background from "../../assets/background2.jpg"
const SignInAndSignUpPage = () => (
    <div className='SignIn-SignUp'>
        <img src={background} alt="" style={{ position: "relative", height: "900px", opacity: "0.7", width: "100%"}}/>
        <SignIn/>
        <SignUp/>
    </div>
    
)

export default SignInAndSignUpPage