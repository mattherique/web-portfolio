
import { allPosts } from "contentlayer/generated"

export default function Page() {

    const posts =  allPosts.map((post) => ({
      params: {
        slug: post.slug,
      },
    }))

    console.log(posts)
     
    return (
        <div className='mx-12 xl:mx-auto max-w-6xl h-full flex flex-col gap-y-20'>
            <div className='w-[100%] text-black'>
                <h1 className='text-black text-3xl font-semibold'>Posts</h1>
                <p className='text-black mt-3'>Some of the ideas that i have interess about</p>
                {/* <AllPosts/> */}
            </div>
        </div>
    )
}