import React from 'react'
import Link from 'next/link'
import { redirect } from 'next/dist/server/api-utils'
 

const Navbar = () => {




    return (
        <div className='flex justify-around items-center h-14 bg-violet-500'>
            <div className='font-bold text-2xl '>
                <Link href="/"><span>Sortner</span><span className='text-green-700'>X</span></Link>
            </div>
            <ul className='flex  items-center gap-5'>
                <Link href="/"><li>Home</li></Link>
                <Link href="/about"><li>About</li></Link>
                <Link href="/sortner"><li>Sortner</li></Link>
                <Link href="contact"><li>Contact Us</li></Link>
                <div className='flex gap-5 items-center font-bold'>
                    <Link href=""><button   className='bg-violet-400 p-2 rounded-xl hover:cursor-pointer'>SignIn</button></Link>
                    <button className='bg-violet-400 p-2 rounded-xl hover:cursor-pointer'>Github</button>
                </div>
            </ul>

        </div>
    )
}

export default Navbar