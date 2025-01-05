
const Navbar = () => {
    const links = <>
        <li><a>About Me</a></li>
        <li><a>Projects</a></li>
        <li><a>Skills</a></li>
        <li><a>Contact</a></li>
    </>
    return (
        <div className="bg-customFront sticky top-0 z-50">
            <div className="navbar max-w-screen-xl w-11/12 mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-customFront rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Imran</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button
                        onClick={() => window.open('https://docs.google.com/document/d/1VzA6XRJlteyKNty1hKFBYq5D_0hTJJgC8JKzEOuhRMQ/edit?tab=t.0', '_blank')}
                        className="bg-primary hover:bg-opacity-90 transition-colors text-white cursor-pointer py-2 px-6 rounded-md font-medium">Resume</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;