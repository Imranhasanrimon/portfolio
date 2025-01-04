import { useEffect, useState } from "react";

const MySkills = () => {
    const [mySkills, setMySkills] = useState([]);
    useEffect(() => {
        fetch('/mySkills.json')
            .then(res => res.json())
            .then(data => setMySkills(data))
    }, []);
    return (
        <div className="max-w-screen-lg mx-auto">
            <h3>My Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
                {
                    mySkills.map((skill, idx) => <div key={idx}
                        className="flex flex-col justify-center items-center bg-customFront rounded-lg p-4"
                    >
                        <img src={skill.logo} alt="" />
                        <h5>{skill.name}</h5>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MySkills;