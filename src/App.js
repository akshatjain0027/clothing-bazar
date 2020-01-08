import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'

class App extends React.Component {
  constructor(){
    super();

    this.state= {
      currentUser: null
    }

  }

  // checking for the change in the state of user and changing the current user
  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      
      // if the userAuth object is not null
      if(userAuth) {
        const userReference = await createUserProfileDocument(userAuth); 

        // creating a snapshot object from the user reference object and saving the user data in our currentuser data
        userReference.onSnapshot( snapShot => {
          this.setState({
            currentUser : {
              id: snapShot.id,
              ...snapShot.data()  // the data method on snapshot object is used to gather the data from our database 
            }
          })
        }) 
      }

      // if the userAuth object is null that is the user logs out
      else {
        this.setState({ currentUser: userAuth})
      }        
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }


  render(){
    return (
      <div>
        <Header currentUser ={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
