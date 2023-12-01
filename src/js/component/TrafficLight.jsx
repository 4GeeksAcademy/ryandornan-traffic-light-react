import React from 'react';
import { useState, useEffect } from 'react';
import Light from './Light';

const TrafficLight = () => {

    const colors = ['red', 'orange', 'green'];
    const [lit, setLit] = useState ("red");
    const [glow, setGLow] = useState ("red");

    return (
        <div className='traffic-light'>
                {colors.map((color) => {
                return <Light color={color} lit={lit} setLit={setLit} />;
                }
            )
            }
        </div>
    )
}

export default TrafficLight;