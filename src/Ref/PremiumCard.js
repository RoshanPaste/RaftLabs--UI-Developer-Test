import React from 'react'
import'./all.css'
import ProfilePicture from './profilePicture'

function PremiumCard() {
  return (
    <div className='mt-8 pb-8' style={{borderBottom: "1px solid #D9D9D9"}}>
        <p className='text-sm text-indigo-400 font-medium'>Premium Access</p>
        <div className='mt-2'>
            <p className='text-3xl text-gray-700' style={{fontWeight:700}}>Take Back</p>
            <p className='text-3xl text-gray-700' style={{fontWeight:700}}>Your Creative</p>
            <div className='flex gap-5 flex-wrap'>
                <p className='text-3xl text-gray-700' style={{fontWeight:700}}>Control</p>
                <div className='cursor-pointer flex mt-1 justify-center w-20 h-10'>
                    <div style={{border: "3px solid white", height: 40, width: 40}} className='rounded-full bg-black absolute ml-20 z-50'>
                        <p className='text-white font-medium text-base pt-1' style={{paddingLeft: 3}}>+10</p>
                    </div>
                    <div style={{border: "3px solid white", height: 40, width: 40}} className='rounded-full absolute mr-10'>
                        <ProfilePicture 
                            link="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTPIVEPgWjF7VW17Q16e2hEKG9XQG_mvBPLYxAi_rgIrjWuD4b3" 
                        />
                    </div>
                    <div style={{border: "3px solid white", height: 40, width: 40}} className='rounded-full absolute'>
                        <ProfilePicture 
                            link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSelQZ7TI3kXGwEV0gzcj8f9LglcKMNNAo-cNy-ldyxaSIwcWcw" 
                        />
                    </div>
                    <div style={{border: "3px solid white", height: 40, width: 40}} className='rounded-full absolute ml-10'>
                        <ProfilePicture 
                            link="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTVfd_EVxYzkUSFOddSzgJKanIvq_w_dOMhBASAX15kZphTgELU" 
                        />
                    </div>
                </div>
            </div>
        </div>
        
        <div className='flex gap-3 mt-4'>
            <p className='text-sm text-gray-400'>
                The Prefessional Platform 
            </p>
            <img 
                src='https://cdn-icons-png.flaticon.com/128/10728/10728680.png'
                alt='_'
                style={{height:15, width: 12, marginTop: 3}}
            />
        </div>

        <div style={{border: "1px solid #D9D9D9"}} className='mt-8 pt-2 pb-2 px-4 rounded-xl cursor-pointer flex justify-between'>
            <p className="text-base text-indigo-400 font-medium">Upgrade Now</p>
            <img 
                src='https://cdn-icons-png.flaticon.com/128/9967/9967666.png'
                alt='_'    
                style={{rotate: "180deg", width:25}}
            />
        </div>
    </div>
  )
}

export default PremiumCard