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
            <aside>
                <h2>
                    <span>|</span>Design System
                </h2>
                <p>
                    I thought it would be cool to show the bare bones of my website. My
                    main goal for this project was to keep things very basic.
                </p>
                <p>
                    I decided not to go overboard in the UI department because it is so
                    easy to do so now a days. I only kept the necessary UI and text
                    components. I like this new system. It feels really nice to keep
                    things <span>simple</span> and <span>neat</span>.
                </p>
            </aside>
            <div className="content">
                <p>
                    <i>talk about the background here</i>
                </p>
                <p>
                    <i>talk about having no buttons</i>
                </p>
                <Spacing />
                <Text />
                <Link />
                <Icons />
                <i>
                    {' '}
                    <p>Talk about the face logo and the overlays and Commit Mono</p>
                </i>
            </div>
        </main>
    );
}

function Spacing() {
    return (
        <div>
            <p>
                Spacing should be kept very uniform and predictable. The increments I
                chose were relative to a <span>single grid cell</span>. So the multiples
                of spacing are 1/4, 1/2, 1, 1.5, and 2.
            </p>
            <div id="spacing-design-section">
                <div className="spacing-xs" />
                <div className="spacing-sm" />
                <div className="spacing-md" />
                <div className="spacing-lg" />
                <div className="spacing-xl" />
            </div>
        </div>
    );
}

function Text() {
    return (
        <div>
            <p>
                I decided to keep the text variation/spread <span>very basic</span> so I
                don't get overwhelmed by the options I have. I feel that if you have to
                have 4 hierarchies of headers within your writing then its just getting
                too <span>complex</span> and <span>detailed</span>. For the purpose of
                this website I won't be doing anything near that, just{' '}
                <span>simple writings</span> and <span>blogs</span>.
            </p>
            <p>
                The text options consist of 3 header types, a regular paragraph tag, a
                span tag that highlights text within it, italic tag, bold tag, and a bold
                and italic tag. That's all a man needs to survive.{' '}
            </p>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <p>
                This is a <span>span</span> word in a paragraph tag
            </p>
            <p>
                This is a <i>italic</i> word in a paragraph tag
            </p>
            <p>
                This is a <strong>bold</strong> word in a paragraph tag
            </p>
            <p>
                This is a{' '}
                <i>
                    <strong>bold italic</strong>
                </i>{' '}
                word in a paragraph tag
            </p>
        </div>
    );
}

function Link() {
    return (
        <div id="link-design-section">
            <p>
                As for links there are two options. One that is <span>inline</span> and
                one that behaves like a <span>block</span>.
            </p>
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
            <p></p>
            <div id="icon-design-section">
                <CopyIcon />
                <ExternalLinkIcon />
                <LeftArrowIcon />
                <RightArrowIcon />
                <XIcon />
            </div>
        </div>
    );
}
