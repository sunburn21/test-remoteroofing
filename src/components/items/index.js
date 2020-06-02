import React,{Component} from 'react';
import ItemList from '../itemslist';
import Loading from '../loading';
import Error from '../error';
import {getItems} from '../../api/items';

class Items extends Component{
    constructor(props) {
        super(props);
        this.state = {
          items: [],
          isLoading: true,
          error: false
        };
    }
    componentDidMount = async ()=>{
        const data = await getItems();
        this.updatingState(data);
    }
    updatingState = async (data)=>{
        if(data){
            const newData = data.filter((e,i)=>((this.props.type===e.programType 
                && e.releaseYear>=2010 
                ))).sort((a,b)=>{
                if(a.title>b.title) return 1;
                return -1;
            }).slice(0,21);
            this.setState({items:newData,isLoading:false},()=>{
                console.log(this.state);
            })
        }else{
            this.setState({isLoading:false,error:true});
        }
    }
    render(){
        const {items,isLoading,error} = this.state;
        return(
            <div>
                {isLoading?<Loading/>:error?<Error/>:<ItemList items={items}/>}
            </div>
        )
    }
}

export default Items;