
const ProjectCard = ({ project }) => {
    return (
        <div className="bg-customFront  rounded-2xl border border-gray-500 p-5">
            <img src={project.image} alt={project.name} className="w-full h-52" />
            <div className="pt-5">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{project.description}</p>
                <div className="flex justify-between items-center mt-4">
                    <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-500  rounded-lg hover:bg-blue-600 transition"
                    >
                        Live
                    </a>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-gray-500 rounded-lg hover:bg-gray-200 transition"
                    >
                        GitHub
                    </a>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-gray-500 rounded-lg hover:bg-gray-200 transition"
                    >
                        Details
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;