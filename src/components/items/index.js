// import libraries
import React,{Component} from 'react';

// importing required components
import ItemList from '../itemslist';
import Loading from '../loading';
import Error from '../error';

// importing api functions
import {getItems} from '../../api/items';

// implemented the list of items component
class Items extends Component{

    // defining state for the items
    constructor(props) {
        super(props);
        this.state = {
          items: [],
          isLoading: true,
          error: false
        };
    }

    // function for fetching the data
    componentDidMount = async ()=>{
        const data = await getItems();
        this.updatingState(data);
    }

    // function for updating the state
    updatingState = async (data)=>{
        if(data){
            const newData = data.filter((e,i)=>((this.props.type===e.programType 
                && e.releaseYear>=2010 
                ))).sort((a,b)=>{
                if(a.title>b.title) return 1;
                return -1;
            }).slice(0,21);
            this.setState({items:newData,isLoading:false})
        }else{
            // when no data was fetched
            this.setState({isLoading:false,error:true});
        }
    }
    render(){
        
        // destructuring required data from the state
        const {items,isLoading,error} = this.state;
        return(
            <div>
                {isLoading?<Loading/>:error?<Error/>:<ItemList items={items}/>}
            </div>
        )
    }
}

export default Items;