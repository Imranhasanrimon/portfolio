import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
    const { projectName } = useParams();
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('myProjects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);

    const thisProject = projects.find(project => project.name === projectName);

    return (
        <div className="w-11/12 mx-auto">
            <div className="max-w-3xl mx-auto p-6 bg-customFront rounded-lg">
                <img src={thisProject?.image} alt={thisProject?.name} className="w-full h-64 object-cover rounded-md" />
                <h2 className="text-2xl font-bold mt-4">{thisProject?.name}</h2>
                <p className=" mt-2">{thisProject?.description}</p>

                <div className="mt-4">
                    <h3 className="text-lg font-semibold">Tech Stack:</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {thisProject?.details?.technologies.map((tech, index) => (
                            <span key={index} className="px-3 py-1 bg-customBack  rounded-md text-sm">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-6 flex gap-4">
                    <a
                        href={thisProject?.details?.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary hover:bg-opacity-90 transition-colors text-white cursor-pointer py-2 px-4 rounded-md font-medium"
                    >
                        Live Demo
                    </a>
                    <a
                        href={thisProject?.details?.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-gray-400  rounded-lg hover:bg-gray-200 transition"
                    >
                        GitHub Repo
                    </a>
                </div>

                <div className="mt-6">
                    <h3 className="text-lg font-semibold">Challenges Faced:</h3>
                    <p className=" mt-2">{thisProject?.details?.challenges[0]}</p>
                </div>

                <div className="mt-6">
                    <h3 className="text-lg font-semibold">Future Improvements:</h3>
                    <p className=" mt-2">{thisProject?.details?.futurePlans[0]}</p>
                </div>
            </div>

        </div>
    );
};

export default ProjectDetails;