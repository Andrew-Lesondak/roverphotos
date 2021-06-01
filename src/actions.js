import {
    REQUEST_IMAGE_PENDING,
    REQUEST_IMAGE_SUCCESS,
    REQUEST_IMAGE_FAILED,
    IMAGE_LOADED_PENDING,
    IMAGE_LOADED_SUCCESS
} from './constants.js';

// Using redux-thunk middleware
export const requestImage = () => ( dispatch, eventArgs ) => {
    return getRoverData( dispatch );
}

const getRoverData = async ( dispatch ) => {
    dispatch({ type: REQUEST_IMAGE_PENDING });
    await fetch( `http://localhost:5000/api/search` )
        .then( response => response.json() )
        .then( data => dispatch({ type: REQUEST_IMAGE_SUCCESS, payload: data.results }))
        .catch( error => dispatch({ type: REQUEST_IMAGE_FAILED, payload: error }))   
};

export const imageLoadedSuccess = () => ( dispatch, eventArgs ) => {
    return dispatch({ type: IMAGE_LOADED_SUCCESS });
}

export const imageLoadedPending = () => ( dispatch, eventArgs ) => {
    return dispatch({ type: IMAGE_LOADED_PENDING });
}