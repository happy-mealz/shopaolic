import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import {Switch, Route} from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';


class App extends React.Component{
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }

  unsunscribeFromAuth=null

  componentDidMount(){
this.unsunscribeFromAuth = auth.onAuthStateChanged( async userAuth=>{
  if(userAuth)
  {
    const userRef = await createUserProfileDocument(userAuth);

    userRef.onSnapshot(snapShot =>{

      this.setState({
        currentUser:{
          id:snapShot.id,
          ...snapShot.data()
        }
      },()=>{
        console.log(this.state);
      });
    });
  }
  else{
    this.setState({
      currentUser: userAuth
    });
  }
  
});


  }

  componentWillUnmount(){
    this.unsunscribeFromAuth();
  }
  render(){return (
    <div>
    <Header currentUser={this.state.currentUser}/>
    <Switch>
    <Route exact path='/' component={Homepage}/>
    <Route path='/shop' component={Shop}/>
    <Route path='/sign-in-and-sign-up' component={SignInAndSignUp}/>
    </Switch>
    </div>
    
  )};
}

export default App;
