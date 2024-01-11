import React from 'react';
import "../App.css"
import Lightbulb from "../assets/icons/lightbulb.svg";
import Book from "../assets/icons/book.svg";
import Brain from "../assets/icons/brain.svg";
import Globe from "../assets/icons/globe.svg";
import Paper from "../assets/icons/paper.svg";
import MagnifyingGlass from "../assets/icons/magnifying_glass.svg";
import Puzzle from "../assets/icons/puzzle.svg";
import Telescope from "../assets/icons/telescope.svg";

const Background = () => {
  const icons = [
    Lightbulb, Book, Brain, Globe, Paper, MagnifyingGlass, Puzzle, Telescope
  ];

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const generateMatrix = () => {
    const matrix = [];

    for (let row = 0; row < 60; row++) {
      const randomIndex = getRandomNumber(0, icons.length - 1);
      const randomSize = getRandomNumber((32), 105);

      const randomOpacity = getRandomNumber(2, 5) / 10;
      const randomRotation = getRandomNumber(-180, 180);
      const iconStyle = {
        width: `${randomSize}px`,
        height: `${randomSize}px`,
        backgroundSize: 'cover',
        opacity: randomOpacity,
        padding: "20px",
        transform: `rotate(${randomRotation}deg)`,
      };
      matrix.push(<div>
        <img alt='background_icon' className="icon" style={iconStyle} src={icons[randomIndex]} />
      </div>);

    }


    return matrix;
  };
  return (
    <div className="matrix-container">
      {generateMatrix()}
    </div>
  );
};

export default Background;