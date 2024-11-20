import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='h-16 flex items-center justify-between mx-12 xl:mx-auto max-w-6xl'>
            <Link href="/" className='cursor-pointer'>
                <p className='text-lg text-black'>Matheus Azevedo</p>
            </Link>
            <div className='gap-x-10 hidden md:flex'>
                <Link href="/about" className='text-black hover:bg-slate-800 py-2 px-3 rounded-md transition-all'>
                    About
                </Link>
                <Link href="/contact" className='text-black hover:bg-slate-800 py-2 px-3 rounded-md transition-all'>Contact</Link>
                <Link href="/posts" className='text-black hover:bg-slate-800 py-2 px-3 rounded-md transition-all'>Posts</Link>
            </div>
        </nav>
    )
}

export default Navbar