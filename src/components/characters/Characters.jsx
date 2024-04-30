import React from 'react';
import { styled } from 'styled-components';

const Characters = ({ characters = [] }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap',gap:'30px',marginTop: '140px' }}>
      {characters.map((item) => (
        <CardDiv key={item.id}>
          <h3 className="card-title">{item.name}</h3>
          <p>Email: {item.email}</p>
          <p>Website: {item.website}</p>
        </CardDiv>
      ))}
    </div>
  );
};

export default Characters;

const CardDiv = styled.div`
  border: none;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 2px 2px 6px 2px rgba(0,0,0,0.05);
  margin: 0 50px;
  
`;
