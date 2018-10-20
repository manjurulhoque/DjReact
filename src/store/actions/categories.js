import axios from 'axios';
import { GET_CATEGORIES } from './actionTypes';

export const getCategories = () => dispatch => {
    axios
        .get('http://localhost:8000/api/categories')
        .then(res => {
            // console.log(res);
            dispatch({
                type: GET_CATEGORIES,
                payload: res.data
            })
            }
        )
        .catch(err =>
            dispatch({
                type: GET_CATEGORIES,
                payload: null
            })
        );
}