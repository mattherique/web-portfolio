import React from 'react'

const Navbar = () => {
    return (
        <nav className='h-16 flex items-center justify-between mx-12 xl:mx-auto max-w-6xl'>
            <p className='text-lg'>Matheus Azevedo</p>
            <div className='flex gap-x-10'>
                <button className='hover:bg-slate-800 py-2 px-3 rounded-md transition-all'>
                    About
                </button>
                <button className='hover:bg-slate-800 py-2 px-3 rounded-md transition-all'>Projects</button>
                <button className='hover:bg-slate-800 py-2 px-3 rounded-md transition-all'>Contact</button>
                <button className='hover:bg-slate-800 py-2 px-3 rounded-md transition-all'>Posts</button>
            </div>
        </nav>
    )
}

export default Navbar