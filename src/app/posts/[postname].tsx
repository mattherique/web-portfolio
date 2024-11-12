import ReactPost from '@/app/content/posts/react-post.mdx'

export default function page() {
    return (
        <div className='flex mx-12 xl:mx-auto max-w-3xl font-[family-name:var(--font-wotfard)]'>
            <div className='mt-16'>
                <ReactPost/>
            </div>
        </div>
    )
}