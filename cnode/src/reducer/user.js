function user(state={
    data:{
        avatar_url:'',
        loginname:'',
        score:'',
        create_at:'',
        recent_topics:[],
        recent_replies:[]

    },
    loading:true
},action){
    switch(action.type){
        case 'ADD_USER_CHANGE':
            return {
                data:state.data,
                loading:true
            }
        case 'ADD_USER_DATA':
            return{
                data:action.data,
                loading:false
            }
        default:
            return state;
    }
}

export default user