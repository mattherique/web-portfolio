import React from 'react';

type SkillBlockProps = {
    icon: React.ReactNode;
    text: string;
    link?: string;
}

const SkillBlock = ({icon, text, link=''}: SkillBlockProps) => {
    const handleLinkRedirect = () => {
        window.open(link, '_blank');
    }

    return (
        <div 
            data-link={link !== ''}
            className='border data-[link=true]:cursor-pointer p-3 flex flex-col gap-y-2 items-center shadow-xl flex-grow rounded-xl w-32 basis-[128px] hidden-animation animation-skill-block'>
            {icon}
            <a onClick={handleLinkRedirect}>{text}</a>
        </div>
    );
};

export default SkillBlock;