import React from 'react';

import { useParams } from 'react-router-dom';
const Career = () => {
  const { cardId } = useParams(); 
    return (
      <div className="career-description">
      <h2>Career in Tech</h2>
      <p>
        A career in tech can be highly rewarding, offering opportunities for growth in various fields like software development, data science, 
        cyber security, and more. With the increasing reliance on technology in every industry, the demand for skilled professionals is at an all-time high. 
        Whether you're interested in programming, AI, or IT security, the tech industry offers a wide range of career paths and the chance to make a significant impact.
      </p>
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmpWHCeRyGXuO1NWtN8gpLkwoVNltH48QrkQ&s" 
        alt="Tech Career"
        className="career-image"
      />
    </div>
  );
  };
  
  export default Career;
  