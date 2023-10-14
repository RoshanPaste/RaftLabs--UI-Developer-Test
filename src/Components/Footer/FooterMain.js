import React from 'react'
import ProfilePicture from '../../Ref/profilePicture'
import './main.css'
import PremiumCard from '../../Ref/PremiumCard.js'
import Calender from '../../Ref/Calender.js'
import Meeting from '../../Ref/Meeting.js'

function Footer() {
  return (
    <div className='px-4'>
        <div id='profile'  className='flex justify-between mt-8 px-3'>
            <img 
                src='https://cdn-icons-png.flaticon.com/128/1827/1827504.png'
                alt='_'
                width={25}
                style={{height: 25, cursor: "pointer"}}
            />
            <div className='flex select-none cursor-pointer justify-between -mt-2 gap-2 font-medium shadow-lg rounded-3xl px-2 pt-1' >
                <ProfilePicture 
                    link='https://avatars.githubusercontent.com/u/916389?v=4'
                    width='35'
                />
                <p className='text-sm' style={{paddingTop: 5}}>Jontosan</p>
                <img 
                    src='https://cdn-icons-png.flaticon.com/128/10728/10728680.png'
                    alt='_'
                    width={15}
                    style={{height:25, paddingTop: 5}}
                />
            </div>
        </div>
        <div>
            <PremiumCard />
        </div>
        <div>
            <Calender />
        </div>
        <div>
            <Meeting />
        </div>
    </div>
  )
}

export default Footer