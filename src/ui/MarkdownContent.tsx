// Hooks
import { useMDXComponent } from "next-contentlayer/hooks"

// Libs
import React from 'react';
import { Post } from 'contentlayer/generated';

const MarkdownContent = ({post} : {post: Post}) => {
    const MDXContent = useMDXComponent(post.body.code)

    return (
        <div className='text-black markdown w-full'>
            <MDXContent/>
        </div>
    );
};

export default MarkdownContent;