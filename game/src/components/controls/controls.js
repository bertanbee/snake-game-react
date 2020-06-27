import React from 'react';
import { FaArrowLeft, FaArrowRight, FaArrowDown, FaArrowUp } from 'react-icons/fa';

function Controls() {
    return (
        <div className="controls">
            <FaArrowLeft></FaArrowLeft>
            <FaArrowUp></FaArrowUp>
            <FaArrowDown></FaArrowDown>
            <FaArrowRight></FaArrowRight>
        </div>
    );
}

export default Controls;