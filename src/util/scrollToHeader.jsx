'use client';

export default function ScrollToHeader({ heading }) {
    const scrollToId = header => {
        const id = header
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/^-+|-+$/g, '');
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div
            className={`toc-links ${heading.level === 3 ? 'indented' : ''}`}
        >
            <p>
                <span>*</span>
            </p>
            <div className="toc-links-body">
                <a
                    onClick={() => scrollToId(heading.title)}
                >
                    {heading.title}
                </a>
            </div>
        </div>
    );
}
