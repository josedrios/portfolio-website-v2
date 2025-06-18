import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <LeftHeader />
            <Navigation />
        </header>
    );
}

function LeftHeader() {
    return (
        <div className="left-header">
            <div>
                <h1>
                    josedrios<span>.</span>
                </h1>
                <p className="small-text" id="face-click-prompt">
                    <i>
                        <strong>don't click my face...</strong>
                    </i>
                </p>
            </div>
            <div id='icon-container'>
                <img src="/images/base.png" alt="" className="doodle-icon" />
                <button id='icon-change-hitbox' onClick={() => console.log('clicked')}></button>
            </div>
        </div>
    );
}

function Navigation() {
    const location = useLocation();

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
