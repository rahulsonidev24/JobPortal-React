import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ darkMode, toggleDarkMode }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate();

    // Get logged-in user
    const loggedInUser =
        JSON.parse(localStorage.getItem("loggedInUser"));

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    // Logout
    const handleLogout = () => {
        localStorage.removeItem("loggedInUser");

        closeMenu();

        navigate("/");
    };

    return (
        <nav className="navbar">

            {/* LOGO */}

            <div className="logo">
                Job <span>Portal</span>
            </div>


            {/* MOBILE MENU BUTTON */}

            <button
                className="menu-button"
                onClick={toggleMenu}
                aria-label="Toggle navigation menu"
                type="button"
            >
                {menuOpen ? "✕" : "☰"}
            </button>


            {/* NAVIGATION */}

            <ul
                className={
                    menuOpen
                        ? "nav-links active"
                        : "nav-links"
                }
            >

                <li>
                    <Link
                        to="/"
                        onClick={closeMenu}
                    >
                        Home
                    </Link>
                </li>


                <li>
                    <Link
                        to="/jobs"
                        onClick={closeMenu}
                    >
                        Jobs
                    </Link>
                </li>


                <li>
                    <Link
                        to="/companies"
                        onClick={closeMenu}
                    >
                        Companies
                    </Link>
                </li>


                <li>
                    <Link
                        to="/about"
                        onClick={closeMenu}
                    >
                        About
                    </Link>
                </li>


                <li>
                    <Link
                        to="/contact"
                        onClick={closeMenu}
                    >
                        Contact
                    </Link>
                </li>


                <li>
                    <Link
                        to="/applications"
                        onClick={closeMenu}
                    >
                        Applications
                    </Link>
                </li>


                {/* =========================
                    USER AUTHENTICATION
                ========================= */}

                {!loggedInUser ? (

                    <>
                        {/* LOGIN */}

                        <li>
                            <Link
                                to="/login"
                                className="log"
                                onClick={closeMenu}
                            >
                                Login
                            </Link>
                        </li>


                        {/* SIGN UP */}

                        <li>
                            <Link
                                to="/signup"
                                className="sign"
                                onClick={closeMenu}
                            >
                                Sign Up
                            </Link>
                        </li>
                    </>

                ) : (

                    <>
                        {/* USER NAME */}

                        <li>
                            <span className="user-name">
                                Welcome, {loggedInUser.name}
                            </span>
                        </li>


                        {/* LOGOUT */}

                        <li>
                            <button
                                className="logout-button"
                                type="button"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </li>
                    </>
                )}


                {/* DARK MODE */}

                <li>
                    <button
                        className="theme-button"
                        type="button"
                        onClick={toggleDarkMode}
                    >
                        {darkMode
                            ? "☀️ Light"
                            : "🌙 Dark"}
                    </button>
                </li>

            </ul>

        </nav>
    );
}

export default Navbar;