import { getAllPosts } from '@/lib/blog';
import Link from 'next/link';

export default function Blog() {
    const posts = getAllPosts();

    return (
        <main id="blog-page">
            <aside>
                <h2>
                    <span>|</span>Blog
                </h2>
                <p>
                    I have social media but I don't use it. This will be my form of social
                    media. I will post whatever I want whenever I feel like it. It can be
                    a <span>random thought</span>, regurgitating something I am{' '}
                    <span>studying</span>, whatever it may be.
                </p>
                <p>
                    Although there may be a chance that nobody reads it, the whole point
                    of this is that at least I will know that this is out there floating
                    in the <span>interwebs</span>.
                </p>
            </aside>
            <div className="content">
                {posts.map(post => (
                    <Link href={`/blog/${post.slug}`} key={post.slug}>
                        <div>
                            <h2>{post.title}</h2>
                            <p>{post.info}</p>
                            <small>{post.date}</small>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}
