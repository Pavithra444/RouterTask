import React from 'react';
import { useParams } from 'react-router-dom';
const DataScience = () => {
   const { cardId } = useParams(); 
    return (
      <div className="data-science-description">
      <h2>Data Science</h2>
      <p>
        Data Science is the field of study that combines statistics, computer science, and domain knowledge to extract meaningful insights from data. 
        It involves collecting, analyzing, and interpreting large datasets to make informed decisions. Key technologies used include Python, 
        R, machine learning, and data visualization tools like Tableau and Power BI.
      </p>
      <img 
        src="https://images.prismic.io/turing/652ec29afbd9a45bcec8194c_shutterstock_1247255884_4afac53e02.webp?auto=format,compress" 
        alt="Data Science"
        className="data-science-image"
      />
    </div>
  );
  };
  
  export default DataScience;
  