import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';


class App extends React.Component{

  unsubscribeFromAuth=null

  componentDidMount(){
this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth=>{
  if(userAuth)
  {
    const {setCurrentUser} = this.props;
    const userRef = await createUserProfileDocument(userAuth);

    userRef.onSnapshot(snapShot =>{

      setCurrentUser({
          id:snapShot.id,
          ...snapShot.data()
      });
    });
  }
  else{
    setCurrentUser({
      currentUser: userAuth
    });
  }
  
});


  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){return (
    <div>
    <Header/>
    <Switch>
    <Route exact path='/' component={Homepage}/>
    <Route path='/shop' component={Shop}/>
    <Route path='/sign-in-and-sign-up' render={()=>this.props.currentUser ? (<Redirect to='/'/>) :(<SignInAndSignUp/>)}/>
    </Switch>
    </div>
    
  )};
}

const mapStatetoProps=({user})=>({
currentUser:user.currentUser 
});

const mapDispatchtoProps=(dispatch)=>({
  setCurrentUser : user=>dispatch(setCurrentUser(user))
})
 
export default connect(mapStatetoProps,mapDispatchtoProps)(App);
