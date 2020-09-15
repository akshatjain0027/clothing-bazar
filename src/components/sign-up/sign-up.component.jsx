import React from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-up.styles.css'
import { Paper } from '@material-ui/core';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault()

        const { displayName, email, password, confirmPassword } = this.state;

        // first we will check if the password is equal to the confirm password or not
        if (password !== confirmPassword) {
            alert('Passwords dont match')
            return;
        }
        // we will create a new user using the info provided by the user in the form
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);   // this will create a user 
            await createUserProfileDocument(user, { displayName })  // this will save the user in our database

            // to clear out our form after creating and saving the user
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.error(error)
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up col-xs-6' style={{ top: "120px", position: "absolute", left: "50%"}}>
                <Paper elevation={8} style={{ padding: "8%", width: "80%" }}>

                    <h1>I dont have an account</h1>
                    <span>Sign up using email and password</span>

                    <form action="" onSubmit={this.handleSubmit}>
                        <FormInput type='text' name='displayName' value={displayName} required onChange={this.handleChange} label='Name' />
                        <FormInput type='email' name='email' value={email} required onChange={this.handleChange} label='Email' />
                        <FormInput type='password' name='password' value={password} required onChange={this.handleChange} label='Password' />
                        <FormInput type='password' name='confirmPassword' value={confirmPassword} required onChange={this.handleChange} label='Confirm Password' />

                        <CustomButton type='submit'> SIGN UP </CustomButton>
                    </form>
                </Paper>
            </div>
        )
    }
}

export default SignUp;