import MySkills from "./MySkills";

const AboutMe = () => {
    return (
        <div>
            <h2 className="text-2xl md:text-3xl lg:text-5xl text-primary text-center font-semibold">About Me</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi suscipit quis eaque fuga illum quaerat non recusandae soluta at obcaecati nulla quidem ipsum, maxime nesciunt excepturi molestiae sint praesentium quas.</p>

            <div className="divider divider-error">Error</div>
            <MySkills></MySkills>

        </div>
    );
};

export default AboutMe;