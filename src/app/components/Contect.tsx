import React from 'react'
 
const Contect = () => {
  return (
    <div id='Contect'className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'> 
            <div className='space-y-8'>
                <h2 className='text-5xl'>GET IN INFORMATION</h2>
                <p className='text-black text-[18px] pt-2'>Drop Me A Line,Give Me A Call & Send Me Message By Submitting The From.
                </p>
                <div className='flex gap-3 items-center'>
                Email: Azka123@gmail.com
                </div>
                <div>
                PhoneNo: 123456789
                </div>
                <div>
                Address: Block17 Karachi
                </div>
            </div>
            <div className='space-y-8'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='name'>Name:</label>
                    <input type='text'
                    className='h-[40px bg-transparent  border border-accent]'
                    id= 'name'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='name'>PhoneNo:</label>
                    <input type='number'
                    className='h-[40px bg-transparent  border border-accent]'
                    id= 'phoneno'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='name'>Email:</label>
                    <input type='text'
                    className='h-[40px bg-transparent  border border-accent]'
                    id= 'email'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='name'>Address:</label>
                    <input type='text'
                    className='h-[40px bg-transparent  border border-accent]'
                    id= 'Address'/>
                </div>
                <button className='bg-accent p-2 px-6 border-white-900 border'>Send</button>
            </div>
        </div>
      
    </div>
  )
}

export default Contect
