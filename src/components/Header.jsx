import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HamburgerIcon from "../assets/img/hamburger.svg";
import MobileNav from "./MobileNav";

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
                <div
                    className="block sm:hidden mr-4 p-2 bg-white bg-opacity-10 backdrop-blur-2xl rounded-full shadow-xl border border-white border-opacity-5"
                    onClick={toggleMenu}
                    role="button"
                >
                    <img src={HamburgerIcon} alt="menu" width="32" />
                </div>
            </header>

            <MobileNav isOpen={isOpen} toggleMenu={toggleMenu} />
        </React.Fragment>
    );
};

export default Header;
