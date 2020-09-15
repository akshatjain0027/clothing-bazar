import React from 'react'
import Directory from '../../components/directory/directory.component'
import './homepage.styles.css'
import Carousel from 'react-material-ui-carousel'
import { makeStyles } from '@material-ui/core'
const styles = makeStyles({
    Carousel: {
        width: "100%",
        height: "300px"
    }
})
const HomePage = () => {
    const classes = styles()
    return ( 
    <div className='homepage'>
        <Carousel className={classes.Carousel}  animation="fade" interval={3000} indicators={false}>
            <div style={{ height:"fit-content" }}>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/TVs/BAU/MiGW/V247704887_IN_HETV_Mi_Horizon_GW_PC_Tollhero_1500x600_v2._CB405451160_.jpg" alt=""/>
            </div>
            <div>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Redmi_Note9Pro_Max/Available_Now/Per_Daycallout/TallHero_1500X600_1._CB405352815_.jpg" alt=""/>
            </div>
            <div>
                <img src="https://rukminim1.flixcart.com/flap/1688/280/image/d26b7761ea060c0c.jpg?q=50" alt=""/>
            </div>
            <div style={{ height:"fit-content" }}>
                <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/9/12/6bf3ad14-a959-4618-9df9-bd7d5514ed151599889503383-Happy-Hours-DK.jpg" alt=""/>
            </div>
        </Carousel>
        <Directory/>

    </div>    
    
    )
}
export default HomePage