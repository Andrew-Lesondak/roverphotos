import {
    REQUEST_IMAGE_PENDING,
    REQUEST_IMAGE_SUCCESS,
    REQUEST_IMAGE_FAILED,
    IMAGE_LOADED_SUCCESS,
    IMAGE_LOADED_PENDING
} from './constants.js';

const initialStateImage = {
    isPending: false,
    imageData: '',
    imageLoaded: false,
    error: ''
}

export const requestImage = ( state = initialStateImage, action = {} ) => {

    switch ( action.type ) {
        case REQUEST_IMAGE_PENDING:
            return Object.assign( {}, state, { isPending: true } );
        case REQUEST_IMAGE_SUCCESS:
            return Object.assign( {}, state, { isPending: false, imageData: action.payload } );
        case REQUEST_IMAGE_FAILED:
            return Object.assign( {}, state, { isPending: false, error: action.payload } );
        default:
            return state;
    }
}

export const setImageLoaded = ( state = initialStateImage, action = {} ) => {

    switch ( action.type ) {
        case IMAGE_LOADED_PENDING:
            return Object.assign( {}, state, { imageLoaded: false } );
        case IMAGE_LOADED_SUCCESS:
            return Object.assign( {}, state, { imageLoaded: true } );
        default:
            return state;
    }
}