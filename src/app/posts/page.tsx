import AllPosts from "../components/posts/all-posts";

export default function Page() {
    return (
        <div className='w-full flex justify-center image-background'>
            <div className='flex flex-col mx-4 xl:mx-auto w-full max-w-3xl xl:max-w-6xl font-[family-name:var(--font-wotfard)] justify-center text-black my-10 lg:my-20'>
                <h1 className='text-black text-3xl font-semibold'>Posts</h1>
                <p className='text-black mt-3'>{"Some of the ideas that i have interest about"}</p>
                <AllPosts/>
            </div>
        </div>
    )
}