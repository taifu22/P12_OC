import React from 'react';
import PropTypes from 'prop-types';

function Energy(props) {
    return (
        <div className='div-energy'>
            <div className='image-energy' style={{backgroundColor:props.bgColor}}>
                <img src={props.image}></img>
            </div>
            <div className='infos-energy'>
                <p className='p-bold'>{props.data}</p>
                <p>{props.item}</p>
            </div> 
        </div>
    ); 
}

export default Energy;

Energy.propTypes = {
    image: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired
}