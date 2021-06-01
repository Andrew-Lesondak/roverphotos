import React from 'react';
import '../styles/PhotoContainer.css';

const Photo = ({ imageSrc, photoLoaded }) => {

    return (
        <>
            <div className='photo'>
                <img 
                    src={ imageSrc }
                    alt='Mars'
                    onLoad={ () => photoLoaded }>
                </img>
            </div>
        </>
    );
}

export default Photo;