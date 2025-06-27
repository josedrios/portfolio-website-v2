import { getPostBySlug, getAllPosts } from '@/lib/blog';

// On build, all slugs (or posts in this case) will be served as static files at runtime
// My interpretation of the flow of these slugs:
// get all slugs -> next.js pre-renders the slug page on build -> saves as static file
// for faster loads on runtime
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }) {
  const post = await getPostBySlug(params.slug);

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
}