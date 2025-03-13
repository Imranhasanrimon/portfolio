import { Link } from "react-router-dom"
const ProjectCard = ({ project }) => {

    return (
        <div className="bg-customFront  rounded-2xl  p-5">
            <img src={project.image} alt={project.name} className="w-full h-52" />
            <div className="pt-5">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{project.description}</p>
                <div className="flex justify-between items-center mt-4">
                    <a
                        href={project?.details?.liveLink}
                        target="_blank"
                        className="bg-primary hover:bg-opacity-90 transition-colors text-white cursor-pointer py-2 px-4 rounded-md font-medium"
                    >
                        Live
                    </a>
                    <a
                        href={project?.details?.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-gray-500 rounded-md hover:bg-customBack transition-colors cursor-pointer"
                    >
                        GitHub
                    </a>
                    <Link
                        to={`/${project?.name}`}
                        className="px-4 py-2 border border-gray-500 rounded-md hover:bg-customBack transition-colors cursor-pointer"
                    >
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;