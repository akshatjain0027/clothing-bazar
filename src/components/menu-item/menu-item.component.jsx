import { Card } from '@material-ui/core'
import React from 'react'
import {withRouter} from 'react-router-dom'
import './menu-item.styles.css'

const MenuItem = ({category, imageUrl, history, match}) => {

    // for making men and women menu items
    // if(size==='large'){
    //     var className = 'menu-item col-md-6'
    // }

    // // for making hats, jackets and sneakers menu items
    // else{
    //     className = 'menu-item col-md-4'
    // }

    return (
    
        <Card style={{backgroundImage: `url(${imageUrl})`}} elevation={8} className="menu-item col-md-4" onClick={() => history.push(`/shop/${category}`)}>
            
            <div className='content'>
                <h1>{category.toUpperCase()}</h1>
                <span>SHOP NOW</span> 
            </div>                
        </Card>
    )
    
    
}
export default withRouter(MenuItem)