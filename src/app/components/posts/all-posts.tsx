import Link from "next/link"
import React from "react"

import { postsPreview } from "../../../constants/posts"

const AllPosts = () => {
    return (
        <div className="my-8">
            {postsPreview.map((post) => (
                <Link href={post.url} key={post.id}>
                    <div className="w-full rounded-md border-[1px] border-[#f1f1f1] hover:-mt-1 transition-all shadow-xl duration-200 p-6 text-black border-animation">
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold">{post.title}</h3>
                            <p className="font-extralight tracking-tight text-gray-600">{`Publish Date: ${post.date}`}</p>
                        </div>
                        <p className="text-lg">{post.description}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default AllPosts