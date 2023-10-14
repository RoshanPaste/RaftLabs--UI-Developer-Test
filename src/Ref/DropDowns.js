import React, { useState } from 'react';

const Dropdown = ({ options, className="" }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className={`dropdown ${className}`}>
      <div className="selected-option flex ml-2" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        {selectedOption}
        <img 
            src='https://cdn-icons-png.flaticon.com/128/6364/6364586.png' 
            alt='_'
            width={9}
            style={{height:13}}
            className='mt-2 ml-1'
        />
      </div>
      {isDropdownOpen && (
        <div className="dropdown-content bg-indigo-400">
          {options.map((option) => (
            <div
              key={option}
              className={`dropdown-option ${option === selectedOption ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
