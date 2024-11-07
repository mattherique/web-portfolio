import React from "react"
import { getBlogPosts } from "@/app/utils/mdx-manager"

import Teste from '@/app/components/teste.mdx'

const AllPosts = () => {
    // const latestPosts = getBlogPosts()

    // const sortedPosts = latestPosts.sort((a, b) => { 
    //     if(new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)){
    //         return -1
    //     }

    //     return 1
    // })

    return (
        <div>
            {/* {sortedPosts.map((post, index) => {
                {console.log(post)}
                return(
                
                <div key={post.slug}>
                    <p>{post.metadata.title}</p>
                    {post.content}
                </div>
            )})} */}
            <Teste />
        </div>
    )
}

export default AllPosts