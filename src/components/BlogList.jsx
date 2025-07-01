'use client';
import Link from 'next/link';
import { getMedianDate } from '@/util/dateUtil';

export default function BlogList({ posts, currentPage, totalPages }) {
    return (
        <div>
            {posts.map(post => (
                <div key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className="blog-link">
                        <div className="card">
                            <h2><span>{post.title}</span></h2>
                            <p className="blog-card-info">{post.info}</p>
                            <p className="blog-card-date">
                                {post.date ? getMedianDate(post.date) : 'No date'}
                            </p>
                        </div>
                    </Link>
                </div>
            ))}

            <div className="pagination">
                {currentPage > 1 && (
                    <Link href={currentPage === 2 ? '/blog' : `/blog/pages/${currentPage - 1}`}>
                        Prev
                    </Link>
                )}
                <span>Page {currentPage} of {totalPages}</span>
                {currentPage < totalPages && (
                    <Link href={`/blog/pages/${currentPage + 1}`}>
                        Next
                    </Link>
                )}
            </div>
        </div>
    );
}