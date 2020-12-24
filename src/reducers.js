import {
    REQUEST_IMAGE_PENDING,
    REQUEST_IMAGE_SUCCESS,
    REQUEST_IMAGE_FAILED

} from './constants.js';

const initialStateImage = {
    isPending: false,
    imageData: '',
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