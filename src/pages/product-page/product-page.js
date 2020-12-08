import { Card, Dialog, Fab, Grid, Typography, withStyles } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import SpecificationTable from '../../components/specificationTable/specificationTable';


const ProductDialog = withStyles(theme => ({
       paper: {
           width: "800px",
           height: "800px"
       } 
}))(Dialog)

const styles = theme => ({
    carousel: {
        width: "100%",
        height: "500px",
        padding: "1% 5%",
    }
})
class ProductPage extends React.Component{
    constructor(props){
        super(props);
    }

    renderImages = (images) => {
        return images.map(image=>{
            return (
                <div>
                    <img src={image} style={{width: "100%", height: "400px"}}/>
                </div>
            )
        })
    }

    render(){
        const {open, handleClose, product, classes} = this.props;
        return (
            <ProductDialog open={open} onClose={handleClose} scroll="paper" maxWidth="lg">
                <Grid container direction="column" style={{padding: "1%"}}>
                    <div style={{textAlign:"end"}}>
                        <Fab onClick={handleClose} size="small" color="secondary">
                            <Close fontSize="medium"/>
                        </Fab>
                    </div>
                    <Grid container direction="row" justify="space-between" style={{padding: "0 5%"}}>
                        <Typography variant="h3" style={{width: "100%", marginBottom: "5%"}}>
                            {product.name}
                        </Typography>
                    </Grid>
                    <Carousel className={classes.carousel} showArrows={true} animation="fade" interval={5000} indicators={true}>
                        {this.renderImages(product.images)}
                    </Carousel>

                    <Grid container direction="column" style={{padding: "0 5%", paddingBottom: "4%"}}>
                        <Typography variant="h6" style={{textDecoration: "line-through", fontWeight: "lighter", color: "grey"}}>
                            &#x20B9; {product.actualPrice.toPrecision(5)}
                        </Typography>
                        <Grid container direction="row">
                            <Typography variant="h3" style={{fontWeight: "bold"}}>
                                &#x20B9; {product.discountPrice.toPrecision(4)}
                            </Typography>
                            <Typography variant="body1" style={{paddingTop: "2%", paddingLeft: "1%"}}>
                                {product.discountPercentage.toPrecision(2)}% off
                            </Typography>
                        </Grid>
                    </Grid>
                
                    <Card elevation={8} style={{width: "60%", marginLeft: "5%"}}>
                        <SpecificationTable specs={product.specifications}/>
                    </Card>
                </Grid>
            </ProductDialog>
        )
    }
}

export default withStyles(styles)(ProductPage);