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
                        I was going through a crisis, deciding whether to call this page <span>Home</span> or <span>About</span>
                    </p>
                    <a href="">
                        LinkedIn <ExternalLinkIcon />
                    </a>
                    <a href="">
                        Github <ExternalLinkIcon />
                    </a>
                    <a href="">
                        Resume <ExternalLinkIcon />
                    </a>
                    <a href="">
                        josederios@outlook.com <CopyIcon />
                    </a>
                </div>
            </aside>
            <div className="content">About Page</div>
        </main>
    );
}