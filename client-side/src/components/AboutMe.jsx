import MyEducation from "./MyEducation";
import MySkills from "./MySkills";
import MyStory from "./MyStory";

const AboutMe = () => {
    return (
        <div>
            <MyStory></MyStory>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <MySkills></MySkills>
                <MyEducation></MyEducation>
            </div>

        </div>
    );
};

export default AboutMe;