import React from 'react';
import '../styles/PhotoContainer.css';

const PhotoContainer = ({ imageData, imageRequest }) => {

    let imageSrc = '',
        roverName = '',
        cameraName = '',
        earthDate = '';

    if(imageData.photos !== undefined && imageData.photos.length > 0) {

        const photo = imageData.photos.length > 1 ? getRandomRoverPhoto( imageData.photos ) : imageData.photos[0];

        imageSrc = photo.img_src;
        roverName = photo.rover.name;
        cameraName = photo.camera.full_name;
        earthDate = photo.earth_date;

    } else {
        imageRequest();
    }

    return imageData === "" ?
        <div></div> :
    (
        <>
            <div className='photo-container' id='photo-container'>
                {/* Photo */}
                <div className='photo'>
                    <img 
                        src={ imageSrc }
                        alt='Mars'>
                    </img>
                </div>
                {/* Rover */}
                <div className='rover-name'>
                    <i className="fas fa-robot"></i>&nbsp;
                    <span id='rover-name'>{ roverName }</span>
                </div>
                {/* Camera */}
                <div className='camera-name'>
                    <i className="fas fa-video"></i>&nbsp;
                    <span id='camera-name'>{ cameraName }</span>
                </div>
                {/* Earth Date */}
                <div className='earth-date'>
                    <i className="far fa-calendar-alt"></i>&nbsp;
                    <span id='earth-date'>{ earthDate }</span>
                </div>
                
                <div className='button-container'>
                    <button className='twitter-button' id='twitter'>
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

const getRandomRoverPhoto = ( photos ) => {

    // random photo
    return photos[ Math.floor( Math.random() * photos.length )];
}

export default PhotoContainer;