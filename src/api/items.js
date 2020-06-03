// import libraries
import axios from 'axios';

// defining the url for fetching of data
const URL = 'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json';


// function which performs the get request on the url to get data
export const getItems = async ()=>{
    try{
        const {data} = await axios.get(URL);
        return data.entries;
    }catch(error){
        console.log(error);
    }
}