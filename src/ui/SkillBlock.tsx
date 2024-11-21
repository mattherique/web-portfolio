import React, { ReactNode } from 'react';

type SkillBlockProps = {
    icon: React.ReactNode;
    text: string;
}

const SkillBlock = ({icon, text}: SkillBlockProps) => {
    return (
        <div className='border p-3 flex flex-col gap-y-2 items-center shadow-xl rounded-xl w-32 basis-[128px] block-appear'>
            {icon}
            <p>{text}</p>
        </div>
    );
};

export default SkillBlock;