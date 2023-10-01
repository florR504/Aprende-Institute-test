import React from 'react';
import '../styles/Label.css';

const Label = ({ name, onClick, active }) => {
  return (
    <button className={`labelStyle ${active ? 'active' : ''}`} onClick={onClick}>
      <p className="labelPStyle">{name}</p>
    </button>
  );
};

export default Label;
