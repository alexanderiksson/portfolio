import { NavLink } from "react-router-dom";
import CloseIcon from "../assets/img/close.svg";

export default function MobileNav({ isOpen, toggleMenu }) {
    return (
        <div id="dropdown" style={{ right: isOpen ? 0 : "-100%" }}>
            <img
                src={CloseIcon}
                alt="close"
                width="24"
                onClick={toggleMenu}
                className="cursor-pointer absolute"
                role="button"
            />
            <nav
                className="h-full flex felx-col items-center"
                aria-label="Mobile navigation"
            >
                <ul className="flex flex-col gap-12 text-2xl">
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
    );
}
