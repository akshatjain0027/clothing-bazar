import React from 'react'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'
import './sign-in-and-sign-up-page.styles.css'

const SignInAndSignUpPage = () => (
    <div className='SignIn-SignUp'>
        <SignIn/>
        <SignUp/>
    </div>
    
)

export default SignInAndSignUpPage