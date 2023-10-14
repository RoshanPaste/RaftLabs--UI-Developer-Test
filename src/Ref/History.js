import React from 'react'
import Dropdown from './DropDowns'
import ProfilePicture from './profilePicture'

function History() {
  return (
    <div className='main h-full mt-5'>
        <div className='flex justify-between'>
            <h1 style={{fontSize: "2rem"}} className='font-medium'>
                Transaction History
            </h1>
            <div className='flex px-3 rounded-lg h-fit pb-3' style={{paddingTop: -9,border: "1px solid rgb(217, 217, 217)"}}>
                <img 
                    src='https://cdn-icons-png.flaticon.com/128/2948/2948239.png' 
                    alt='_'
                    width={15}
                    style={{height:17, marginTop: 15}}
                />
                <Dropdown 
                    options={['Days', 'Week', 'Month', 'Year']} 
                    className='mt-3 tracking-wider cursor-pointer'
                />
            </div>
        </div>
        
        <div className='select-none flex gap-5 mt-3 '>
            <div className=' rounded-lg cursor-pointer py-1 px-1 pr-3 text-base bg-gray-100 shadow-md' style={{border: "1px solid rgb(217, 217, 217)"}}>
                <Dropdown 
                    options={['Receipent', 'Org', 'Customer']} 
                    className='tracking-wider'
                />
            </div>

            <div className=' rounded-lg cursor-pointer py-1 px-1 pr-3 text-base bg-gray-100 shadow-md' style={{border: "1px solid rgb(217, 217, 217)"}}>
                <Dropdown 
                    options={['Amount', 'Invoice', 'Tax', 'Charges']} 
                    className='tracking-wider rounded-lg cursor-pointer'
                    style={{border: "1px solid rgb(217, 217, 217)"}}
                />
            </div>
            <div className=' rounded-lg cursor-pointer py-1 px-1 pr-3 text-base bg-gray-100 shadow-md' style={{border: "1px solid rgb(217, 217, 217)"}}>
                <Dropdown 
                    options={['Status', 'Success', 'Pending', 'Rejected']} 
                    className='tracking-wider rounded-lg cursor-pointer'
                    style={{border: "1px solid rgb(217, 217, 217)"}}
                />
            </div>
        </div>
        <div className='transaction'>
            <div style={{borderBottom: "1px solid rgb(217, 217, 217)"}} className='verticle pb-3 text-sm px-2 pr-7 text-gray-400 flex mt-5 justify-between'>
                <p className='basis-1/5'>Customer</p>
                <p>Status</p>
                <p>Data</p>
                <p>Invoice</p>
                <p>People</p>
            </div>
            <div className='verticle flex mt-8 pb-7 px-2 justify-between' style={{borderBottom: "1px solid rgb(217, 217, 217)"}}>
                <div className='flex gap-6'>
                    <div>
                        <img 
                            src='https://cdn-icons-png.flaticon.com/128/3582/3582531.png' 
                            alt='_'
                            width={15}
                            className='star-icon absolute bg-black rounded-xl mt-7 ml-8'
                            style={{padding:1}}
                        />
                        <ProfilePicture 
                            link="https://pbs.twimg.com/profile_images/1323300574247485443/I9m2P8Lf_400x400.jpg" 
                            alt="_"
                            width={45}
                        />
                    </div>
                    <div>
                        <p className='text-lg tracking-tighter font-medium'>Flyod Johntosan</p>
                        <p className='text-sm text-gray-400 -mt-1'>johntsan@gmail.com</p>
                    </div>
                </div>
                <div className='flex mt-3 h-full px-2 rounded-xl gap-2' style={{border: "1px solid rgb(217, 217, 217)"}}>
                    <div className='rounded-xl h-full bg-green-400 p-1' style={{marginTop: 6}}></div>
                    <p className='text-sm'>Success</p>
                </div>
                <div className='mt-3'>
                    <p className='text-sm font-medium'>Nov 02, 2021</p>
                </div>
                <div className='mt-3'>
                    <p className='text-sm font-medium'>$100,00</p>
                </div>
                <div className='flex mt-3 justify-center w-20 h-10'>
                    <div style={{border: "3px solid white", height: 29, width: 31}} className='rounded-full absolute mr-8'>
                        <ProfilePicture 
                            link="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTPIVEPgWjF7VW17Q16e2hEKG9XQG_mvBPLYxAi_rgIrjWuD4b3" 
                            width='30'
                        />
                    </div>
                    <div style={{border: "3px solid white", height: 29, width: 31}} className='rounded-full absolute'>
                        <ProfilePicture 
                            link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSelQZ7TI3kXGwEV0gzcj8f9LglcKMNNAo-cNy-ldyxaSIwcWcw" 
                            width='30'
                        />
                    </div>
                    <div style={{border: "3px solid white", height: 29, width: 31}} className='rounded-full absolute ml-9'>
                        <ProfilePicture 
                            link="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTVfd_EVxYzkUSFOddSzgJKanIvq_w_dOMhBASAX15kZphTgELU" 
                            width='30'
                        />
                    </div>
                </div>
            </div>

            
            <div className='verticle flex mt-8 px-2 pb-7 justify-between' style={{borderBottom: "1px solid rgb(217, 217, 217)"}}>
                <div className='flex gap-6'>
                    <div>
                        <img 
                            src='https://cdn-icons-png.flaticon.com/128/3582/3582531.png' 
                            alt='_'
                            width={15}
                            className='star-icon absolute bg-black rounded-xl mt-7 ml-8'
                            style={{padding:1}}
                        />
                        <ProfilePicture 
                            link="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS8grOMN4tHpt74Yl6yo12cDRLFfVDNbjqCXDOVp-btXz6MSKdR" 
                            alt="_"
                            width={45}
                        />
                    </div>
                    <div>
                        <p className='text-lg tracking-tighter font-medium'>Flyod Johntosan</p>
                        <p className='text-sm text-gray-400 -mt-1'>johntsan@gmail.com</p>
                    </div>
                </div>
                <div className='flex mt-3 h-full px-2 rounded-xl gap-2' style={{border: "1px solid rgb(217, 217, 217)"}}>
                    <div className='rounded-xl h-full bg-orange-400 p-1' style={{marginTop: 6}}></div>
                    <p className='text-sm'>Pending</p>
                </div>
                <div className='mt-3'>
                    <p className='text-sm font-medium'>Nov 02, 2021</p>
                </div>
                <div className='mt-3'>
                    <p className='text-sm font-medium'>$100,00</p>
                </div>
                <div className='flex mt-3 justify-center w-20 h-10'>
                    <div style={{border: "3px solid white", height: 29, width: 31}} className='rounded-full absolute mr-8'>
                        <ProfilePicture 
                            link="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTPIVEPgWjF7VW17Q16e2hEKG9XQG_mvBPLYxAi_rgIrjWuD4b3" 
                            width='30'
                        />
                    </div>
                    <div style={{border: "3px solid white", height: 29, width: 31}} className='rounded-full absolute'>
                        <ProfilePicture 
                            link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSelQZ7TI3kXGwEV0gzcj8f9LglcKMNNAo-cNy-ldyxaSIwcWcw" 
                            width='30'
                        />
                    </div>
                    <div style={{border: "3px solid white", height: 29, width: 31}} className='rounded-full absolute ml-9'>
                        <ProfilePicture 
                            link="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTVfd_EVxYzkUSFOddSzgJKanIvq_w_dOMhBASAX15kZphTgELU" 
                            width='30'
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default History