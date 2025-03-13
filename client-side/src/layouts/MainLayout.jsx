// import { Outlet, } from "react-router-dom";

import Banner from "../sections/Banner";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import Navbar from "../components/Navbar";
import SkillsAndEdu from "../sections/SkillsAndEdu";
import AboutMe from "../sections/AboutMe";
import MyProjects from "../sections/MyProjects";


const MainLayout = () => {
    return (
        <div className="bg-customBack text-gray-300">
            <Navbar />
            <div className=" max-w-screen-lg w-11/12 mx-auto">
                <Banner></Banner>
                <AboutMe></AboutMe>
                <SkillsAndEdu></SkillsAndEdu>
                <MyProjects></MyProjects>
                <Contact></Contact>
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
