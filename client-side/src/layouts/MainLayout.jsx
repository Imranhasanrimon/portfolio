// import { Outlet, } from "react-router-dom";

import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const MainLayout = () => {
    return (
        <div className="bg-customBack text-gray-300">
            <Navbar />
            <div className=" max-w-screen-xl w-11/12 mx-auto">
                <Banner></Banner>
                <AboutMe></AboutMe>
                <Contact></Contact>
                {/* <Outlet /> */}
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
