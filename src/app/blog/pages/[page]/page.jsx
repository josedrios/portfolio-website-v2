import { getPaginatedPosts } from '@/lib/blog';
import BlogList from '@/components/BlogList';
import BlogAside from '@/components/BlogAside'

export default async function BlogPage({ params }) {
    const page = parseInt(params.page, 10);
    const { posts, totalPages } = await getPaginatedPosts(page, 5);

    return (
        <main id="blog-page">
            <BlogAside />
            <div className="content">
                <BlogList posts={posts} currentPage={page} totalPages={totalPages} />
            </div>
        </main>
    );
}