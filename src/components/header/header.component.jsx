import React from 'react'
import { connect } from 'react-redux' // It is a higher order component used to get access to redux. It connects the react component to redux store.
import { Link } from 'react-router-dom'
import './header.styles.css'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'


const Header = ({currentUser ,hidden}) => (
    <div className='header'>
        <Link className='logo' to='/'>
            <i className="glyphicon glyphicon-tags"></i>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {/* Managing sign in and sign out links in our header */}
            {
                currentUser?
                <Link className='option' onClick={() => auth.signOut()} to='/'>SIGN OUT</Link>
                : <Link className='option' to='/signin'> SIGN IN </Link>
            }

            <CartIcon/>
        </div>
        
        {/* Including cartDropdown in our header */}
        {
            hidden? null:<CartDropdown/>     // if hidden property of cart state is false then only cartdropdown will show
        }
        
    </div>
)

const mapStateToProps = state => ({
    currentUser : state.user.currentUser,
    hidden: state.cart.hidden
});

export default connect(mapStateToProps)(Header) ;