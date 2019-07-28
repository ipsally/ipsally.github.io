import React from 'react';
import PinchToZoom from 'react-pinch-and-zoom';
import '../App.css'

const floorPlanView = (props) => {
    return (
        <div id='content'>
            <div className='floorplan'>
                <PinchToZoom>
                    <img src={props.image} alt='floor plan'  style={{transform: 'rotate('+props.rotation+'deg)'}}/>
                </PinchToZoom>
            </div>
            <p>
                <input type='button' onClick={props.onRotate} value='Rotate Image' />
            </p>
            <p>
                <input type='file' onChange={props.onUpload} accept=".png,.jpeg,.jpg" />
            </p>
            <p>Parsed extension: {props.extension}</p>
        </div>
    )
}

export default floorPlanView;