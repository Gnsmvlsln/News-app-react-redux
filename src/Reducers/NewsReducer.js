// const loading;
const initialState = [{loading:false}];

 export const reducerState =(state=initialState,action)=>{
    console.log('reducer', state, action)
    
    switch(action.type){
        case 'NEWS_REQUEST':
            return { ...state, loading:true}
        break;
        case 'NEWS_REQUEST_ONE':
            return { ...state, newsData: action.payload ,loading:false}
        break;
        default:
        return state;    
    }
    return state;
 }
