import React from 'react';
import '../styles/PhotoContainer.css';
import Photo from './Photo';

const PhotoContainer = ({ imageData, imageRequest, photoLoaded, tweetImage }) => {

    let imageSrc = '',
        roverName = '',
        cameraName = '',
        earthDate = '';

    const getRandomRoverPhoto = ( photos ) => {

        return photos[ Math.floor( Math.random() * photos.length )];
    }

    if(imageData !== undefined && imageData.photos !== undefined && imageData.photos.length > 0) {

        const photo = imageData.photos.length > 1 ? getRandomRoverPhoto( imageData.photos ) : imageData.photos[0];

        imageSrc = photo.img_src;
        roverName = photo.rover.name;
        cameraName = photo.camera.full_name;
        earthDate = photo.earth_date;
    }

    return imageData === "" || imageData === undefined ?
        <div className="loader center">
            <h1>Loading</h1>
            <i className="fas fa-satellite-dish fa-5x" />
        </div> :
    (
        <>
            <div className='photo-container' id='photo-container'>

                <Photo imageSrc={ imageSrc } photoLoaded={ photoLoaded }/>

                <div className='rover-name'>
                    <i className="fas fa-robot"></i>&nbsp;
                    <span id='rover-name'>{ roverName }</span>
                </div>

                <div className='camera-name'>
                    <i className="fas fa-video"></i>&nbsp;
                    <span id='camera-name'>{ cameraName }</span>
                </div>

                <div className='earth-date'>
                    <i className="far fa-calendar-alt"></i>&nbsp;
                    <span id='earth-date'>{ earthDate }</span>
                </div>
                
                <div className='button-container'>
                    <button 
                        className='twitter-button'
                        id='twitter'
                        onClick={ () => tweetImage([ imageSrc, roverName, cameraName, earthDate ])}>
                        <i className='fab fa-twitter'></i>
                    </button>
                    <button 
                        id='new-photo'
                        onClick={ imageRequest }>
                        New Photo
                    </button>
                </div>

            </div>
        </>
    );
}

export default PhotoContainer;