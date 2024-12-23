import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const cards = [
  {
    id: 1,
    title: "FSD",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW1cZMmk2w0OiQbEvExyDzJ2mkZ2aggQjRiw&s", // Replace with your image URL
    description: "MERN - Full Stack Development",
  },
  {
    id: 2,
    title: "Data Science",
    imageUrl: "https://images.prismic.io/turing/652ec29afbd9a45bcec8194c_shutterstock_1247255884_4afac53e02.webp?auto=format,compress", // Replace with your image URL
    description: "Advanced Data Science",
  },
  {
    id: 3,
    title: "Cyber Security",
    imageUrl: "https://media.licdn.com/dms/image/v2/D5612AQE0r5WC8r0HQg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1657711469335?e=2147483647&v=beta&t=AA7ierE6T8n-g7EDphWBu9qKdqcsXkOXo4tj7xg146s", // Replace with your image URL
    description: "Networking & Cyber Security",
  },
  {
    id: 4,
    title: "Carrer",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmpWHCeRyGXuO1NWtN8gpLkwoVNltH48QrkQ&s", // Replace with your image URL
    description: "Carrer",
  },
];



const AllCourses = () => {
  const navigate = useNavigate();

  const handleCardClick = (cardId) => {
 

    
    if (cardId === 1) {
      navigate('/full-stack-development'); 
    } else if (cardId === 2) {
      navigate('/data-science'); 
    } else if (cardId === 3) {
      navigate('/cyber-security'); 
    }
    else if (cardId === 4) {
      navigate('/career'); 
    }
  };

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        
        <div
        key={card.id}
        className="card"
        onClick={() => handleCardClick(card.id)}
      >
          <img src={card.imageUrl} alt={`Card ${index + 1}`} className="card-image" />
          <div className="card-content">
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
  export default AllCourses;
  