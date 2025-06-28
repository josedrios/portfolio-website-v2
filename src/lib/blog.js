'use server'

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import { visit } from 'unist-util-visit';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';

const blogDir = path.join(process.cwd(), '/src/content/blog');

export async function getAllPosts() {
    const files = fs.readdirSync(blogDir);
    return files.map(filename => {
        const filePath = path.join(blogDir, filename);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContent);
        return {
            slug: filename.replace('.md', ''),
            ...data,
        };
    });
}

export async function getPostBySlug(slug) {
    const filePath = path.join(blogDir, `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
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
    };
}
