import React from 'react'

function ProfilePicture({link, className="", width="40"}) {
  return (
    <div>
      <img 
        src={link} 
        alt='_' 
        width={width} 
        style={{borderRadius: 100}}
        className={`text-black pb-1 ${className} min-w-full`}
      /> 
    </div>
    
  )
}

export default ProfilePicture