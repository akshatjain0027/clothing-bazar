import React from 'react'
import { connect } from 'react-redux' // It is a higher order component used to get access to redux. It connects the react component to redux store.
import { Link } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'   // this function by default passes the top level state to our selectors without our explicitly mentioning the state.

import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    header: {
        marginBottom: "5%"
    },
    toolBar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: "5%",
        paddingRight: "5%"
    },
    logo: {
        fontSize: "40px",
        color: "rgb(236, 222, 17)"
    },
    title: {
        padding: "5%",
        paddingLeft: "10%",
        fontFamily: "cursive"
    },
    options: {
        float: "right",
        justifyContent: "space-between",
        fontSize: "20px",
    },
    option: {
        padding: "5px 10px",
        cursor: "pointer",
        color: "white"
    }
}))


const Header = ({ currentUser, hidden }) => {

    const classes = useStyles()

    return (
        <div className='header'>
            <AppBar color="secondary" className={classes.header}>
                <Toolbar className={classes.toolBar}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <Link className={classes.logo} to='/'>
                            <i className="glyphicon glyphicon-tags"></i>
                        </Link>
                        <Typography variant="h3" color="default" className={classes.title}>
                            cBazaaar
                        </Typography>
                    </div>
                    <div className={classes.options}>
                        <Link className={classes.option} to='/shop'>
                            SHOP
                    </Link>
                        <Link className={classes.option} to='/shop'>
                            CONTACT
                    </Link>
                        {/* Managing sign in and sign out links in our header */}
                        {
                            currentUser ?
                                <Link className={classes.option} onClick={() => auth.signOut()} to='/'>SIGN OUT</Link>
                                : <Link className={classes.option} to='/signin'> SIGN IN </Link>
                        }
                        {
                            currentUser ?
                                <CartIcon />
                                : null
                        }
                    </div>

                    {/* Including cartDropdown in our header */}
                    {
                        hidden ? null : <CartDropdown />     // if hidden property of cart state is false then only cartdropdown will show
                    }
                </Toolbar>
            </AppBar>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);