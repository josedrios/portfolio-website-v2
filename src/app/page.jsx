import { ExternalLinkIcon } from '../components/Icons';
import CopyEmail from '../components/CopyEmail';

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
                        <span>home</span>, so my casa is su casa. Let this website serve
                        as a way to tell you who I am, what I've created and what I think
                        about.
                    </p>
                    <a
                        href="https://www.linkedin.com/in/josederios/"
                        target="_blank"
                        className="standalone-link"
                        rel="noopener noreferrer"
                    >
                        LinkedIn <ExternalLinkIcon />
                    </a>
                    <a
                        href="https://github.com/josedrios"
                        target="_blank"
                        className="standalone-link"
                        rel="noopener noreferrer"
                    >
                        Github <ExternalLinkIcon />
                    </a>
                    <a href="/Resume.pdf" className="standalone-link" download>
                        Resume <ExternalLinkIcon />
                    </a>
                    <CopyEmail />
                </div>
            </aside>
            <div className="content">
                <p>My name is Jose De Jesus Rios and I welcome you.</p>
                <p>
                    I am a <span>web developer</span> who enjoys building robust, useful
                    software with eye-catching user interfaces. I am constantly working on
                    my skills to be an individual who designs creatively while never
                    sacrificing the <span>performance</span> and{' '}
                    <span>interactivity</span> of the project.
                </p>
                <p>
                    I recently graduated from San Francisco State University with a
                    bachelor's degree in <span>Computer Science</span>. With the skills
                    and projects I have under my belt, I am ready to show my capabilities
                    to the world.
                </p>
                <p>
                    On my free time I am either resistance training, reading, gaming, or
                    committing acts of tomfoolery with my friends.
                </p>
                <h2>How did I learn to code?</h2>
                <p>
                    I got into programming after my experience with the{' '}
                    <span>Robotics Club</span> in my high school then proceeded to start
                    computer science in <span>college</span>. Through personal projects,
                    and projects assigned to me from courses, I have honed my skills in
                    full-stack development.
                </p>
                <h2>What do I love most about programming?</h2>
                <p>
                    I love the concept that there is no set limit on what coding can
                    create, who it can help and how beautiful the product can look.
                    Programming is another <span>medium of creative expression</span> for
                    me, open to endless possibilities. Not only are the creations of
                    programming amazing but so is the process. Watching yourself start as
                    a novice with a certain skill and be able to visibly see your{' '}
                    <span>improvement</span> is such a beautiful thing.
                </p>
            </div>
        </main>
    );
}
