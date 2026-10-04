
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));
    };

    // Handle login
    const handleSubmit = (e) => {
        e.preventDefault();

        setError("");
        setSuccess("");

        // Check empty fields
        if (!formData.email.trim() || !formData.password) {
            setError("Please enter email and password.");
            return;
        }

        // Get registered users
        const existingUsers =
            JSON.parse(localStorage.getItem("users")) || [];

        // Find user
        const user = existingUsers.find(
            (user) =>
                user.email.toLowerCase() ===
                formData.email.trim().toLowerCase()
        );

        // Email not found
        if (!user) {
            setError("Email is not registered.");
            return;
        }

        // Check password
        if (user.password !== formData.password) {
            setError("Incorrect password.");
            return;
        }

        // Login successful
        localStorage.setItem(
            "loggedInUser",
            JSON.stringify(user)
        );

        setSuccess("Login successful!");

        // Clear form
        setFormData({
            email: "",
            password: "",
        });

        // Go to home page
        setTimeout(() => {
            navigate("/");
        }, 1000);
    };

    return (
        <div className="login-container">

            <div className="login-box">

                <h1>Welcome Back</h1>

                <p className="login-description">
                    Login to your JobPortal account
                </p>

                <form onSubmit={handleSubmit}>

                    {/* Email */}
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    {/* Password */}
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    {/* Error */}
                    {error && (
                        <p className="login-error">
                            {error}
                        </p>
                    )}

                    {/* Success */}
                    {success && (
                        <p className="login-success">
                            {success}
                        </p>
                    )}

                    <button type="submit">
                        Login
                    </button>

                </form>

                <p className="signup-link">
                    Don't have an account?{" "}
                    <span
                        onClick={() => navigate("/signup")}
                    >
                        Sign Up
                    </span>
                </p>

            </div>

        </div>
    );
}

export default Login;
