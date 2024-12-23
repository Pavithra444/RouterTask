import React from 'react';

import { useParams } from 'react-router-dom';

const FullStack = () => {
  const { cardId } = useParams(); 
    return (
      <div className="full-stack-description">
      <h2>Full Stack Development</h2>
      <p>
        Full Stack Development involves working with both the front-end and back-end technologies. 
        As a full stack developer, you will be responsible for developing the entire stack of 
        applications, from the user interface to the database. Technologies commonly used include 
        HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.
      </p>
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW1cZMmk2w0OiQbEvExyDzJ2mkZ2aggQjRiw&s" 
        alt="Full Stack Development"
        className="full-stack-image"
      />
    </div>

    );
  };
  
  export default FullStack;
  