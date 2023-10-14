import React from 'react'
import NumberList from './NumberList.js'

function Calender() {
  return (
    <div className='mt-10'>
        <div className='flex justify-between'>
            <p className='font-semibold'>October 2023</p>
            <div className='flex gap-4'>
                <img
                    src='https://cdn-icons-png.flaticon.com/128/10728/10728732.png' 
                    alt='_'
                    style={{width: 25, height: 25, border: "1px solid #D9D9D9"}}
                    className='rounded-full p-1 cursor-pointer'
                />
                <img
                    src='https://cdn-icons-png.flaticon.com/128/8637/8637594.png' 
                    alt='_'
                    style={{width: 25, height: 25, border: "1px solid #D9D9D9"}}
                    className='rounded-full p-1 cursor-pointer'
                />
            </div>
        </div>

        <div className='flex px-1 mb-4 justify-between mt-5 text-xs text-gray-400'>
            <p>Mon</p>
            <p>Tue</p>
            <p className='-ml-2'>Wed</p>
            <p  className='-ml-2'>Thu</p>
            <p>Fri</p>
            <p>Sat</p>
            <p>Sun</p>
        </div>
        <div>
            <NumberList />
        </div>
    </div>
  )
}

export default Calender