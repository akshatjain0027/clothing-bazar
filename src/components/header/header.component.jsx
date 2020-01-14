import React from 'react'
import { connect } from 'react-redux' // It is a higher order component used to get access to redux. It connects the react component to redux store.
import { Link } from 'react-router-dom'
import './header.styles.css'
import { auth } from '../../firebase/firebase.utils'

const Header = ({currentUser}) => (
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

            {
                currentUser?
                <Link className='option' onClick={() => auth.signOut()} to='/'>SIGN OUT</Link>
                : <Link className='option' to='/signin'> SIGN IN </Link>
            }

        </div>
    </div>
)

const mapStateToProps = state => ({
    currentUser : state.user.currentUser
});

export default connect(mapStateToProps)(Header) ;