import React from 'react';
import './styles.css';
import { FaArrowLeft, FaArrowRight, FaArrowDown, FaArrowUp } from 'react-icons/fa'

import Box from './components/box';

function Game() {
  return (
    <>
    <Box></Box>
    <div className="controls">
      <FaArrowLeft></FaArrowLeft>
      <FaArrowUp></FaArrowUp>
      <FaArrowDown></FaArrowDown>
      <FaArrowRight></FaArrowRight>
    </div>
    </>
  );
}

export default Game;
