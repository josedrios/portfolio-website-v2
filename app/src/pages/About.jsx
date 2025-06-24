import { CopyIcon, ExternalLinkIcon } from '../components/Icons';

export default function About() {
    return (
        <main id="home-page">
            <aside>
                <div id="home-description">
                    <h2>
                        <span>|</span>About
                    </h2>
                    <p>
                        Welcome to my website. This is essentially my internet{' '}
                        <span>home</span>, so my casa is su casa. Let this place serve as
                        a way to tell you who I am, what I've created and what I think
                        about.
                    </p>
                    <a href="" className="standalone-link">
                        LinkedIn <ExternalLinkIcon />
                    </a>
                    <a href="" className="standalone-link">
                        Github <ExternalLinkIcon />
                    </a>
                    <a href="" className="standalone-link">
                        Resume <ExternalLinkIcon />
                    </a>
                    <a href="" className="standalone-link">
                        josederios@outlook.com <CopyIcon />
                    </a>
                </div>
            </aside>
            <div className="content">
                <p>ABOUT PAGE TEXT</p>
            </div>
        </main>
    );
}
