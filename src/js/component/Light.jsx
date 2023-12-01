import React from 'react';

const Light = ( {color, lit, setLit, setGlow} ) => {

    return (
        <div className="light" style={{backgroundColor: color === lit? color: 'grey', 
    }}
        onClick={()=> setLit (color)}>
        </div>
    )
};

export default Light;