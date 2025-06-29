'use client';
import { useEffect } from 'react';

export default function CopyCode() {
    useEffect(() => {
        document.querySelectorAll('pre').forEach(pre => {
            pre.addEventListener('click', () => {
                const el = pre.querySelector('code');
                if (!el) return;

                const content = el.innerText;

                // i was stuck on how to be able to copy to clipboard so i used AI

                // Check for clipboard API
                if (navigator.clipboard && window.isSecureContext) {
                    navigator.clipboard.writeText(content).then(() => {
                        pre.setAttribute('data-copied', 'true');
                        setTimeout(() => pre.removeAttribute('data-copied'), 1000);
                    });
                } else {
                    // Fallback for Safari/iOS/etc.
                    const textarea = document.createElement('textarea');
                    textarea.value = content;
                    textarea.style.position = 'fixed';
                    textarea.style.opacity = '0';
                    document.body.appendChild(textarea);
                    textarea.focus();
                    textarea.select();
                    try {
                        document.execCommand('copy');
                        pre.setAttribute('data-copied', 'true');
                        setTimeout(() => pre.removeAttribute('data-copied'), 1000);
                    } catch (err) {
                        console.error('Copy failed', err);
                    }
                    document.body.removeChild(textarea);
                }
            });
        });
    }, []);

    return null;
}
