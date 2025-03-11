import { useEffect, useState } from "react";

const MySkills = () => {
    const [mySkills, setMySkills] = useState([]);
    useEffect(() => {
        fetch('/mySkills.json')
            .then(res => res.json())
            .then(data => setMySkills(data))
    }, []);
    return (
        <div className="">
            <div className="grid grid-cols-3 gap-4 ">
                {
                    mySkills.map((skill, idx) => <div key={idx}
                        className="flex flex-col justify-center items-center bg-customFront rounded-lg p-4 hover:bg-opacity-50"
                    >
                        <img src={skill.logo} className="w-12" alt="" />
                        <h5>{skill.name}</h5>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MySkills;