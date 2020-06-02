import React,{Component} from 'react';
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
        // const newData = data.filter((e,i)=>(this.props.type===e.programType && e.releaseYear>=2010 && i<21));
        // await this.setState({items:newData},()=>{
        //     console.log(this.state);
        // });
        const newData = data.filter((e)=>((this.props.type===e.programType && e.releaseYear>=2010))).sort((a,b)=>{
            if(a.title>b.title) return 1;
            return -1;
        });
        this.setState({items:newData},()=>{
            console.log(this.state);
        })
    }
    render(){
        return(
            <div>
                <h1>Items: {this.props.type}</h1>
            </div>
        )
    }
}

export default Items;