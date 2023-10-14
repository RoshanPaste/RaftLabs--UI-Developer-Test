import React, { useState } from 'react';

const NumberList = () => {
  const [selectedNumber, setSelectedNumber] = useState(13);

  const numbers = [11, 12, 13, 14, 15, 16, 17];

  const handleNumberClick = (number) => {
    setSelectedNumber(number);
  };

  return (
    <div className="flex justify-between">
      {numbers.map((number) => (
        <div
          key={number}
          style={{paddingInline: 10}}
          className={`text-xs h-fit rounded-full py-2 cursor-pointer ${
            selectedNumber === number
              ? 'bg-indigo-500 text-white'
              : 'bg-white'
          }`}
          onClick={() => handleNumberClick(number)}
        >
          {number}
        </div>
      ))}
    </div>
  );
};

export default NumberList;