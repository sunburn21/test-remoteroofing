import React,{Component} from 'react';
import ItemList from '../itemslist';
import {getItems} from '../../api/items';

class Items extends Component{
    constructor(props) {
        super(props);
        this.state = {
          items: []
        };
    }
    componentDidMount = async ()=>{
        const data = await getItems();
        this.updatingState(data);
    }
    updatingState = async (data)=>{
        const newData = data.filter((e,i)=>((this.props.type===e.programType 
            && e.releaseYear>=2010 
            ))).sort((a,b)=>{
            if(a.title>b.title) return 1;
            return -1;
        }).slice(0,21);
        this.setState({items:newData},()=>{
            console.log(this.state);
        })
    }
    render(){
        return(
            <div>
                <ItemList items={this.state.items}/>
            </div>
        )
    }
}

export default Items;