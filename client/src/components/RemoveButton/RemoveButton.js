import React from 'react';
import ActionButton from '../ActionButton/ActionButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './removebutton.scss';

export default (props) => {
    return (
        <ActionButton action={props.action}>
            <FontAwesomeIcon icon={faTimesCircle} />
            <span className='invite-text'>Remove</span>
        </ActionButton>
    );
}