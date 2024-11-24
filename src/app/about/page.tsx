'use client'

import React, { useEffect } from 'react';

// Icons
import { 
    BiLogoTailwindCss, 
    BiLogoTypescript,
    BiLogoReact
} from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { SiDjango } from "react-icons/si";
import { FaLightbulb, FaPython, FaSyncAlt } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaCode, FaGitAlt } from "react-icons/fa6";
import { IoPeopleSharp } from "react-icons/io5";
import { FaAws } from "react-icons/fa";

// Ui Components
import SkillBlock from '@/ui/SkillBlock';

const AboutPage: React.FC = () => {

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show')
            } else {
                entry.target.classList.remove('show')
            }
            });
        });

        const hiddenElements = document.querySelectorAll('.hidden-animation')
        hiddenElements.forEach((element) => observer.observe(element))

    }, []);

    return (
        <div className='w-full flex justify-center'>
            <div className='flex flex-col gap-y-20 mx-4 xl:mx-auto w-full max-w-3xl xl:max-w-6xl font-[family-name:var(--font-wotfard)] justify-center text-black my-10 lg:my-20'>
                <div className='w-full'>
                    <h1 className='text-4xl mb-6'>{'Who Am I'}</h1>
                    <div className='flex flex-col gap-y-5'>
                        <p className='text-lg lg:text-xl text-gray-500'>
                            {"My name is Matheus Henrique Azevedo, I'm a 22-year-old full-stack web developer from Brazil!"}
                        </p>
                        <p className='text-lg lg:text-xl text-gray-500'>
                            {'Passionate about coding and always eager to learn new skills, i have been coding for almost 3 years mostly on front-end, where i have been working in a transition of a legacy system to a modern software using TypeScript, React and Next.js, making stunning user interfaces that are both visually appealing and user-friendly, ensuring that websites look great and work well on a variety of devices.'}
                        </p>
                        <p className='text-lg lg:text-xl text-gray-500'>{'On the back-end, I have been developing robust RESTful APIs using Python and Django, while also managing databases such as MySQL.'}</p>
                        <p className='text-lg lg:text-xl text-gray-500'>{"Collaboration plays a key role in my work. I actively contribute to team projects, participating in code reviews, ensuring best practices, and engaging in architecture decisions to design scalable, efficient, and maintainable solutions. By collaborating closely with my team, I help drive technical direction while maintaining high-quality standards in every project."}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-y-8'>
                    <h3 className='text-3xl hidden-animation'>{'Some of my technical skills'}</h3>
                    <div className='flex flex-wrap gap-8'>
                        <SkillBlock
                            icon={<BiLogoTailwindCss className='w-16 h-16 text-sky-300' />}
                            text='Tailwind Css'
                        />
                        <SkillBlock
                            icon={<BiLogoTypescript className='w-16 h-16 text-blue-500'/>}
                            text='Typescript'
                        />
                        <SkillBlock
                            icon={<BiLogoReact className='w-16 h-16 text-sky-600'/>}
                            text='React'
                        />
                        <SkillBlock
                            icon={<RiNextjsFill className='w-16 h-16'/>}
                            text='Next.Js'
                        />
                        <SkillBlock
                            icon={<FaHtml5 className='w-16 h-16 text-orange-500'/>}
                            text='Html'
                        />
                        <SkillBlock
                            icon={<FaCss3Alt className='w-16 h-16 text-blue-500'/>}
                            text='Css'
                        />
                        <SkillBlock
                            icon={<SiDjango className='w-16 h-16 text-lime-800'/>}
                            text='Django'
                        />
                        <SkillBlock
                            icon={<FaPython className='w-16 h-16 text-[#306998]'/>}
                            text='Python'
                        />
                        <SkillBlock
                            icon={<FaGitAlt className='w-16 h-16 text-orange-700'/>}
                            text='Git'
                        />
                        <SkillBlock
                            icon={<FaAws className='w-16 h-16 text-orange-400'/>}
                            text='Aws'
                        />
                    </div>
                </div>
                <div className='animation-block mb-10'>
                    <div className='flex flex-col items-center flex-grow basis-[calc(100%-12px)] sm:basis-[calc(50%-12px)] border rounded-xl shadow-xl gap-y-4 px-4 py-6 hidden-animation bg-white'>
                        <FaCode className='w-12 h-12 text-red-500'/>
                        <div>
                            <p className='text-center mb-1'>Best Practices</p>
                            <p className='text-center text-gray-500'>{"Ensuring clean, maintainable, and efficient code. This includes writing readable code, following design patterns, and conducting thorough testing."}</p>
                        </div>
                    </div>
                    <div data-right className='flex flex-col items-center flex-grow basis-[calc(100%-12px)] sm:basis-[calc(50%-12px)] border rounded-xl shadow-xl gap-y-4 px-4 py-6 hidden-animation bg-white'>
                        <IoPeopleSharp className='w-12 h-12 text-lime-500'/>
                        <div>
                            <p className='text-center text-black'>Colaboration</p>
                            <p className='text-center text-gray-500'>{"Working effectively within a team environment, communicating clearly, and collaborating on projects to achieve common goals."}</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center flex-grow basis-[calc(100%-12px)] sm:basis-[calc(50%-12px)] border rounded-xl shadow-xl gap-y-4 px-4 py-6 hidden-animation bg-white'>
                        <FaLightbulb className='w-12 h-12 text-yellow-500'/>
                        <div>
                            <p className='text-center mb-1'>Problem Solving</p>
                            <p className='text-center text-gray-500'>{"Identifying issues, analyzing information, and finding effective solutions to complex problems."}</p>
                        </div>
                    </div>
                    <div data-right className='flex flex-col items-center flex-grow basis-[calc(100%-12px)] sm:basis-[calc(50%-12px)] border rounded-xl shadow-xl gap-y-4 px-4 py-6 hidden-animation bg-white'>
                        <FaSyncAlt className='w-12 h-12 text-blue-500'/>
                        <div>
                            <p className='text-center mb-1'>Adaptability</p>
                            <p className='text-center text-gray-500'>{"Adjusting to new conditions, learning new skills, and being flexible in the face of change."}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
