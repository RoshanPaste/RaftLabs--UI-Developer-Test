import React from 'react';

function NavNames({id, label, link, active, onClick }) {
  return (
    <div
      className={`mr-5 cursor-pointer rounded-md py-2 text-sm pl-4 flex mt-2 font-normal text-black active:text-indigo-400 ${active ? 'bg-indigo-400' : 'bg-white'} ${active ? 'text-white' : 'text-black'}`}
      onClick={onClick}
      id={id}
    >
      <img 
        src={link} 
        alt='_' 
        width={15} 
        className='text-black pb-1 h-fit'
      /> 
      <p className='ml-3 nav-text'>
          {label}    
      </p> 
    </div>
  );
}

export default NavNames;