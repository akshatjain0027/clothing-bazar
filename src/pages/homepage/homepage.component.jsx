import React from 'react'
import Directory from '../../components/directory/directory.component'
import './homepage.styles.css'
import Carousel from 'react-material-ui-carousel'
import { Box, Button, Divider, makeStyles, Typography } from '@material-ui/core'
import vibrantImage2 from "../../assets/vibrantImage2.jpg"
const styles = makeStyles({
    cartImage: {
        height: "500px",
        border: "none",
        width: "100%"
    },
    hashtag: {
        position: "absolute", 
        top: "190px", 
        left: "10%", 
        fontFamily: "cursive", 
        fontWeight: "bold",
        width: "40%",
        color: "white"
    },
    catch: {
        position: "absolute", 
        top: "250px", 
        left: "10%", 
        fontFamily: "cursive", 
        width: "20%",
        // textAlign: "center",
        color: "white"
    },
    shopButton: {
        position: "absolute",
        left: "10%",
        top: "370px",
        width: "8%"
    },
    Carousel: {
        width: "100%",
        height: "300px",
    }
})
const HomePage = () => {
    const classes = styles()
    return ( 
    <div className='homepage'>
        <div style={{ marginBottom: "1%"}}>
            <img src={vibrantImage2} alt="" className={classes.cartImage}/>
            <Typography variant="h2" className={classes.hashtag}>
                #OneClickShopping
            </Typography>
            <Typography variant="h3"className={classes.catch}>
                Buy your favourite things with a single click
            </Typography>
            <Button className={classes.shopButton} size="large" variant="contained" color="secondary" onClick={()=>{window.scrollTo(0,820)}}>
                Shop Now
            </Button>
        </div>
        <Carousel className={classes.Carousel}  animation="slide" interval={3000} indicators={false}>
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
        <Box paddingLeft="3%" paddingTop="2%">
            <Typography variant="h2">
                CATEGORIES
            </Typography>
            <Divider/>
        </Box>
        
        <Directory/>

    </div>    
    
    )
}
export default HomePage