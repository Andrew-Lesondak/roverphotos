import React from 'react';
import '../styles/PhotoContainer.css';

function PhotoContainer({ imageData }) {
    return imageData === "" ?
        <div></div> :
    (
        <>
            <div className='photo-container' id='photo-container'>
                {/* Photo */}
                <div className='photo-text'></div>
                <img 
                    src={ imageData.photos[0].img_src }
                    alt='Mars'>
                </img>
                {/* Rover */}
                <div className='rover-name'>
                    <i className="fas fa-robot"></i>&nbsp;
                    <span id='rover-name'>{ imageData.photos[0].rover.name }</span>
                </div>
                {/* Camera */}
                <div className='camera-name'>
                    <i className="fas fa-video"></i>&nbsp;
                    <span id='camera-name'>{ imageData.photos[0].camera.full_name }</span>
                </div>
                {/* Earth Date */}
                <div className='earth-date'>
                    <i className="far fa-calendar-alt"></i>&nbsp;
                    <span id='earth-date'>{ imageData.photos[0].earth_date }</span>
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

// [{"id":102693,
// "sol":1000,
// "camera":{"id":20,"name":"FHAZ","rover_id":5,"full_name":"Front Hazard Avoidance Camera"},
// "img_src":"http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG",
// "earth_date":"2015-05-30",
// "rover":{"id":5,"name":"Curiosity",
// "landing_date":"2012-08-06",
// "launch_date":"2011-11-26",
// "status":"active"}}

export default PhotoContainer;