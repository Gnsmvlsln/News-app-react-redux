import React from 'react';
import { connect } from 'react-redux'
import img from '../loading_spinner.gif'
let Loading = ({ loading }) => (
loading ?
<div style={{ textAlign: 'center' }}>
   <img src={img} alt='loading' height='170px' />
</div> :
null
);
const mapStateToProps = (state) =>
 {
     console.log('loadiing',state)
     return{loading: state.loading}
    
 }

Loading = connect(mapStateToProps,null)(Loading)
export default Loading;