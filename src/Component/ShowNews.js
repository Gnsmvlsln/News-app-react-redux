import React from 'react';
import {connect} from 'react-redux';
// import {reducerState} from '../Reducers/NewsReducer'
import LatestNews from './LatestNews'

class ShowNews extends React.Component{
    constructor(props){
        super(props)
        // this.test=this.test.bind(this)    
    }

renderNews(data){  
    return(
      
        
        <div className='showNewsMain' >
            { data.urlToImage && <img src={data.urlToImage} alt={data.title} style={{height:'100px',width:'200px', marginBottom: '10px'}}/> } 
            <h5 style={{margin: 0}}>{data.title}</h5>
            <p style={{margin: 0}}>{data.content}</p>
            <a href={data.url} >Read More</a>
            
        </div>
         
    )
}
    render(){  
       
        return(
           
            <div className='someOther'>
                {this.props.data ? this.props.data.map(this.renderNews) :<div style={{paddingTop:'160px',paddingLeft: '325px',color:' #c4c2c2'}}><h3>Use above search box for latest news on your topic.</h3></div>}  
                <div className="someName">
                <LatestNews/>
            </div>
                </div>
                
            
        )
    }
}

const mapStateToProps=(state)=>{
    console.log('oyo',state)
    return {
        data: state.newsData
    }
}

export default connect(mapStateToProps)(ShowNews)