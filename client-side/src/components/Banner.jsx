import bannerImg from "../assets/basundhara.jpg"
import bannerImg2 from "../assets/banner.jpg"
const Banner = () => {
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
                <button className="bg-primary hover:bg-opacity-90 transition-colors text-white py-2 mt-4 px-6 rounded-md font-medium">Hire Me</button>
            </div>
            <div className="divider md:divider-horizontal ">
                <div className="w-12 md:w-2 h-2 md:h-12 border rounded-full"></div>
            </div>
            {/* <!-- image  --> */}
            <div className="bg-customFront p-7 md:mr-14"
                style={{
                    clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                }}>
                <img className=" max-w-56 rounded-2xl" src={bannerImg2} alt=""
                    style={{
                        clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                    }}
                />
            </div>
        </div>
    );
};

export default Banner;