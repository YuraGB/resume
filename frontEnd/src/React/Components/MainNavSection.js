import React from 'react';

export const MainNavSection = ({onClick}) => {
  return (
      <nav onClick={onClick}>
          <a href='#' className="btn" data-block="work">Work</a>
          <a href='#' className="btn" data-block="hobbies">Hobbies</a>
          <a href='#' className="btn" data-block="plForFtr">About Me</a>

      </nav>
  );
};