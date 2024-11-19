'use client'

import { useParams } from 'next/navigation';
import TypescriptTransition from '@/markdown/typescript-transition'

type PostComponents = {
    [key: string]: React.FC; // Each key maps to a React Functional Component
}

const Page = () => {
    const { postname } = useParams();

    const posts: PostComponents = {
        typetransition: TypescriptTransition
    }

    const Post = posts[postname as keyof PostComponents];

    return (
        <div className='flex mx-12 xl:mx-auto w-3xl max-w-3xl font-[family-name:var(--font-wotfard)] justify-center'>
            <div className='mt-16'>
                {Post ? <Post/> : (
                    <div className='flex w-3xl'>
                        <p className='text-black text-3xl'>Post not Created!</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Page