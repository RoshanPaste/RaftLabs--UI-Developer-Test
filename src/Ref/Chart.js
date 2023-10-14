import React from 'react'
import './all.css'
import Dropdown from './DropDowns'

function Chart() {
  return (
    <div className='chart-div py-3 flex-wrap px-8 rounded-xl mt-8 flex justify-between' style={{border: "1px solid #D9D9D9"}}>
        <div className='flex-col content-between'>
            <div className='mb-12'>
                <p className='font-medium text-xl'>Total Sales & Cost</p>
                <p className='text-gray-400 text-xs tracking-wider'>Last 60 Days</p>
            </div>
            <div>
                <div className='flex gap-3'>
                    <p className='text-4xl text-indigo-500 font-bold'>$956.82k</p>
                    <div style={{paddingBlock: 0.5}} className='mt-3 flex h-full bg-green-200 px-2 rounded-xl shadow-lg'>
                        <img 
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROP7LviGJCuceGExQPZIvpXRIa7oc1HWPp3bf21UL1ng&s' 
                            alt='_'
                            width={15}
                            style={{height:18, color:"white", marginTop: 3, marginLeft:-3, mixBlendMode: "color-burn"}}
                        />
                        <p className='text-sm text-green-700' style={{marginLeft: -2}}>+5.4%</p>
                    </div>
                </div>
                <div className='flex gap-1 mt-2'>
                    <p className='text-sm text-green-500'>+8.20k</p>
                    <p className='text-gray-400 text-sm'>vs prev. 60 days</p>
                </div>
            </div>
        </div>
        <div>
            <div className='flex gap-52 w-fit'>
                <div className='flex gap-2'>
                    <p className='text-lg font-semibold'>Analytic</p>
                    <p className='text-green-400 mt-1 -mr-1'>+5.4%</p>
                </div>
                <div className='select-none flex cursor-pointer'>
                    <Dropdown options={['Days', 'Week', 'Month', 'Year']} />
                </div>
            </div>
            <div className='flex gap-2'>
                <div className='flex-col mt-3 text-gray-400'>
                    <p>60</p>
                    <p className='mt-3'>40</p>
                    <p className='mt-3'>20</p>
                </div>
                <div className='grid pb-2 px-5 grid-cols-6 gap-5 content-end'>
                    <div className='w-10 mt-14 rounded-lg bg-indigo-300 h-6'></div>
                    <div className='w-10 mt-6 rounded-lg bg-indigo-500 h-14'></div>
                    <div className='w-10 mt-10 rounded-lg bg-indigo-300 h-10'></div>
                    <div className='w-10 rounded-lg bg-indigo-500 h-20'></div>
                    <div className='w-10 mt-16 rounded-lg bg-indigo-300 h-4'></div>
                    <div className='w-10 mt-8 rounded-lg bg-indigo-500 h-12'></div>
                </div>
            </div>
            <div className='ml-3 text-sm text-gray-400 flex justify-around'>
                <p>1-10 Aug</p>
                <p>11-20 Aug</p>
                <p className='text-black'>21-30 Aug</p>
                <p>1-10 Nov</p>
            </div>
        </div>
    </div>
  )
}

export default Chart