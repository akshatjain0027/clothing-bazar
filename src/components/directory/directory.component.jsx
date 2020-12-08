import React from 'react'
import { getAllProducts } from '../../firebase/firebase.utils';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            newSections:[]
        }
    };
    componentDidMount(){
        var newSections = []
        getAllProducts().then(snapshot => {
            console.log()
            snapshot.forEach(snap => {
                newSections.push({id: snap.id, imageUrl: snap.data().imageUrl})
            })
            this.setState({
                newSections: newSections
            })
        })
    }

    render(){
        return(
            <div className='directory-menu' style={{margin: "2%"}}>

                {
                    this.state.newSections.map((s) => (  
                            <MenuItem key={s.id} category={s.id} imageUrl={s.imageUrl}/>
                    ))
                }
                
            </div>
        )
    }

}

export default Directory