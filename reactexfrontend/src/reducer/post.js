const initialState = {
    postList: {},
}

function post(state = initialState, action) {

    switch (action.type) {
        case 'WRITE_POST':
            return { ...state, postList: [...state.postList, action.data] }
        case 'WRITE_COMMENT':
            return { ...state, commentList: [...state.commentList, action.data] }
        case 'INIT_POST':
            return { ...state, postList: action.textArr }
        case 'INIT_COMMENT':
            return {...state, commentList: action.textArr}
        case 'DELETE_POST':
            return { ...state, postList: [...state.postList.filter((post)=> {return post.id!==action.id})] }
        default:
            return state;
    }
}

export default post;