import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import imageData from '../util/IconChange';

export default function Header() {
    return (
        <header>
            <LeftHeader />
            <Navigation />
        </header>
    );
}

function LeftHeader() {
    const [imageOverlay, setImageOverlay] = useState(null);
    const [shuffledOverlays, setShuffledOverlays] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    // on load, shuffle the order of the overlays
    useEffect(() => {
        reshuffleOverlays();
    }, []);

    const reshuffleOverlays = () => {
        const shuffled = [...imageData].sort(() => Math.random() - 0.5);
        setShuffledOverlays(shuffled);
        setCurrentIndex(0);
    };

    const handleClick = () => {
        if (shuffledOverlays.length === 0) return;

        const nextOverlay = shuffledOverlays[currentIndex];
        setImageOverlay(nextOverlay);

        if (currentIndex + 1 >= shuffledOverlays.length) {
            reshuffleOverlays();
        } else {
            setCurrentIndex(prev => prev + 1);
        }
    };

    return (
        <div id="left-header">
            <div>
                <h1>
                    josedrios<span>.</span>
                </h1>
                <p className="small-text" id="face-click-prompt">
                    <i>
                        <strong>don't spam click my face...</strong>
                    </i>
                </p>
                {imageOverlay !== null ? (
                    <p className='small-text' id="overlay-phrase">└── {' '}{imageOverlay.phrase}</p>
                ) : (
                    ''
                )}
            </div>
            <div id="icon-container">
                <img src="/images/base.png" alt="" className="doodle-icon" />
                {imageOverlay !== null ? (
                    <img src={imageOverlay.path} alt="" className="doodle-icon-overlay" />
                ) : (
                    ''
                )}
                <button
                    id="icon-change-hitbox"
                    onClick={() => {
                        handleClick();
                    }}
                />
            </div>
        </div>
    );
}

function Navigation() {
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'Design', path: '/design' },
        { name: 'Blog', path: '/blog' },
    ];

    return (
        <nav>
            {navItems.map(item => (
                <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) => `nav-button ${isActive ? 'active' : ''}`}
                >
                    <span className="asterisk">*</span>
                    {item.name}
                </NavLink>
            ))}
        </nav>
    );
}
