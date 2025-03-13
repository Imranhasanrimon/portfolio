import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';

const MyProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('myProjects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);

    return (
        <div className='pb-16'>

            <div className="divider divider-error after:bg-primary before:bg-primary pt-8 pb-8">
                <h2 className="text-2xl md:text-3xl lg:text-5xl text-primary text-center font-semibold">MyProjects</h2>
            </div>

            <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                {
                    projects.map((project, i) => <ProjectCard key={i} project={project} ></ProjectCard>)
                }
            </div>

        </div>
    );
};

export default MyProjects;