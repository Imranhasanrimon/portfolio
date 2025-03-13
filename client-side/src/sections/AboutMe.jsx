import { useState } from "react"
import cssPractice from "../assets/aboutMe/IMG_20240305_180921.jpg"
import backNight from "../assets/aboutMe/IMG_20240711_214429_752.jpg"
import frontNight from "../assets/aboutMe/IMG_20240711_214752_148.jpg"
import fullRoom from "../assets/aboutMe/IMG_20240912_175928.jpg"
import google from "../assets/aboutMe/msg5488259304-1087.jpg"
const AboutMe = () => {
    const [modlaImage, setModalImage] = useState()
    const openImage = (img) => {
        setModalImage(img)
        document.getElementById('my_modal_3').showModal()
    }
    return (
        <div>
            <dialog id="my_modal_3" className="modal ">
                <div className="modal-box bg-customFront">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                    <img src={modlaImage} alt="" />
                </div>
            </dialog>

            <div className="divider divider-error after:bg-primary before:bg-primary"> <h2 className="text-2xl md:text-3xl lg:text-5xl text-primary text-center font-semibold">About Me</h2></div>

            <div className="flex flex-col-reverse md:flex-row gap-5 mt-8">

                <div className="grid grid-cols-4 gap-3 md:w-1/2">

                    <div className="bg-customFront col-span-4 rounded-xl overflow-hidden">
                        <img onClick={() => openImage(google)} className="h-56 w-full object-cover" src={google} alt="" />
                        <p className="text-center py-2 text-primary">2022</p>
                    </div>

                    <div className="bg-customFront col-span-2 rounded-xl overflow-hidden">
                        <img onClick={() => openImage(cssPractice)} className="h-56 w-full object-cover" src={cssPractice} alt="" />
                        <p className="text-center py-2 text-primary">2023</p>
                    </div>

                    <div className="bg-customFront col-span-2 rounded-xl overflow-hidden">
                        <img onClick={() => openImage(frontNight)} className="h-56 w-full object-cover" src={frontNight} alt="" />
                        <p className="text-center py-2 text-primary">2024</p>
                    </div>

                </div>

                <div className="md:w-1/2">
                    <div className=" lg:text-lg leading-relaxed">
                        <p className="mb-4">
                            Hi there! I’m a <span className="font-semibold">React Developer</span> passionate about
                            crafting modern, responsive, and efficient web applications with{" "}
                            <span className="font-semibold">React</span> and{" "}
                            <span className="font-semibold">Tailwind CSS</span>. My journey into web development has
                            been a unique transition from a{" "}
                            <span className="font-semibold">Bachelor’s degree in Business Administration (BBA)</span>{" "}
                            to the world of technology.
                        </p>
                        <p className="mb-4">
                            While my background in business equipped me with skills in problem-solving, project
                            management, and strategic thinking, I discovered my true calling in building digital
                            solutions. With curiosity and determination, I immersed myself in programming,
                            mastering React for building dynamic user interfaces and Tailwind CSS for designing
                            elegant, responsive layouts effortlessly.
                        </p>
                        <p>
                            Through continuous learning and practice, I’ve discovered my passion for{" "}
                            <span className="font-semibold">building impactful web systems</span> and helping people
                            with modern, user-centric solutions. Let’s create something exceptional together!
                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default AboutMe;