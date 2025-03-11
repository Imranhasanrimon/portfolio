import { PiGithubLogoFill } from "react-icons/pi";
import { VscGithub } from "react-icons/vsc";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { BsFacebook } from "react-icons/bs";
import bannerImg2 from "../assets/banner.jpg"
const Banner = () => {

    const handleScrollToContact = () => {
        const contactSection = document.getElementById("contact");
        contactSection.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="flex flex-col md:flex-row justify-between items-center py-8 md:py-12 gap-4">
            <div className="">
                <p className="text-gray-300 text-sm md:text-base mb-3">HELLO THERE, WELCOME TO MY SITE</p>
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">I'm <span className="text-primary">Imran Hasan <br />
                </span> <span className="text-2xl md:text-3xl lg:text-5xl"> A
                    Frontend
                    Developer</span></h1>
                <p className="text-gray-300 text-sm md:text-base mt-3 lg:w-1/2">I design and develop responsive websites,
                    ensuring
                    optimal
                    performance,
                    usability, and cross-browser
                    compatibility for a seamless user experience.</p>

                <div className="flex gap-4 text-primary mt-4">

                    <button
                        onClick={() => window.open('https://github.com/Imranhasanrimon', '_blank')}
                        className="bg-customFront hover:bg-primary hover:bg-opacity-10 flex justify-center items-center h-10 w-10 rounded-lg">
                        <VscGithub />
                    </button>
                    <button
                        onClick={() => window.open('https://www.linkedin.com/in/imran-hasan-537b1a22a/', '_blank')}
                        className="bg-customFront hover:bg-primary hover:bg-opacity-10 flex justify-center items-center h-10 w-10 rounded-lg text-2xl">
                        <TiSocialLinkedinCircular />
                    </button>
                    <button
                        onClick={() => window.open('https://www.facebook.com/profile.php?id=100010204906646', '_blank')}
                        className="bg-customFront hover:bg-primary hover:bg-opacity-10 flex justify-center items-center h-10 w-10 rounded-lg ">
                        <BsFacebook />
                    </button>

                </div>

                <button
                    onClick={handleScrollToContact}
                    className="bg-primary hover:bg-opacity-90 transition-colors text-white py-2 mt-4 px-6 rounded-md font-medium">Hire Me
                </button>

            </div>

            <div className="divider md:divider-horizontal ">
                <div className="w-12 md:w-2 h-2 md:h-12 border border-primary rounded-full"></div>
            </div>
            {/* <!-- image  --> */}
            <div className="bg-customFront rounded-2xl p-5  lg:ml-20 xl:ml-60"
            >
                <img className=" max-w-56 rounded-2xl" src={bannerImg2} alt=""
                />
            </div>
        </div>
    );
};

export default Banner;