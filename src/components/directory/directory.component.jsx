import { Card, Grid, Typography } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';
import { getAllProducts } from '../../firebase/firebase.utils';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            newSections:[],
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    size: 'small',
                    id: 1,
                    linkUrl: '/hats'
                },   
                {   
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    size: 'small',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },   
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },   
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                },   
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                }
            ]
        }
    };
    componentDidMount(){
        var newSections = []
        getAllProducts().then(snapshot => {
            snapshot.forEach(snap => {
                console.log(snap.id.toUpperCase())
                newSections.push(snap.id)
            })
            this.setState({
                newSections: newSections
            })
        })
    }

    renderCategories = () => {
        const {newSections} = this.state;
        return newSections.map(s => {
            return <Grid style={{width: "30%"}}>
                <Card elevation={8} style={{backgroundImage: "url(https://i.ibb.co/px2tCc3/jackets.png)", textAlign: "center", padding: "20%"}}>
                    <Typography variant="h1" component={Link} to={`/shop/${s}`}>
                        {s.toUpperCase()}
                    </Typography>
                </Card>
                
            </Grid>
        })
    }
    render(){
        return(
            <div className='directory-menu' style={{margin: "2%"}}>
                <Grid container direction="row" justify="space-between">
                {
                    this.renderCategories()
                }
                </Grid>
                
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (  //otherSectionProps is used to use the sections properties in menu items using same name (eg. title)
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))
                }
                
            </div>
        )
    }

}

export default Directory