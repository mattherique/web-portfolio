import React, { ReactNode } from 'react';

const CodeBlock = ({ children }: {children: ReactNode}) => {
    return (
        <div className="border-[1px] rounded-sm bg-slate-100 p-7 max-w-3xl overflow-x-auto">
            {children}
        </div>
    )
};

export default CodeBlock;