import React from 'react';
import axios from 'axios'

const Heading=()=>{
//     const API_URL = 'https://newsapi.org/v2/everything?' +
// 'q=java&trump' +
// 'from=2019-06-26&' +
// 'sortBy=popularity&' +
// 'apiKey=a1c6f17cfee84049b925dbd8c7c8190c';

// https://newsapi.org/v2/everything?q=bitcoin&from=2019-06-26&sortBy=popularity&apiKey=a1c6f17cfee84049b925dbd8c7c8190c

// const request= axios.get(API_URL)
console.log('Heading api',request)
    return(
        <div>
       <h1  className='heading'>Google News</h1> 
        </div>
    )
}

export default Heading