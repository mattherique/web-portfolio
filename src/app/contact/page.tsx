'use client';

// UI components
import SkillBlock from '@/ui/SkillBlock';

// Libs
import React, { useEffect } from 'react';

// Icons
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const ContactMe = () => {
    useEffect(() => {
        const hiddenElements = document.querySelectorAll('.hidden-animation')
        hiddenElements.forEach((element) => element.classList.add('show'))
    }, []);

    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <div className='flex mx-12 px-5 xl:mx-auto w-full max-w-3xl font-[family-name:var(--font-wotfard)] justify-center mt-16'>
                <div className='flex flex-col w-full text-black'>
                    <div className='flex flex-col gap-y-8'>
                        <div className='flex flex-wrap xl:flex-row gap-8 hidden-animation'>
                            <SkillBlock
                                icon={<HiOutlineMailOpen className='w-16 h-16 text-red-500' />}
                                text='Email'
                                link="mailto:matheus.henriquedeazevedo@gmail.com"
                            />
                            <SkillBlock
                                icon={<FaLinkedin className='w-16 h-16 text-blue-600' />}
                                text='Linkedin'
                                link="https://www.linkedin.com/in/matheus-henrique-de-azevedo/"
                            />
                            <SkillBlock
                                icon={<FaInstagram className='w-16 h-16 text-purple-500' />}
                                text='Instagram'
                                link="https://www.instagram.com/matheus_25677/"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;