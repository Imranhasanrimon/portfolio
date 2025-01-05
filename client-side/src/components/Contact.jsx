import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdMail } from "react-icons/md";

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_qzkwiwq', 'template_8eidi82', form.current, {
                publicKey: 'P9hoyUgNf_eS_tE4Z',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div>
            <div className="divider divider-error after:bg-primary before:bg-primary"> <h2 className="text-2xl md:text-3xl lg:text-5xl text-primary text-center font-semibold">Contact</h2></div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-12 mt-12'>
                <div className='py-7 space-y-3 md:text-lg flex flex-col  justify-center'>

                    <h4 className="text-2xl md:text-3xl lg:text-5xl  font-semibold">Get in touch</h4>

                    <p className=''>Feel free to contact me for any project inquiries, collaborations, or just a chat. Let's create something amazing together!</p>

                    <p><FaLocationDot className='inline' /> Rajshahi, Bangladesh</p>
                    <p><IoCall className='inline' /> 01743621957</p>
                    <p><MdMail className='inline' /> imranhasanrimon5@gmail.com</p>

                </div>

                <form ref={form} onSubmit={sendEmail} className="card-body p-5 rounded-xl border border-gray-600 ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="user_name" className="input bg-customFront input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="user_email" className="input bg-customFront input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea rows={5} type="text" name="message" placeholder="Message" className="bg-customFront rounded-lg focus:outline-none border-gray-600 border p-3" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;