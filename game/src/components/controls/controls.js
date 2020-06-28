import React from 'react';
import { FaArrowLeft, FaArrowRight, FaArrowDown, FaArrowUp } from 'react-icons/fa';

import './styles.css';

function Controls() {
    function change() {
        if(position1.className === "little-block") {
            setPosition1({
                id: 1,
                className: "little-block-selected"
            });
        } else {
            setPosition1({
                id: 1,
                className: "little-block"
            })
        }
    }

    return (
        <div className="controls">
            <FaArrowLeft className="icon"></FaArrowLeft>
            <FaArrowDown className="icon" onClick={()=>change()}></FaArrowDown>
            <FaArrowUp className="icon"></FaArrowUp>
            <FaArrowRight className="icon"></FaArrowRight>
        </div>
    );
}

export default Controls;