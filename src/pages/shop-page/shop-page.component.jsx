import React from 'react'
import { connect } from 'react-redux';
import SHOP_DATA from './shop-page.data'
import './shop-page.styles.css'
import { getParticularCategory } from '../../firebase/firebase.utils';
import { Card, CircularProgress, Drawer, Fab, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, Typography, withStyles } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import { addItem } from '../../redux/cart/cart.action';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import wavy from "../../assets/wavy.jpg"
import { withRouter } from 'react-router-dom';
import ProductPage from '../product-page/product-page';

const CustomDrawer = withStyles(theme => ({
    paper: {
        width: "20%",
    }
}))(Drawer);

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA,
            category: window.location.pathname.split("/")[2],
            loading: true,
            mensCollections: [],
            womensCollections: [],
            genderValue: "male",
            drawerOpen: false,
            sortBy: "none",
            productDialogOpen: false ,
            productDialogItem: null
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

    onGenderValueChange = (event) => {
        this.setState({
            genderValue: event.target.value
        })
    }
    handleSortMenuChange = (event) => {
        this.setState({
            sortBy: event.target.value
        })
    }
    handleDrawer = () => {
        this.setState({
            drawerOpen: !this.state.drawerOpen
        })
    }
    handleProductDialogOpen = item => {
        this.setState({
            productDialogOpen: true,
            productDialogItem: item
        })
    }
    handleProductDialogClose = () => {
        this.setState({
            productDialogOpen: false,
            productDialogItem: null
        })
    }

    renderProducts = () => {
        const { mensCollections, womensCollections, genderValue, sortBy, category } = this.state;
        var products = genderValue === "male" ? mensCollections : womensCollections;
        products = sortBy === "price" ? products.sort((a, b) => a.discountPrice - b.discountPrice) : products;
        return products.map(item => {
            return (
                <Grid container direction="column" style={{ width: "25%", padding: "2%" }}>
                    <Card elevation={10}>
                        <img src={item.images[0]} alt="" style={{ width: "100%", height: "70%", cursor: "pointer" }} onClick={()=>{this.handleProductDialogOpen(item)}}/>
                        <Grid container direction="column" style={{ padding: "5%" }}>
                            <Typography variant="h5" style={{ textAlign: "center" }}>{item.name}</Typography>
                            <Grid container direction="row" justify="space-between" style={{ paddingTop: "10%", textAlign: "center" }}>
                                <Typography variant="h4">&#x20B9; {item.discountPrice.toPrecision(4)}</Typography>
                                {
                                    this.props.currentUser ?
                                        <Fab color="default" size="small" onClick={() => this.props.addItem(item)}>
                                            <ShoppingCartOutlinedIcon fontSize="small" />
                                        </Fab>
                                        : null
                                }
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            )
        })
    }

    genderButtons = () => {
        const { genderValue } = this.state;
        return (
            <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={genderValue} onChange={this.onGenderValueChange}>
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>
            </FormControl>
        );

    }

    sortMenu = () => {
        const { sortBy } = this.state;
        return (
            <FormControl>
                <InputLabel id="sort-select">SORT BY</InputLabel>
                <Select
                    labelId="sort-select"
                    id="sort-select"
                    value={sortBy}
                    onChange={this.handleSortMenuChange}
                >
                    <MenuItem value="none">None</MenuItem>
                    <MenuItem value="price">Price</MenuItem>
                </Select>
            </FormControl>
        )
    }

    render() {
        const { category, loading, drawerOpen, productDialogOpen, productDialogItem } = this.state
        console.log(this.state.womensCollections)
        return loading ?
            <div style={{ margin: "20% 50%" }}><CircularProgress color="secondary" size={100} /></div> : (
                <div>
                    {productDialogOpen && <ProductPage open={productDialogOpen} product={productDialogItem} handleClose={this.handleProductDialogClose}/>}
                    <img src={wavy} alt="" style={{ width: "100%", height: "600px", position: "relative" }} />
                    <div className='shop-page' style={{ margin: "6%", position: "absolute", top: "100px" }}>
                        <CustomDrawer anchor="right" variant="temporary" open={drawerOpen} onClose={this.handleDrawer}>
                            <Grid container direction="column" style={{ padding: "5%" }}>
                                <Typography variant="h3">
                                    Filters
                                </Typography>
                                {this.genderButtons()}
                                {this.sortMenu()}
                            </Grid>
                        </CustomDrawer>
                        <Typography variant="h1" style={{ color: "white", textAlign: "center", fontFamily: "cursive", marginBottom: "5%" }}>
                            {category.toUpperCase()}
                        </Typography>
                        <Card elevation={8} style={{ padding: "2%", backgroundColor: "beige" }}>
                            <Fab onClick={this.handleDrawer}>
                                <MenuIcon color="secondary" fontSize="large" />
                            </Fab>
                            <Grid container direction="row" justify="space-between">
                                {
                                    this.renderProducts()
                                }
                            </Grid>
                        </Card>

                    </div>
                </div>
            )
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShopPage));