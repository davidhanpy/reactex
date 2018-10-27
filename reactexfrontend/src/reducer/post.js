const initialState = {
    postList: [],
}

function post(state = initialState, action) {

    switch (action.type) {
        case 'WRITE_POST':
            return { ...state, postList: [...state.postList, action.data] }
        case 'INIT_POST':
            return { ...state, postList: action.textArr }
        case 'DELETE_POST':
            return { ...state, postList: [...state.postList.filter(action.idx) ] }
        default:
            return state;
    }
}

export default post;