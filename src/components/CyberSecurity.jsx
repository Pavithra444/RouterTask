import React from 'react';

import { useParams } from 'react-router-dom';
const CyberSecurity = () => {
   const { cardId } = useParams(); 
    return (
      <div className="cyber-security-description">
      <h2>Cyber Security</h2>
      <p>
        Cyber Security involves protecting computer systems, networks, and data from digital attacks, theft, and damage. 
        It encompasses various practices, including network security, information security, and cryptography, to safeguard sensitive information 
        and prevent unauthorized access. Cyber Security is essential for businesses, governments, and individuals to ensure the safety of data and systems.
      </p>
      <img 
        src="https://media.licdn.com/dms/image/v2/D5612AQE0r5WC8r0HQg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1657711469335?e=2147483647&v=beta&t=AA7ierE6T8n-g7EDphWBu9qKdqcsXkOXo4tj7xg146s" 
        alt="Cyber Security"
        className="cyber-security-image"
      />
    </div>
  );
  };
  
  export default CyberSecurity;
  