import React from 'react';
import '../styles/PhotoContainer.css';

function PhotoContainer({ imageData }) {

    let imageSrc = '',
        roverName = '',
        cameraName = '',
        earthDate = '';

    if(imageData.photos !== undefined && imageData.photos.length > 0) {
        imageSrc = imageData.photos[0].img_src;
        roverName = imageData.photos[0].rover.name;
        cameraName = imageData.photos[0].camera.full_name;
        earthDate = imageData.photos[0].earth_date;
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
                    <button id='new-photo'>
                        New Photo
                    </button>
                </div>

            </div>
        </>
    );
}

export default PhotoContainer;