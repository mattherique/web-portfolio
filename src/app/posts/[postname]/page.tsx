'use client'

import { useParams } from 'next/navigation';
import { allPosts } from "contentlayer/generated"
import MarkdownContent from '@/ui/MarkdownContent';
// import TsExtensionTipSection from '@/app/components/posts/typescript-transition/TsExtensionTipSection';

const Page = () => {
    const { postname } = useParams();

    const currentPost = allPosts.find(
        (post) =>
          post.slug === postname,
    )
    
    if(!currentPost){
        return <p className='text-black text-3xl'>Post not Created!</p>
    }

    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <div className='flex mx-12 px-5 xl:mx-auto w-full max-w-4xl font-[family-name:var(--font-wotfard)] justify-center mt-16'>
                <div className='flex w-full'>
                    <MarkdownContent post={currentPost}/>
                </div>
            </div>
        </div>
    )
}

export default Page