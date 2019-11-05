function details(state={
    data:{
        author:{
            loginname:"",
            avatar_url:""
        },
        replies:[],
        reply_count:0,
        create_at:"",
        good:true,

    },
    loading:true

},action){
    switch(action.type){
        case 'ADD_DETAILS_CHANGE':
            return{
                loading:true,
                data:state.data
            }
        case 'ADD_DETAILS':
            return{
                data:action.data,
                loading:false
            }
        default:
            return state;
    }
}

export default details