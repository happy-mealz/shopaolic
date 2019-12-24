import React from 'react';
import './sign-in.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth,signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:""
        };

    }

    onSubmitHandler= async event=>{
        event.preventDefault();
        const {email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:"", password:""});
        }
        catch(error)
        {
            console.error(error);
        }
        
    }

    onChangeHandler=(event)=>{
        const {value, name}= event.target;
        this.setState({[name]:value});
    }
    
    render(){
        return(
            <div className="sign-in">
                <h3 className="title">SIGN-IN</h3>
                <span>I already have an account</span>
                <form onSubmit={this.onsubmitHandler}>
                    <FormInput 
                    type="email" 
                    value={this.state.email} 
                    name="email" 
                    changeHandler={this.onChangeHandler} 
                    label="Email"
                    required/>
                    
                    <FormInput 
                    type="password" 
                    value={this.state.password} 
                    name="password" 
                    changeHandler={this.onChangeHandler} 
                    label="Password"
                    required/>
                    
                    <div className="buttons">
                   <CustomButton type="submit">SIGN IN</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogle={true}>{''}SIGN IN WITH GOOGLE{''}</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;