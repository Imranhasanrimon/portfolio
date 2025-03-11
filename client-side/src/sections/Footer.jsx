import footerImg from "../assets/basundhara 2.jpg"
const Footer = () => {
    return (
        <footer className="footer footer-center border-t border-gray-500 text-base-content p-4 mt-16">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
            </aside>
        </footer>
    );
};

export default Footer;