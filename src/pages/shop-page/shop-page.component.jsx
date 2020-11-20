import React from 'react'
import SHOP_DATA from './shop-page.data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import './shop-page.styles.css'
import { getParticularCategory } from '../../firebase/firebase.utils';
import { Card, CircularProgress, Fab, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Typography } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA,
            category: window.location.pathname.split("/")[2],
            loading: true,
            mensCollections: [],
            womensCollections: [],
            genderValue: "male"
        }
    }
    componentDidMount() {
        getParticularCategory(this.state.category).then(async snap => {
            const menref = snap.ref.collection("men");
            const mensnapshot = await menref.get()
            var data = []
            mensnapshot.forEach(s => {
                data.push(s.data())
            })
            const womenref = snap.ref.collection("women")
            const womenSnapshot = await womenref.get()
            var womendata = []
            womenSnapshot.forEach(s => {
                womendata.push(s.data())
            })
            this.setState({
                mensCollections: data,
                womensCollections: womendata
            })
            this.setState({
                loading: false
            })
        })
    }

    onGenderValueChange = (event)=>{
        this.setState({
            genderValue: event.target.value
        })
    }

    renderProducts = () => {
        const { mensCollections, womensCollections, genderValue } = this.state;
        const products = genderValue == "male"? mensCollections: womensCollections ;
        return products.map(item => {
            return (
                <Grid container direction="column" style={{ width: "25%", padding: "2%" }}>
                    <Card elevation={10}>
                        <img src={item.images[0]} alt="" style={{ width: "100%", height: "70%" }} />
                        <Grid container direction="column" style={{ padding: "5%" }}>
                            <Typography variant="h5" style={{ textAlign: "center" }}>{item.name}</Typography>
                            <Grid container direction="row" justify="space-between" style={{ paddingTop: "10%", textAlign: "center" }}>
                                <Typography variant="h4">Rs. {item.discountPrice.toPrecision(4)}</Typography>
                                <Fab color="default" size="small">
                                    <ShoppingCartOutlinedIcon fontSize="small" />
                                </Fab>
                            </Grid>
                        </Grid>

                    </Card>

                </Grid>
            )
        })
    }

    genderButtons = ()=>{
        const {genderValue} = this.state;
        return (
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup aria-label="gender" name="gender1" value={genderValue} onChange={this.onGenderValueChange}>
                <FormControlLabel value="female" control={<Radio />} label="Female"/>
                <FormControlLabel value="male" control={<Radio />} label="Male" />
              </RadioGroup>
            </FormControl>
          );
        
    }

    render() {
        const { category, loading } = this.state
        console.log(this.state.womensCollections)
        return loading ?
            <div style={{ margin: "20% 50%" }}><CircularProgress color="secondary" size={100} /></div> : (
                <div className='shop-page' style={{ margin: "6%" }}>
                    <Typography variant="h3">
                        {category.toUpperCase()} YOU MAY LIKE
                    </Typography>
                    <hr />
                    {this.genderButtons()}
                    <Grid container direction="row" justify="space-between">
                        {
                            this.renderProducts()
                        }
                    </Grid>

                    {/* {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id}  {...otherCollectionProps}/>
                    ))
                } */}

                </div>

            )
    }
}

export default ShopPage