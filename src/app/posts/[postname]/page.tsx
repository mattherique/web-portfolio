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
            <div className='flex mx-12 xl:mx-auto w-auto max-w-3xl font-[family-name:var(--font-wotfard)] justify-center'>
                <div className='mt-16'>
                    <div className='flex'>
                        {/* <TsExtensionTipSection/> */}
                        <MarkdownContent post={currentPost}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page