import React from 'react';
import './Input.css';

const Input = ({ handleSearch }) => (
    <div>
      <input className="search-input" placeholder="Free text search..." onChange={handleSearch} type="text" />
    </div>
  );

export default Input;
