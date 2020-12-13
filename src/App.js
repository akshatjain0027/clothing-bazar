import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'   // this function by default passes the top level state to our selectors without our explicitly mentioning the state.

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import CheckoutPage from './pages/checkout/checkoutpage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';

import Header from './components/header/header.component';

import {auth, createUserProfileDocument} from './firebase/firebase.utils'

import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selectors';
import ProductPage from './pages/product-page/product-page';
import ContactPage from './pages/contact-page/contactPage';


class App extends React.Component {
  // The constructor is not required after the redux is used in the app
  // constructor(){
  //   super();

  //   this.state= {
  //     currentUser: null
  //   }

  // }
  

  // checking for the change in the state of user and changing the current user
  unsubscribeFromAuth = null

  componentDidMount(){
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      
      // if the userAuth object is not null
      if(userAuth) {
        const userReference = await createUserProfileDocument(userAuth); 

        // creating a snapshot object from the user reference object and saving the user data in our currentuser data
        userReference.onSnapshot( snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()  // the data method on snapshot object is used to gather the data from our database 
            })
          })     
      }

      // if the userAuth object is null that is the user logs out
      else {
        setCurrentUser()
      }        
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/contact' component={ContactPage} /> 
          <Route exact path='/checkout' component={CheckoutPage} /> 
          <Route exact path='/signin' render={ () => this.props.currentUser? (<Redirect to='/'/>): (<SignInAndSignUpPage/>)}/>  {/**the signin and signup page will only render if there is no current user present(logged in) in our app otherwise it will be redirected to our home page */}  
          <Route exact path="/shop/:category" component={ShopPage}/>
          <Route exact path="/shop/:category/:id" component={ProductPage}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

// the mapdispatchtoprops function is used to dispatch the action to all the reducers. This means that we can use the setcurrentuser function in our app now.
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
