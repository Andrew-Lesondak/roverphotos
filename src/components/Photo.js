import React, { useState, useEffect, Component } from 'react';
import '../styles/PhotoContainer.css';

const Photo = ({ imageSrc }) => {

    return (
        <>
            <div className='photo'>
                <img 
                    src={ imageSrc }
                    alt='Mars'>
                </img>
            </div>
        </>
    );
}

export default Photo;