import React from 'react';
import MySkills from '../components/MySkills';
import MyEducation from '../components/MyEducation';

const SkillsAndEdu = () => {
    return (
        <div>
            <div className="divider divider-error after:bg-primary before:bg-primary my-16"> <h2 className="text-2xl md:text-3xl lg:text-5xl text-primary text-center font-semibold">Skills & Education</h2></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                <MySkills></MySkills>
                <MyEducation></MyEducation>
            </div>

        </div>
    );
};

export default SkillsAndEdu;