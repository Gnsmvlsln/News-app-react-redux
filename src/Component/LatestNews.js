import React from 'react';
import {connect} from 'react-redux';
// import {reducerState} from '../Reducers/NewsReducer'

class LatestNews extends React.Component{
    constructor(props){
        super(props)
        // this.test=this.test.bind(this)    
    }

renderNews(data){  
    return(
        
        <div style={{margin:'15px 0px 0px 0px'}}>
            <h6><a href={data.url} target="_blank">{data.title}</a></h6>
        </div>
        
    )
}
    render(){  
       
        return(
            <div className='latestNewsMain'>
            {this.props.data && <h4 style={{color:'grey'}}>Top Headlines</h4>}    
                {this.props.data && this.props.data.map(this.renderNews)}  
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

export default connect(mapStateToProps)(LatestNews)