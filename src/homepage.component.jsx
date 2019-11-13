import React from 'react'
import './homepage.styles.css'

const HomePage = () => {
    return ( 
    <div class='container'>
        <div class= 'row'>
            <div class='col-md-4'>
                <div className='content'>
                    <h1>HATS</h1>
                    <span>SHOP NOW</span> 
                </div>                
            </div>
            <div class='col-md-4'>
                <div className='content'>
                    <h1>JACKETS</h1>
                    <span>SHOP NOW</span>
                </div>                
            </div>
            <div class='col-md-4'>
                <div className='content'>
                    <h1>SNEAKER</h1>
                    <span>SHOP NOW</span>
                </div>
            </div>
        </div>
        <div class= 'row'>
            <div class='col-md-6'>
                <div className='content'>
                    <h1>WOMEN</h1>
                    <span>SHOP NOW</span>
                </div>
            </div>
            <div class='col-md-6'>
                <div className='content'>
                    <h1>MEN</h1>
                    <span>SHOP NOW</span>
                </div>
            </div>
        </div>

    </div>    
    
    )
}
export default HomePage