import { getAllPosts } from '@/lib/blog';
import { useMediumDate } from '@/util/dateUtil';
import Link from 'next/link';

export default async function Blog() {
    const posts = await getAllPosts();

    return (
        <main id="blog-page">
            <aside>
                <h2>
                    <span>|</span>Blog
                </h2>
                <p>
                    I have social media but I don't use it. This will be my form of social
                    media. I will post whatever, whenever. It can be a{' '}
                    <span>random thought</span>, regurgitating something I am{' '}
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
                    <Link
                        href={`/blog/${post.slug}`}
                        className="blog-link"
                        key={post.title}
                    >
                        <div className="card">
                            <h2>
                                <span>{post.title}</span>
                            </h2>
                            <p className="blog-info">{post.info}</p>
                            <p className="blog-date">{useMediumDate(post.date)}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}