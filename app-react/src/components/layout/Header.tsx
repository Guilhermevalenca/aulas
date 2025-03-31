import { NavLink } from "react-router";

export default function() {
    return (
        <header>
            <nav 
                className="header-navbar"
            >
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                    About
                </NavLink>
            </nav>
        </header>
    );
}