import { API_KEY } from './keys.js';
import {
    REQUEST_IMAGE_PENDING,
    REQUEST_IMAGE_SUCCESS,
    REQUEST_IMAGE_FAILED,
    ROVER_DATA
} from './constants.js';

// Using redux-thunk middleware
export const requestImage = () => ( dispatch ) => {

    return fetch_retry( 15, dispatch );

}

const fetch_retry = ( n, dispatch ) => {

    let [ rover, camera, solNum ] = getRandomRoverData();
    
    console.log('URL: ', `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover.name}/photos?sol=${solNum}&camera=${camera.name}&api_key=${API_KEY}`);

    dispatch({ type: REQUEST_IMAGE_PENDING });
    fetch( `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover.name}/photos?sol=${solNum}&camera=${camera.name}&api_key=${API_KEY}` )
        .then( response => response.json() )
        .then( data =>  {
            if(data.photos.length === 0) {
                return fetch_retry( n - 1, dispatch );
            } else {
                return data;
            }
        })
        .then( data => dispatch({ type: REQUEST_IMAGE_SUCCESS, payload: data }))
        .catch( error => dispatch({ type: REQUEST_IMAGE_FAILED, payload: error }))   

};

const getRandomRoverData = () => {

    let roverData = [];

    // random rover
    roverData = [ ...roverData, ROVER_DATA[ Math.floor( Math.random() * ROVER_DATA.length )]];

    // random camera
    roverData = [ ...roverData, roverData[0]['camera_data'][ Math.floor( Math.random() * roverData[0]['camera_data'].length )]];

    // ramdom date (sol - Martian rotation)
    roverData = [ ...roverData, Math.floor( Math.random() * roverData[0]['max_sol'] )];

    return roverData;
}