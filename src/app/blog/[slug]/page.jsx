import { getPostBySlug, getAllPosts } from '@/lib/blog';
import ScrollToHeader from '@/util/scrollToHeader';
import ShareLink from '../../../components/ShareLink';
import { useShortDate } from '@/util/dateUtil';
import CopyCode from '@/util/CopyCode';

// On build, all slugs (or posts in this case) will be served as static files at runtime
// My interpretation of the flow of these slugs:
// get all slugs -> next.js pre-renders the slug page on build -> saves as static file
// for faster loads on runtime
export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map(post => ({ slug: post.slug }));
}

export default async function BlogPost({ params }) {
    const resolvedParams = await params;
    const post = await getPostBySlug(resolvedParams.slug);

    return (
        <main id="blog-post-page">
            <article className="content">
                <h1 className='blog-title'>{post.title}</h1>
                <p className="blog-info">
                    By Jose D. Rios ({useShortDate(post.date)}){' '}
                    <span>{post.readTime} min read</span>
                </p>
                <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
                <CopyCode />
            </article>
            <aside className="toc">
                <h2>
                    <span>|</span>Table of Contents
                </h2>
                <div className="toc-links-container">
                    {post.headings.map(heading => (
                        <ScrollToHeader heading={heading} key={heading.title} />
                    ))}
                </div>
                <ShareLink />
            </aside>
        </main>
    );
}
