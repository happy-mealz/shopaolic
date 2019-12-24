import React from 'react';

import './sign-up.style.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth ,createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component{
    constructor(){
        super();
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    onSubmitHandler =async event =>{
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword)
        {
            alert("PAssword dont match");
            return;
        }
        try{

            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,{displayName})

            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            });

        }catch(error)
        {
            console.error(error);
        }



    }

    onChangeHandler=(event)=>{
      const {name,value}=event.target;

       this.setState({[name]: value});
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h3 className="title">SIGN-UP</h3>
                <span>I do not have an account</span>
                <form className="sign-up-form" onSubmit={this.onSubmitHandler}>
                <FormInput 
                    type="text" 
                    value={displayName} 
                    name="displayName" 
                    changeHandler={this.onChangeHandler} 
                    label="Name"
                    required/>

                    <FormInput 
                    type="email" 
                    value={email} 
                    name="email" 
                    changeHandler={this.onChangeHandler} 
                    label="Email"
                    required/>

                    <FormInput 
                    type="password" 
                    value={password} 
                    name="password" 
                    changeHandler={this.onChangeHandler} 
                    label="Password"
                    required/>

                    <FormInput 
                    type="password" 
                    value={confirmPassword} 
                    name="confirmPassword" 
                    changeHandler={this.onChangeHandler} 
                    label="Confirm Password"
                    required/>

                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;