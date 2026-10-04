import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setError("");
        setSuccess("");

        // Empty field validation
        if (
            !formData.name.trim() ||
            !formData.email.trim() ||
            !formData.password ||
            !formData.confirmPassword
        ) {
            setError("Please fill all fields.");
            return;
        }

        // Password length
        if (formData.password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        // Password match
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        // Get existing users
        const existingUsers =
            JSON.parse(localStorage.getItem("users")) || [];

        // Check duplicate email
        const userAlreadyExists = existingUsers.some(
            (user) =>
                user.email.toLowerCase() ===
                formData.email.trim().toLowerCase()
        );

        if (userAlreadyExists) {
            setError("An account with this email already exists.");
            return;
        }

        // Create user
        const newUser = {
            id: Date.now(),
            name: formData.name.trim(),
            email: formData.email.trim().toLowerCase(),
            password: formData.password,
        };

        // Save user
        existingUsers.push(newUser);

        localStorage.setItem(
            "users",
            JSON.stringify(existingUsers)
        );

        setSuccess("Account created successfully!");

        // Clear form
        setFormData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        });

        // Navigate to login
        setTimeout(() => {
            navigate("/login");
        }, 1000);
    };

    return (
        <div className="signup-container">

            <div className="signup-box">

                {/* =========================
                    SIGNUP HEADER
                ========================= */}

                <div className="signup-header">

                    <h1>Create Account</h1>

                    <p className="signup-description">
                        Create your <span>JobPortal</span> account
                    </p>

                </div>


                {/* =========================
                    SIGNUP FORM
                ========================= */}

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />


                    {/* ERROR MESSAGE */}

                    {error && (
                        <p className="error-message">
                            {error}
                        </p>
                    )}


                    {/* SUCCESS MESSAGE */}

                    {success && (
                        <p className="success-message">
                            {success}
                        </p>
                    )}


                    {/* SIGN UP BUTTON */}

                    <button type="submit">
                        Sign Up
                    </button>

                </form>


                {/* =========================
                    LOGIN LINK
                ========================= */}

                <p className="login-link">

                    Already have an account?{" "}

                    <span
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </span>

                </p>

            </div>

        </div>
    );
}

export default Signup;