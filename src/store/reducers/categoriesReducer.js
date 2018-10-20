import { GET_CATEGORIES } from '../actions/actionTypes';

const initialState = {
    categories: [],
    loading: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            };
        default:
            return state;
    }
}