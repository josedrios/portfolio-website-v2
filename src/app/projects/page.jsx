import projectInfo from '@/content/ProjectInfo.json';
import { ExternalLinkIcon } from '@/components/Icons';

export default function Projects() {
    return (
        <main id="projects-page">
            <aside>
                <div>
                    <h2>
                        <span>|</span>Projects
                    </h2>
                    <p>
                        This page holds all the projects I've worked on or am currently
                        working on. I am obsessed with React, Java and many more
                        languages/frameworks but I am even more obsessed with{' '}
                        <span>learning</span> and <span>improving</span> as a programmer.
                    </p>
                </div>
            </aside>
            <div className="content">
                {projectInfo.map((project) => (
                    <div className="project-card" key={project.title}>
                        <h2>
                            <a href={project.link} target='_blank' rel="noopener noreferrer">{project.title}</a>
                            <ExternalLinkIcon />
                        </h2>
                        <p>
                            <span>Skills: </span>
                            {project.skills}
                        </p>
                        <h3>
                            <span>Date: </span>
                            {project.date}
                        </h3>
                        <p>{project.info}</p>
                    </div>
                ))}
                <p className="small-text" id="projects-footer">
                    <i>
                        The rest of my projects are on my{' '}
                        <a href="https://github.com/josedrios" target="_blank" rel="noopener noreferrer">
                            github
                        </a>
                    </i>
                </p>
            </div>
        </main>
    );
}
