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
                    I only kept the necessary UI and text components. Lately I have been trying to adapt to this new line of thinking that less is more. I like this new
                    system, it feels really nice to keep things <span>simple</span> and{' '}
                    <span>neat</span>.
                </p>
            </aside>
            <div className="content">
                <Background />
                <Font />
                <Logo />
                <Spacing />
                <Text />
                <Link />
                <Icons />
            </div>
        </main>
    );
}

function Background() {
    return (
        <div>
            <h2>Background</h2>
            <p>
                Out of all the themes and ideas I conjured up for this website, a{' '}
                <span>graph paper themed</span> website is what locked me in. It is kind
                of funny because while I was writing all the potential ideas I could use
                down onto my graph papered notebook, it turns out the idea I would end up
                going with was already staring me right in the face.
            </p>
        </div>
    );
}

function Font() {
    return (
        <div>
            <h2>Font</h2>
            <p>
                Now with the background chosen I needed to pair it with the perfect font.
                What I went with was something that was not too sharp because it would
                look very stoic and something not to roundish and playful that would come
                off as immature. <span>Commit Mono</span> was exactly what I was looking
                for and the biggest plus was that it was free, not like those other fonts
                that charge $900 per font character.
            </p>
            <p>
                If you also want to utilize this font you can find it{' '}
                <a href="https://commitmono.com/" target="_blank">
                    here
                </a>
                . The website Eigil Nikolajsen made for this font is absolutely
                beautifully simple and super fun to interact with.
            </p>
        </div>
    );
}

function Logo() {
    return (
        <div>
            <h2>Logo</h2>
            <p>face logo related</p>
        </div>
    );
}

function Spacing() {
    return (
        <div>
            <h2>Spacing</h2>
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
            <h2>Text</h2>
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
            <h2>Links</h2>
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
            <p>
                You are probably wondering where are the buttons. The thing is, there are{' '}
                <span>no buttons</span> because buttons don't exist on graph paper, but
                links do. I don't make the rules.
            </p>
        </div>
    );
}

function Icons() {
    return (
        <div>
            <h2>Icons</h2>
            <p>
                Icons were rather straight forward, I kept them within the size of a
                single grid cell. I utilized this{' '}
                <a href="https://react-icons.github.io/react-icons/" target="_blank">
                    website
                </a>{' '}
                for icons, using only the <span>Lucide</span> icons for consistency.
            </p>
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
