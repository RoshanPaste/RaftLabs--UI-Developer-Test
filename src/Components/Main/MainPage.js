import React, {useState} from 'react'
import ProfilePicture from '../../Ref/profilePicture' 
import './style.css'
import Card from '../../Ref/Card.js'
import Chart from '../../Ref/Chart.js'
import History from '../../Ref/History.js'


function MainPage() {
    const [searchActive, setSearchActive] = useState(false);    
    const handleIconClick = () => {
      setSearchActive(!searchActive);
    };

  return (
    <div style={{overflow:"hidden", width: "95%", margin: "0 auto", paddingBlock: "1rem"}}>
        <div className='flex justify-between'>
            <div className='flex'>
                <div id="img-cont" className='h-fit'>
                    <p 
                        id='tag' 
                        style={{borderRadius: 100,marginLeft: 37, position:'absolute'}} 
                        className='bg-indigo-500 w-fit px-1 text-white text-xs h-fit'
                    >
                        3
                    </p>
                    <ProfilePicture 
                        // width={50} 
                        link="https://avatars.githubusercontent.com/u/916389?v=4" 
                        className='profile-img min-w-full pt-0'
                    />
                </div>
                <div className='ml-5 -mt-2'>
                    <p className='font-semibold text-3xl'>
                        Good Evening Team!
                    </p>
                    <p className='text-slate-500 text-sm mt-1'>
                        Have an in-depth look at the metrics within your dashboard
                    </p>
                </div>
            </div>
            <div 
                id='search' 
                className={`flex h-9 justify-between overflow-hidden p-2 mt-3 cursor-pointer bg-gray-200 shadow-md rounded-full origin-center ${searchActive ? 'active w-72' : ''}`}
            >
                <img 
                    id='icon' 
                    src='https://cdn-icons-png.flaticon.com/128/622/622669.png' 
                    alt='O' 
                    width={20}
                    height={20}
                    className='select-none'
                    onClick={handleIconClick}
                />
                <div id='input' className=''>
                    <input 
                        type='text' 
                        placeholder='Search' 
                        className={`w-60 -mr-2 h-12 -mt-5 pl-3 bg-slate-200 text-black outline-none ${searchActive ? 'visible' : 'hidden'}`}
                    />
                </div>
            </div>
        </div>
        <div>
            <Card />
        </div>
        <div>
            <Chart />
        </div>
        <div>
            <History />
        </div>
    </div>
  )
}

export default MainPage