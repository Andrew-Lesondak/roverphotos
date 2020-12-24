import { API_KEY } from './keys.js';
import {
    NEW_IMAGE_REQUESTED,
    REQUEST_IMAGE_PENDING,
    REQUEST_IMAGE_SUCCESS,
    REQUEST_IMAGE_FAILED

} from './constants.js';

// Using redux-thunk middleware
export const requestImage = () => ( dispatch ) => {
    dispatch({ type: REQUEST_IMAGE_PENDING });
    fetch( `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}` )
        .then( response => response.json() )
        .then( data => dispatch({ type: REQUEST_IMAGE_SUCCESS, payload: data }))
        .catch( error => dispatch({ type: REQUEST_IMAGE_FAILED, payload: error }))
}
