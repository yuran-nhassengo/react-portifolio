import React, { useEffect, useState } from 'react';

import {Project} from './project'



import Project1 from '../../assets/projects/p1.webp'; 
import Project2 from '../../assets/projects/p2.webp';
import Project3 from '../../assets/projects/p3.webp';
import Project4 from '../../assets/projects/p4.webp';
import Project5 from '../../assets/projects/p5.webp';
import Project6 from '../../assets/projects/p6.webp';

const projectImages = [
    Project1,
    Project2,
    Project3,
    Project4,
    Project5,
    Project6,
];

const getRandomImage = () => {
    const index = Math.floor(Math.random() * projectImages.length);
    return projectImages[index];
};

const Projects = () => {
    const [item, setItem] = useState({ name: 'all' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        const fetchGitHubProjects = async () => {
            try {
                
                const response = await fetch('https://api.github.com/users/yuran-nhassengo/repos?per_page=20&sort=updated&direction=desc');
                const data = await response.json();

                const formattedProjects = data.map(repo => ({
                    id: repo.id.toString(),
                    image: getRandomImage(), 
                    name: repo.name,
                    category: repo.language || 'N/A',
                    githubLink: repo.html_url,
                }));

                if (item.name === 'all') {
                    setProjects(formattedProjects);
                } else {
                    const filteredProjects = formattedProjects.filter(project => project.category.toLowerCase() === item.name);
                    setProjects(filteredProjects);
                }
            } catch (error) {
                console.error('Error fetching GitHub projects:', error);
            }
        };

        fetchGitHubProjects();
    }, [item]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() });
        setActive(index);
    };

    const projectsNav = [
        { name: 'all' },
        { name: 'frontend' },
        { name: 'backend' },
        { name: 'figma' },
    ];

    return (
        <div>
            <nav className="mb-12 max-w-xl mx-auto">
                <ul className="flex flex-col md:flex-row justify-evenly items-center text-blue-400 font-semibold text-2xl">
                    {projectsNav.map((navItem, index) => (
                        <li
                            onClick={(e) => handleClick(e, index)}
                            className={`${active === index ? 'active' : ''} cursor-pointer capitalize m-4`}
                            key={index}
                        >
                            {navItem.name}
                        </li>
                    ))}
                </ul>
            </nav>
            <section className="grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8">
                {projects.map((project) => (
                    <Project item={project} key={project.id} />
                ))}
            </section>
        </div>
    );
};

export default Projects;
