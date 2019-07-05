import React, {Component} from 'react';
import CreatableSelect from 'react-select/creatable';
// import Heading from './Heading';
import {connect} from 'react-redux';
import {newsRequest} from '../Actions/NewsApi'
import {colourOptions} from '../docs/data';
import 'bootstrap/dist/css/bootstrap.css';


// import PropTypes from 'prop-types'


class SelectComponent extends Component{
    state = {
        newValue:[]
    }
    // static propTypes = {
    //     newsdata: PropTypes.func.isRequired,
    // }
   
    handleChange=(newValue: any, actionMeta: any)=>{
        console.log(newValue)
        this.setState({newValue})
        console.log(this.state)
        console.log(`action: ${actionMeta.action}`)
    }
    onclick=(event)=>{
        event.preventDefault()
        const data = this.state.newValue
        console.log('data',data)
        this.props.newsdata(data)
    }

    render(){
        return(
            <div className='selectCompoDiv'>
            <b className='newsHeading'>N E W S</b>
            {console.log('this is from props',this.props)}
            <CreatableSelect
             isMulti
             onChange={this.handleChange}
             options={colourOptions}
             className='select-box'
           />
           <button className=' butt btn btn-info' onClick={this.onclick}>Click here for latest news</button>
            </div>       
        )
    }
}

const mapStateToProps=(state)=>{
    console.log('mapstatetoprops',state)
   return {state}
}

const mapDispatchToProps=(dispatch)=>({
     newsdata: (data) => dispatch(newsRequest(data)),
})
const stateContainer = connect(mapStateToProps,mapDispatchToProps)(SelectComponent)
export default stateContainer