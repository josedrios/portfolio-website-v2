import BlogAside from '@/components/BlogAside';
import BlogList from '@/components/BlogList';
import { getPaginatedPosts } from '@/lib/blog';

export default async function Blog() {
    const page = 1;
    const { posts, totalPages } = await getPaginatedPosts(page, 5);

    return (
        <main id="blog-page">
            <BlogAside />
            <div className="content">
                <BlogList posts={posts} currentPage={page} totalPages={totalPages} />{' '}
            </div>
        </main>
    );
}
