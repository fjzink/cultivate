import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import InviteButton from '../InviteButton/InviteButton';
import Department from '../Department/Department';
import './row.scss';

export default (props) => {
    const { name, department, reports, invited, activated, deactivated } = props.manager;
    return(
        <tr>
            <td className='first-cell'>{name}</td>
            <td><Department>{department}</Department></td>
            <td>{reports}</td>
            <td className='invited'>{invited}</td>
            {activated ?
                <td className='activated'>{activated}</td> :
                <td className='pending'>Pending</td>
            }
            <td className='deactivated'>{deactivated ? deactivated : '--'}</td>
            <td className='last-cell'>
                <span className='mail'><FontAwesomeIcon icon={faEnvelope} /></span>
                <InviteButton />
            </td>
        </tr>
    );
}