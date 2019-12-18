import React from 'react';
import './actionbutton.scss';

export default (props) => {
    return (
        <button className='invite-button'>
            {props.children}
        </button>
    );
}