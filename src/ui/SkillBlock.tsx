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
            onClick={handleLinkRedirect}
            data-link={link !== ''}
            className='border data-[link=true]:cursor-pointer bg-white p-3 flex flex-col gap-y-2 items-center shadow-xl flex-grow rounded-xl w-32 basis-[128px] hidden-animation animation-skill-block'>
            {icon}
            {text}
        </div>
    );
};

export default SkillBlock;