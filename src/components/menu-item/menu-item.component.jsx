import React from 'react'
import {withRouter} from 'react-router-dom'
import './menu-item.styles.css'

const MenuItem = ({title, size, imageUrl, history, linkUrl, match}) => {
    // to add a background image
    const styles = {
        backgroundImage: 'url('+ imageUrl + ')'
    }

    // for making men and women menu items
    if(size==='large'){
        var className = 'menu-item col-md-6'
    }

    // for making hats, jackets and sneakers menu items
    else{
        className = 'menu-item col-md-4'
    }

    return (
    
        <div style={styles}  className={className} onClick={() => history.push(linkUrl)}>
            
            <div className='content'>
                <h1>{title.toUpperCase()}</h1>
                <span>SHOP NOW</span> 
            </div>                
        </div>
    )
    
    
}
export default withRouter(MenuItem)