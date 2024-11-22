
// import { allPosts } from "contentlayer/generated"

import AllPosts from "../components/posts/all-posts";

export default function Page() {
    return (
        // <div className='w-full h-full flex flex-col justify-center gap-y-20'>
        //     <div className='mx-auto max-w-3xl xl:max-w-6xl'>
        //         <div className='w-[100%] mt-7'>
                    
        //         </div>
        //     </div>
        // </div>
        <div className='w-full flex justify-center'>
            <div className='flex flex-col mx-4 xl:mx-auto w-full max-w-3xl xl:max-w-6xl font-[family-name:var(--font-wotfard)] justify-center text-black my-10 lg:my-20'>
                <h1 className='text-black text-3xl font-semibold'>Posts</h1>
                <p className='text-black mt-3'>{"Some of the ideas that i have interess about"}</p>
                <AllPosts/>
            </div>
        </div>
    )
}