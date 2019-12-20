import React from 'react';
import './DirectReport.scss';

export default () => {
    return(
        <tr>
            <td className='first-cell header'>
                <span className='direct-report'>Direct Reports</span>
            </td>
            <td className='header'></td>
            <td className='header'></td>
            <td className='header'></td>
            <td className='header'></td>
            <td className='header'></td>
            <td className='last-report header'></td>
        </tr>
    );
}