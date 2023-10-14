import React from 'react'
import ProfilePicture from './profilePicture'

function MeetingProfile({label, time, profile, className=""}) {
  return (
    <div className={`${className} flex gap-8`}>
        <div className='bg-gray-200 h-fit rounded-full'>
            <ProfilePicture 
                link={profile}
                width='53'
                className='h-14 p-2 pb-3 pt-3'
            />
        </div>
        <div>
            <p className='font-medium'>{label}</p>
            <div className='flex gap-16'>
                <div className='flex gap-2 mt-1 h-fit'>
                    <img 
                        src='https://cdn-icons-png.flaticon.com/128/7828/7828032.png'
                        alt='_'
                        style={{width: 25, marginTop: -3}}
                        className='h-fit'
                    />
                    <p className='text-sm text-gray-400'>Google Meet</p>
                </div>
                <div className='flex gap-2 mt-1 h-fit'>
                    <img 
                        src='https://cdn-icons-png.flaticon.com/128/11105/11105611.png'
                        alt='_'
                        style={{width:18, marginTop: 1}}
                        className='h-fit'
                    />
                    <p className='text-sm text-gray-400'>{time}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MeetingProfile