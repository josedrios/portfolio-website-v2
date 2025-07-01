'use client'
import { LinkIcon } from '@/components/Icons';

export default function ShareLink() {
    return (
        <a
            className="share-post-link"
            onClick={() => navigator.clipboard.writeText(window.location.href)}
        >
            <LinkIcon />Share
        </a>
    );
}
