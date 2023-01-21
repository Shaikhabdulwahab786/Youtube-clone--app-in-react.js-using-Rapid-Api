import axios from "axios";
  

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
      maxResults: '50',
     
    },
    headers: {
      'X-RapidAPI-Key':"c1c1bbd9eemsh3b7378ecc51744bp1df5f1jsn9b7e8d0769dd",
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
 
   }
};

export const  fetchFromApi  = async (url)=>{
 const {data} =  await axios.get(`${BASE_URL}/${url}`,options)
    


 return data
}