import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HamburgerIcon from "../assets/img/hamburger.svg";
import CloseIcon from "../assets/img/close.svg";

const Navbar = () => {
    return (
        <nav
            className="hidden sm:block py-4 px-10 bg-white bg-opacity-5 rounded-full backdrop-blur-xl shadow-lg border border-white border-opacity-5"
            aria-label="Main navigation"
        >
            <ul className="flex justify-center gap-16">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/skills">Skills</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
};

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((open) => !open);
    };

    return (
        <React.Fragment>
            <header className="flex justify-end sm:justify-center py-4 sm:py-6 fixed w-full">
                <Navbar />

                {/* Hamburger menu */}
                <div className="block sm:hidden mr-4 p-2 bg-white bg-opacity-10 backdrop-blur-xl rounded-full shadow-lg">
                    <img
                        src={HamburgerIcon}
                        alt="menu"
                        width="40"
                        onClick={toggleMenu}
                        className="cursor-pointer"
                        role="button"
                    />
                </div>
            </header>

            {/* Mobile nav */}
            <div id="dropdown" style={{ right: isOpen ? 0 : "-100%" }}>
                <img
                    src={CloseIcon}
                    alt="close"
                    width="25"
                    onClick={toggleMenu}
                    className="cursor-pointer"
                    role="button"
                />
                <nav className="mt-10" aria-label="Mobile navigation">
                    <ul className="flex flex-col gap-10">
                        <li>
                            <NavLink onClick={toggleMenu} to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={toggleMenu} to="/skills">
                                Skills
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={toggleMenu} to="/portfolio">
                                Portfolio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={toggleMenu} to="/contact">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </React.Fragment>
    );
};

export default Header;
