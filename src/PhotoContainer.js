import React from 'react';
import './PhotoContainer.css';

function PhotoContainer() {
    return (
        <>
            <div className='photo-container' id='photo-container'>
                {/* Photo */}
                <div className='photo-text'></div>
                <img 
                    src='http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG'
                    alt='Mars'>
                </img>
            </div>
            {/* Rover */}
            <div className='rover-name'>
                <span id='rover-name'>Curiosity</span>
            </div>
            {/* Camera */}
            <div className='camera-name'>
                <span id='camera-name'>Front Hazard Avoidance Camera</span>
            </div>
            {/* Earth Date */}
            <div className='earth-date'>
                <span id='earth-date'>2015-05-30</span>
            </div>
            
            <button className='button' id='twitter'>
                <i className='fab fa-twitter'></i>
            </button>
            <button id='new-photo'>
                New Photo
            </button>
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