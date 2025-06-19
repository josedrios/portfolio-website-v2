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
    const [chosenOverlays, setChosenOverlays] = useState([]);

    // const randomOverlay = () => {
    //     if (chosenOverlays.length === imageData.length) {
    //         console.log("All overlays have been utilized")
    //     }

    //     let randomIndex;
    //     // if the random index we are getting has already been used
    //     let takenIndex = true;

    //     while (takenIndex) {
    //         randomIndex = Math.floor(Math.random() * imageData.length);
    //         takenIndex = chosenOverlays.includes(randomIndex)
    //     }

    //     return randomIndex;
    // };

    // const handleOverlayChange = () => {
    //     if(imageData.length === 0) {
    //         console.warn("No overlays found for website logo :(")
    //         setImageOverlay(null);
    //         return;
    //     }

    //     let usedIndexes = chosenOverlays;
        
    //     if(usedIndexes.length === imageData.length) {
    //         console.log("All overlays have been used. Resetting chosen overlay list");
    //         usedIndexes = []
    //     }

    //     let newOverlayIndex = randomOverlay(usedIndexes);

    //     setImageOverlay(imageData[newOverlayIndex]);

    //     setChosenOverlays([...usedIndexes, newOverlayIndex]);
    // }

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
                        // handleOverlayChange()
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
