import {
    CopyIcon,
    ExternalLinkIcon,
    LeftArrowIcon,
    RightArrowIcon,
    XIcon,
} from '../components/Icons';

export default function DesignSystem() {
    return (
        <main id="design-page">
            <h2>
                <span>//</span>Design System
            </h2>
            <p id="design-system-description">
                I thought it would be cool to show the bare bones of my portfolio website.
                My main goal for this project was to keep things very basic. I decided not
                to go overboard in the UI department because it is so easy to do so now a
                days. I only kept the necessary UI and text components. I like this new
                system. It feels really nice to keep things <span>simple</span> and{' '}
                <span>neat</span>.
            </p>
            <p></p>
            <Text />
            <Spacing />
            <Icons />
            <Link />
        </main>
    );
}

function Text() {
    return (
        <div>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <p>This is a sentence inside a paragraph tag</p>
            <p>
                This is a <span>span</span> word in a sentence
            </p>
            <p>
                This is a <i>italic</i> word in a sentence
            </p>
            <p>
                This is a <strong>bold</strong> word in a sentence
            </p>
            <p>
                This is a{' '}
                <i>
                    <strong>bold italic</strong>
                </i>{' '}
                word in a sentence
            </p>
        </div>
    );
}

function Spacing() {
    return (
        <div>
            <h1>Spacing Increments</h1>
            <div className="spacing-xs" />
            <div className="spacing-sm" />
            <div className="spacing-md" />
            <div className="spacing-lg" />
            <div className="spacing-xl" />
        </div>
    );
}

function Link() {
    return (
        <div>
            <h1>Links</h1>
            <a href="" className="standalone-link">
                Standalone Link
                <ExternalLinkIcon />
            </a>
            <p>
                This is a <a href="">link</a> in a sentence
            </p>
        </div>
    );
}

function Icons() {
    return (
        <div>
            <h1>Icons</h1>
            <CopyIcon />
            <ExternalLinkIcon />
            <LeftArrowIcon />
            <RightArrowIcon />
            <XIcon />
        </div>
    );
}
