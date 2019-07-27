import React from 'react';


const display = (props) => {
    return (
        <div>
            <img src={props.image}/>
            <input type='file' onChange={props.update} accept=".png,.jpeg,.jpg"/>
            <p>Parsed extension: {props.image.split('.').pop()}</p>
        </div>
    )
}

export default display;