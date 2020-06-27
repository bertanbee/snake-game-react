import React from 'react';
import { FaArrowLeft, FaArrowRight, FaArrowDown, FaArrowUp } from 'react-icons/fa';

import './styles.css';

function Controls() {
    return (
        <div className="controls">
            <FaArrowLeft className="icon"></FaArrowLeft>
            <FaArrowDown className="icon"></FaArrowDown>
            <FaArrowUp className="icon"></FaArrowUp>
            <FaArrowRight className="icon"></FaArrowRight>
        </div>
    );
}

export default Controls;