import React from 'react';
import ActionButton from '../ActionButton/ActionButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './invitebutton.scss';

export default (props) => {
    return (
        <ActionButton action={props.action}>
            <FontAwesomeIcon icon={faUserPlus} />
            <span className='invite-text'>Send Invite</span>
        </ActionButton>
    );
}