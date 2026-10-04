import { useState } from "react";

import "./Contact.css";

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        }
        else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                formData.email
            )
        ) {
            newErrors.email = "Enter a valid email";
        }

        if (!formData.subject.trim()) {
            newErrors.subject = "Subject is required";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }

        alert("Your message has been submitted successfully!");

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
        });

        setErrors({});
    };

    return (
        <div className="contact-page">

            {/* HEADER */}

            <section className="contact-header">

                <h1>
                    Contact <span>Us</span>
                </h1>

                <p>
                    Have a question or need help?
                    We would love to hear from you.
                </p>

            </section>


            {/* CONTACT CONTENT */}

            <section className="contact-section">

                {/* CONTACT INFORMATION */}

                <div className="contact-info">

                    <h2>
                        Get In Touch
                    </h2>

                    <p>
                        If you have any questions,
                        suggestions, or feedback,
                        feel free to contact us.
                    </p>


                    <div className="contact-item">

                        <div className="contact-icon">
                            📧
                        </div>

                        <div>
                            <h3>Email</h3>
                            <p>
                                support@jobportal.com
                            </p>
                        </div>

                    </div>


                    <div className="contact-item">

                        <div className="contact-icon">
                            📞
                        </div>

                        <div>
                            <h3>Phone</h3>
                            <p>
                                +91 98765 43210
                            </p>
                        </div>

                    </div>


                    <div className="contact-item">

                        <div className="contact-icon">
                            📍
                        </div>

                        <div>
                            <h3>Location</h3>
                            <p>
                                India
                            </p>
                        </div>

                    </div>

                </div>


                {/* CONTACT FORM */}

                <div className="contact-form-container">

                    <h2>
                        Send Us a Message
                    </h2>

                    <form onSubmit={handleSubmit}>

                        {/* NAME */}

                        <div className="contact-form-group">

                            <label>
                                Full Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                            />

                            {errors.name && (
                                <p className="contact-error">
                                    {errors.name}
                                </p>
                            )}

                        </div>


                        {/* EMAIL */}

                        <div className="contact-form-group">

                            <label>
                                Email
                            </label>

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                            />

                            {errors.email && (
                                <p className="contact-error">
                                    {errors.email}
                                </p>
                            )}

                        </div>


                        {/* SUBJECT */}

                        <div className="contact-form-group">

                            <label>
                                Subject
                            </label>

                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Enter subject"
                            />

                            {errors.subject && (
                                <p className="contact-error">
                                    {errors.subject}
                                </p>
                            )}

                        </div>


                        {/* MESSAGE */}

                        <div className="contact-form-group">

                            <label>
                                Message
                            </label>

                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Write your message..."
                                rows="6"
                            />

                            {errors.message && (
                                <p className="contact-error">
                                    {errors.message}
                                </p>
                            )}

                        </div>


                        {/* SUBMIT */}

                        <button
                            type="submit"
                            className="contact-submit"
                        >
                            Send Message
                        </button>

                    </form>

                </div>

            </section>

        </div>
    );
}

export default Contact;