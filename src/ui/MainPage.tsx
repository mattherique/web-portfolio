'use client'

// Libs
import React, { useEffect } from 'react';
import Link from 'next/link';

// Icons
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";

// Components
import AllPosts from '@/app/components/posts/all-posts';
import { annotate, annotationGroup } from 'rough-notation';

const MainPage = () => {
    useEffect(() => {
        const codeQualityElement = annotate(document.querySelector('#code-quality') as HTMLElement, { type: 'highlight', color: '#f5c8ff' });
        const oportunitiesElement = annotate(document.querySelector('#oportunities') as HTMLElement, { type: 'highlight', color: '#ffed8a' });
        const bestPracticesElement = annotate(document.querySelector('#best-practices') as HTMLElement, { type: 'highlight', color: '#ffdac8' });
        const frontEndElement = annotate(document.querySelector('#front-end') as HTMLElement, { type: 'highlight', color: '#ffa4a4' });
        const backEndElement = annotate(document.querySelector('#back-end') as HTMLElement, { type: 'highlight', color: '#c8ebff' });

        const ag = annotationGroup([
            codeQualityElement,
            oportunitiesElement,
            bestPracticesElement,
            frontEndElement,
            backEndElement
        ]);
        setTimeout(() => {
            ag.show()
        }, 600)
    }, []);

    return (  
        <>  
            <div className='w-full h-[calc(100vh-4rem)] flex flex-col gap-y-20 image-background'>
                <div className='mx-4 xl:mx-auto max-w-3xl xl:max-w-6xl'>
                    <div className='w-auto xl:w-[70%]'>
                        <h1 className='text-5xl mt-20 text-animation text-black font-semibold'>{"Hey! I'm Mathew, a software developer"}</h1>
                        <div className='mt-10 flex text-black flex-col gap-y-4'>
                            <p className='text-xl text-animation'>{"With nearly three years of web development experience, I focus on maximizing the potential of web applications through "}<span className='whitespace-nowrap' id="code-quality">{"clean, scalable, and flexible code, "}</span>{"currently, I work on a project using Next.js and React, where I am responsible for maintaining a simple yet robust code structure. I also oversee the team's contributions, ensuring code quality and adherence to"}<span className='whitespace-nowrap' id="best-practices">{"best practices"}</span>.</p>
                            <p className='text-xl text-animation'>{"Passionate about continuous growth, I am "}<span className='whitespace-nowrap' id="oportunities">{"always seeking opportunities "}</span>{"to expand my expertise in both"}<span className='whitespace-nowrap' id="front-end">{" front-end "}</span>{"and"}<span className='whitespace-nowrap' id="back-end">{" back-end "}</span>{"web development."}</p>
                            <div>
                                <div className='flex items-center gap-x-3 mt-3'>
                                    <Link href='/posts'>
                                        <button className='cursor-pointer flex items-center gap-x-3 py-2 px-3 rounded-md bg-[#fff] text-black shadow-lg hover:-mt-2 hover:mb-2 transition-all'> Linkedin
                                            <IoLogoLinkedin className='w-9 h-9 text-[#0a66c2]' />
                                        </button>
                                    </Link>
                                    <Link href='/posts'>
                                        <div className='cursor-pointer flex items-center gap-x-3 py-2 px-3 rounded-md bg-[#fff] text-black shadow-lg hover:-mt-2 hover:mb-2  transition-all'> Github
                                            <IoLogoGithub className='w-9 h-9' />
                                        </div>  
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[100%] mt-7'>
                        <h1 className='text-black text-3xl font-semibold'>Posts</h1>
                        <p className='text-black mt-3'>{"Some of the ideas that i have interess about"}</p>
                        <AllPosts/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage