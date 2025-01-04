import MyEducation from "./MyEducation";
import MySkills from "./MySkills";
import MyStory from "./MyStory";

const AboutMe = () => {
    return (
        <div>
            <MyStory></MyStory>
            <div className="divider divider-error">Error</div>
            <MySkills></MySkills>
            <MyEducation></MyEducation>

        </div>
    );
};

export default AboutMe;