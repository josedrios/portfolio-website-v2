import {
    CopyIcon,
    ExternalLinkIcon,
    LeftArrowIcon,
    RightArrowIcon,
    XIcon,
} from '../components/Icons';

export default function DesignSystem() {
    return (
        <main id='design-page'>
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
            <p>
                This is an example sentence to show how a p tag would look. Im going to
                write a little more gibberish just to show its text wrapping capabilities
                and how it would look like in the UI.
            </p>
            <p>
                This is a <span>span</span> word in a sentence
            </p>
            <p>
                This is a <strong>bold</strong> word in a sentence
            </p>
            <p>
                This is a <i>italic</i> word in a sentence
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
