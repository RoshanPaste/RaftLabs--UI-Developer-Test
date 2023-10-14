import React from 'react'
import ProfilePicture from './profilePicture'

function Card() {
  return (
    <div className='mt-9 rounded-3xl h-auto bg-indigo-500 flex flex-wrap justify-around'>
        <div className='flex gap-5 p-2 text-white'>
            <div className='py-7'>
                <ProfilePicture 
                    link="https://img.freepik.com/premium-vector/cartoon-businessman-pushing-big-money-bag_52569-1053.jpg"
                    width='45'
                />
            </div>
            <div className='flex-col w-40 mt-4'>
                <p className='text-xs mb-1 text-indigo-200'>
                    Monthly Revenue
                </p>
                <div className='flex gap-2 pt-1'>
                    <p className='text-xl font-normal -mt-1'>
                        $3.500
                    </p>
                    <p style={{paddingBlock: 1, marginTop: 2}} className='bg-white font-medium text-center text-xs h-full rounded-xl text-indigo-400 px-1 '>
                        +2.4%
                    </p>
                </div>
                <div className='flex gap-1'>
                    <p className='text-sm text-indigo-200'>Previous Month</p>
                    <p className='font-semibold'>$1.7k</p>
                </div>
                
            </div>
        </div>

        <div className='flex gap-5 p-2 text-white'>
            <div className='py-7'>
                <ProfilePicture 
                    link="https://img.freepik.com/free-vector/gold-coins-banknotes-3d-cartoon-style-icon-stack-coins-with-dollar-sign-wad-money-cash-savings-flat-vector-illustration-wealth-economy-finance-profit-currency-concept_74855-25998.jpg"
                    width='45'
                />
            </div>
            <div className='flex-col w-40 mt-4'>
                <p className='text-xs mb-1 text-indigo-200'>
                    Monthly Sales
                </p>
                <div className='flex gap-2 pt-1'>
                    <p className='text-xl font-normal -mt-1'>
                        $6.750
                    </p>
                    <p style={{paddingBlock: 1, marginTop: 2}} className='bg-white font-medium text-center text-xs h-full rounded-xl text-indigo-400 px-1 '>
                        +1.4%
                    </p>
                </div>
                <div className='flex gap-1'>
                    <p className='text-sm text-indigo-200'>
                        Previous Month
                    </p>
                    <p className='font-semibold'>
                        $3.1k
                    </p>
                </div>
                
            </div>
        </div>

        <div className='flex gap-5 p-2 text-white'>
            <div className='py-7'>
                <ProfilePicture 
                    link="https://m.media-amazon.com/images/I/81nyUg2oDUL._AC_UF1000,1000_QL80_.jpg"
                    width='45'
                />
            </div>
            <div className='flex-col w-40 mt-4'>
                <p className='text-xs mb-1 text-indigo-200'>
                    Total Profit
                </p>
                <div className='flex gap-2 pt-1'>
                    <p className='text-xl font-normal -mt-1'>
                        $10.900
                    </p>
                    <p style={{paddingBlock: 1, marginTop: 2}} className='bg-white font-medium text-center text-xs h-full rounded-xl text-indigo-400 px-1 '>
                        +4.3%
                    </p>
                </div>
                <div className='flex gap-1'>
                    <p className='text-sm text-indigo-200'>
                        Previous Year
                    </p>
                    <p className='font-semibold'>$8.9k</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Card