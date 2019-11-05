function list(state={
    loading:true,
    data:[]
},action){
    switch(action.type){
        case 'ADD_LIST':
            return {
                data:action.data,
                loading:false,
            }
        case 'LADING_LIST':
            return {
                loading:true,
                data:state.data
            }
        default:
            return state;
    }
}

export default list