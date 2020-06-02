import axios from 'axios';

const URL = 'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json';

export const getItems = async ()=>{
    try{
        const {data} = await axios.get(URL);
        return data.entries;
    }catch(error){
        console.log(error);
    }
}