'use client';
import { useRef, useEffect, useState } from 'react';

export default function PinnedImage({ imagePath }) {
    const imgRef = useRef(null);
    const [snappedHeight, setSnappedHeight] = useState('auto');

    useEffect(() => {
        const img = imgRef.current;
        if (!img) return;

        const snapHeight = () => {
            const width = img.clientWidth;
            const ratio = img.naturalWidth / img.naturalHeight;
            const rawHeight = width / ratio;
            const snapped = Math.round(rawHeight / 20) * 20;
            setSnappedHeight(`${snapped}px`);
        };

        if (img.complete) snapHeight();
        else img.addEventListener('load', snapHeight);

        window.addEventListener('resize', snapHeight);
        return () => {
            window.removeEventListener('resize', snapHeight);
            img.removeEventListener('load', snapHeight);
        };
    }, []);

    return (
        <div className="pinned-image-container" style={{ height: snappedHeight }}>
            <img src={imagePath} ref={imgRef} alt="" className="raw-image" />
            <img src="/images/pin.webp" alt="" className="pin-image" />
        </div>
    );
}
