import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    
    return (
        <nav className='w-full flex h-16'>
            <div className='h-16 flex items-center justify-between mx-4 w-full sm:mx-auto max-w-3xl xl:max-w-6xl nav-animation'>
                <Link href="/" className='cursor-pointer hover:bg-sky-100 py-2 px-3 rounded-md transition-all'>
                    <p className='text-lg text-gray-600'>Matheus Azevedo</p>
                </Link>
                <div className='gap-x-10 hidden md:flex'>
                    <Link href="/about" className='text-gray-600 hover:bg-sky-100 py-2 px-3 rounded-md transition-all'>
                        About
                    </Link>
                    <Link href="/contact" className='text-gray-600 hover:bg-sky-100 py-2 px-3 rounded-md transition-all'>Contact</Link>
                    <Link href="/posts" className='text-gray-600 hover:bg-sky-100 py-2 px-3 rounded-md transition-all'>Posts</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar