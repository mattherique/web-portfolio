import React from 'react';
import { 
    BiLogoTailwindCss, 
    BiLogoTypescript,
    BiLogoReact
} from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { SiDjango } from "react-icons/si";
import { FaComments, FaLightbulb, FaPython, FaSyncAlt } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaCode } from "react-icons/fa6";
import { IoPeopleSharp } from "react-icons/io5";

import SkillBlock from '@/ui/SkillBlock';

const AboutPage: React.FC = () => {
    return (
        <div className='w-full flex justify-center'>
            <div className='flex flex-col gap-y-20 mx-12 xl:mx-auto w-full max-w-3xl font-[family-name:var(--font-wotfard)] justify-center text-black mt-20'>
                <div className='w-full'>
                    <h1 className='text-4xl mb-6'>Who Am I</h1>
                    <p className='text-lg text-gray-500'>
                        My name is Matheus Henrique Azevedo, i am currently a fullstack web developer, passionate for coding
                        and always looking to learn new things, i have been coding for almost 3 years mostly on front-end, 
                        where i have been working in a transition of a legacy system to a modern software using TypeScript, React and Next.js, 
                        making stunning user interfaces that are both visually appealing and user-friendly, ensuring that websites look
                        great and work well on a variety of devices. Also working on the back-end, where i have been developing
                        RESTful APIs, using Python and Django, and also working with databases like MySQL.
                    </p>
                </div>
                <div className='flex flex-col gap-y-8'>
                    <h3 className='text-3xl'>Some of my technical skills</h3>
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
                    </div>
                </div>
                <div className='w-full flex gap-y-6 gap-x-3 flex-wrap'>
                    <div className='flex flex-col items-center flex-grow basis-[calc(50%-12px)] border rounded-xl shadow-xl gap-y-4 px-4 py-6 block-appear'>
                        <FaCode className='w-12 h-12 text-red-500'/>
                        <div>
                            <p className='text-center mb-1'>Best Practices</p>
                            <p className='text-center text-gray-500'>Ensuring clean, maintainable, and efficient code. This includes writing readable code, following design patterns, and conducting thorough testing.</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center flex-grow basis-[calc(50%-12px)] border rounded-xl shadow-xl gap-y-4 px-4 py-6 block-appear'>
                        <IoPeopleSharp className='w-12 h-12 text-red-500'/>
                        <div>
                            <p className='text-center text-black'>Colaboration</p>
                            <p className='text-center text-gray-500'>Working effectively within a team environment, communicating clearly, and collaborating on projects to achieve common goals.</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center flex-grow basis-[calc(50%-12px)] border rounded-xl shadow-xl gap-y-4 px-4 py-6 block-appear'>
                        <FaLightbulb className='w-12 h-12 text-yellow-500'/>
                        <div>
                            <p className='text-center mb-1'>Problem Solving</p>
                            <p className='text-center text-gray-500'>Identifying issues, analyzing information, and finding effective solutions to complex problems.</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center flex-grow basis-[calc(50%-12px)] border rounded-xl shadow-xl gap-y-4 px-4 py-6 block-appear'>
                        <FaSyncAlt className='w-12 h-12 text-blue-500'/>
                        <div>
                            <p className='text-center mb-1'>Adaptability</p>
                            <p className='text-center text-gray-500'>Adjusting to new conditions, learning new skills, and being flexible in the face of change.</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center flex-grow basis-[calc(50%-12px)] border rounded-xl shadow-xl gap-y-4 px-4 py-6 block-appear'>
                        <FaComments className='w-12 h-12 text-purple-500'/>
                        <div>
                            <p className='text-center mb-1'>Communication</p>
                            <p className='text-center text-gray-500'>Clearly conveying information and ideas through various mediums, including verbal, written, and non-verbal communication.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;