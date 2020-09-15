import React from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import './sign-in.styles.css'
import { Paper } from '@material-ui/core';


class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault()
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: "", password: "" })
        } catch (error) {
            console.log(error)
        }

    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in col-xs-6' style={{ top: "120px", position: "absolute", left: "10%"}}>
                <Paper elevation={8} style={{ padding: "8%", width: "80%" }}>
                    <h1>I already have an account</h1>
                    <span>Sign in with your email</span>

                    <form action="" onSubmit={this.handleSubmit}>

                        <FormInput type="email" name="email" value={this.state.email} required handleChange={this.handleChange} label='Email' />

                        <FormInput type="password" name='password' value={this.state.password} required handleChange={this.handleChange} label='Password' />

                        <CustomButton type="submit"> SIGN IN </CustomButton>
                        <CustomButton onClick={signInWithGoogle}> SIGN IN WITH GOOGLE </CustomButton>
                    </form>
                </Paper>

            </div>
        )
    }
}

export default SignIn