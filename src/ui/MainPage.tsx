'use client'

// Libs
import React from 'react';
import Link from 'next/link';

// Icons
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";

// Components
import AllPosts from '@/app/components/posts/all-posts';

const MainPage = () => {
    return (  
        <>  
            <div className='mx-12 xl:mx-auto max-w-6xl h-full flex flex-col gap-y-20'>
                <div className='w-[65%]'>
                    <h1 className='text-5xl mt-20 text-animation text-black font-semibold'>`{"Hey! I'm Mathew, a software developer"}`</h1>
                    <div className='mt-10 flex flex-col gap-y-4'>
                        <p className='text-xl text-black text-animation'>{"I'm engaged to build great and unique experiences for users."}</p>
                        <p className='text-xl text-black text-animation'>
                            Working my career extracting the most that a web app can offer, leading to optimal and 
                            <span data-color="light-blue" className='chalk-text'>simple code</span> with <span data-color="yellow" className='chalk-text'>flexibility</span>.
                        </p>
                        <p className='text-xl text-black text-animation'>Always looking for evolve my knowledge in 
                        <span data-color="pink" className='chalk-text'>front-end</span> and <span data-color="red" className='chalk-text'>back-end</span> web development</p>
                        <div>
                            <div className='flex items-center gap-x-3 mt-3'>
                                <Link href='/posts'>
                                    <button className='cursor-pointer flex items-center gap-x-3 py-2 px-3 rounded-md bg-[#fff] text-black shadow-md hover:-mt-2 hover:mb-2 transition-all'> Linkedin
                                        <IoLogoLinkedin className='w-9 h-9 text-[#0a66c2]' />
                                    </button>
                                </Link>
                                <Link href='/posts'>
                                    <div className='cursor-pointer flex items-center gap-x-3 py-2 px-3 rounded-md bg-[#fff] text-black shadow-md hover:-mt-2 hover:mb-2  transition-all'> Github
                                        <IoLogoGithub className='w-9 h-9' />
                                    </div>  
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[100%]'>
                    <h1 className='text-black text-3xl font-semibold'>Posts</h1>
                    <p className='text-black mt-3'>Some of the ideas that i have interess about</p>
                    <AllPosts/>
                </div>
            </div>
        </>
    )
}

export default MainPage