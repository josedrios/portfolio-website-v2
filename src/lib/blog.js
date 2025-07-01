'use server';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import { visit } from 'unist-util-visit';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import { redirect } from 'next/navigation';

const blogDir = path.join(process.cwd(), '/src/content/blog');

export async function generateStaticParams() {
    const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.md'));
    return files.map(file => ({
        slug: file.replace('.md', ''),
    }));
}

export async function getPaginatedPosts(page = 1, perPage = 1) {
    const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.md'));

    const posts = files.map(filename => {
        const filePath = path.join(blogDir, filename);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContent);
        return {
            slug: filename.replace('.md', ''),
            ...data,
        };
    });

    const sorted = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    const start = (page - 1) * perPage;
    const paginated = sorted.slice(start, start + perPage);

    return {
        posts: paginated,
        total: posts.length,
        totalPages: Math.ceil(posts.length / perPage),
    };
}

export async function getPostBySlug(slug) {
    try {
        const filePath = path.join(blogDir, `${slug}.md`);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContent);
        const wordCount = content.trim().split(/\s+/).length;
        const readTime = Math.ceil(wordCount / 200);
        const processedContent = await remark()
            .use(remarkParse)
            .use(remarkRehype)
            .use(rehypeSlug)
            .use(rehypeStringify)
            .process(content);
        const contentHtml = processedContent.toString();

        // Get headings of the blog
        const tree = await remark().parse(content);
        const headings = [];

        visit(tree, 'heading', node => {
            const getText = node => {
                if (node.type === 'text') return node.value;
                if (node.children) return node.children.map(getText).join('');
                return '';
            };
            const text = getText(node);
            if (node.depth === 2 || node.depth === 3) {
                headings.push({ level: node.depth, title: text });
            }
        });

        console.log(headings);

        return {
            slug,
            contentHtml,
            ...data,
            headings,
            readTime,
        };
    } catch (err) {
        redirect('/could-not-find-blog-post');
    }
}
