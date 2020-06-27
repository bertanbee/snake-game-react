import React from 'react';
import { FaArrowLeft, FaArrowRight, FaArrowDown, FaArrowUp } from 'react-icons/fa';

import './styles.css';

function Controls() {
    return (
        <div className="controls">
            <FaArrowLeft className="icon"></FaArrowLeft>
            <FaArrowUp className="icon"></FaArrowUp>
            <FaArrowDown className="icon"></FaArrowDown>
            <FaArrowRight className="icon"></FaArrowRight>
        </div>
    );
}

export default Controls;