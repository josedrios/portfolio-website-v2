'use client';
import { CopyIcon } from '@/components/Icons';

// Yes I made a whole file and component just to copy an email to clipboard
// I am new to this Next.js thing

export default function CopyEmail() {
    return (
        <a
            className="standalone-link"
            onClick={() => navigator.clipboard.writeText('josederios@outlook.com')}
        >
            josederios@outlook.com <CopyIcon />
        </a>
    );
}
