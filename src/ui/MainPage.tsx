import React from 'react';
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { BsJournalText } from "react-icons/bs";
import AllPosts from '@/app/components/posts/all-posts';

// src\ui\MainPage.tsx

const MainPage = () => {
    return (    
        <div className='mx-auto max-w-6xl h-full'>
            <div className='w-[65%]'>
                <h1 className='text-5xl mt-20 text-animation'>Hey! I'm Mathew, a fullstack developer</h1>
                <div className='mt-10 flex flex-col gap-y-4'>
                    <p className='text-xl text-animation'>I'm engaged to build great and unique experiences for users.</p>
                    <p className='text-xl text-animation'>Working my career extracting the most that a web app can offer, leading to optimal and simple code with flexibility.</p>
                    <p className='text-xl text-animation'>Always looking for new challanges that can lead me to through my limit.</p>
                    <div>
                        <div className='flex items-center gap-x-3 mt-3'>
                            <button data-dark-mode={true} className='cursor-pointer flex items-center gap-x-3 py-2 px-3 bg-[#1c1837] text-white rounded-sm hover:-mt-2 border-animation'> Linkedin
                                <IoLogoLinkedin className='w-9 h-9 text-[#0a66c2]' />
                            </button>
                            <button className='cursor-pointer flex items-center gap-x-3 py-2 px-3 rounded-md bg-[#1c1837] text-white shadow-md hover:-mt-2 border-animation'> Posts
                                <BsJournalText className='w-9 h-9' />
                            </button>
                            <button className='cursor-pointer flex items-center gap-x-3 py-2 px-3 rounded-md bg-[#1c1837] hover:-mt-2 border-animation'> Github
                                <IoLogoGithub className='w-9 h-9' />
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <AllPosts/>
                </div>
            </div>
        </div>
    )
}

export default MainPage