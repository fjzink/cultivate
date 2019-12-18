import React from 'react';
import './Department.scss';

export default (props) => {
    const { children } = props;

    return <div className={children.toLowerCase()}>{children}</div>
}