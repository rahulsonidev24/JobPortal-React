import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ApplyJob.css";

function ApplyJob() {

    const { id } = useParams();

    // =========================
    // FORM STATES
    // =========================

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [resume, setResume] = useState(null);
    const [coverLetter, setCoverLetter] = useState("");


    // =========================
    // MESSAGE STATES
    // =========================

    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);


    // =========================
    // FORM SUBMISSION
    // =========================

    const handleSubmit = (e) => {

        e.preventDefault();

        // Clear previous messages
        setError("");
        setSuccess(false);


        // =========================
        // NAME VALIDATION
        // =========================

        const namePattern = /^[A-Za-z ]+$/;

        if (name.trim() === "") {

            setError("Please enter your full name");

            return;
        }

        if (!namePattern.test(name.trim())) {

            setError(
                "Name should contain only letters and spaces"
            );

            return;
        }


        // =========================
        // EMAIL VALIDATION
        // =========================

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email.trim() === "") {

            setError("Please enter your email");

            return;
        }

        if (!emailPattern.test(email.trim())) {

            setError("Please enter a valid email address");

            return;
        }


        // =========================
        // PHONE VALIDATION
        // =========================

        const phonePattern = /^[0-9]{10}$/;

        if (phone.trim() === "") {

            setError("Please enter your phone number");

            return;
        }

        if (!phonePattern.test(phone.trim())) {

            setError(
                "Phone number must contain exactly 10 digits"
            );

            return;
        }


        // =========================
        // RESUME VALIDATION
        // =========================

        if (!resume) {

            setError("Please upload your resume");

            return;
        }


        // Allowed resume extensions
        const allowedTypes = [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        ];

        if (!allowedTypes.includes(resume.type)) {

            setError(
                "Resume must be a PDF, DOC, or DOCX file"
            );

            return;
        }


        // Maximum file size = 2 MB
        const maxSize = 2 * 1024 * 1024;

        if (resume.size > maxSize) {

            setError(
                "Resume size must be less than 2 MB"
            );

            return;
        }


        // =========================
        // COVER LETTER VALIDATION
        // =========================

        if (coverLetter.trim() === "") {

            setError("Please enter your cover letter");

            return;
        }


        if (coverLetter.trim().length < 50) {

            setError(
                "Cover letter must contain at least 50 characters"
            );

            return;
        }


        // =========================
        // GET EXISTING APPLICATIONS
        // =========================

        const existingApplications =
            JSON.parse(
                localStorage.getItem("applications")
            ) || [];


        // =========================
        // DUPLICATE APPLICATION CHECK
        // =========================

        const alreadyApplied =
            existingApplications.some(
                (application) =>
                    application.jobId === id &&
                    application.email.toLowerCase() ===
                    email.trim().toLowerCase()
            );


        if (alreadyApplied) {

            setError(
                "You have already applied for this job using this email"
            );

            return;
        }


        // =========================
        // CREATE APPLICATION
        // =========================

        const application = {

           applicationId: Date.now(),

            name: name.trim(),

            email: email.trim(),

            phone: phone.trim(),

            resume: resume.name,

            coverLetter: coverLetter.trim(),

            jobId: id,

            appliedAt: new Date().toLocaleString(),

            appliedDate: new Date().toISOString(),

             status: "Applied"
        };


        // =========================
        // SAVE APPLICATION
        // =========================

        existingApplications.push(application);

        localStorage.setItem(
            "applications",
            JSON.stringify(existingApplications)
        );


        // =========================
        // SUCCESS
        // =========================

        setError("");

        setSuccess(true);


        // =========================
        // CLEAR FORM
        // =========================

        setName("");

        setEmail("");

        setPhone("");

        setResume(null);

        setCoverLetter("");


        // Reset file input
        document.getElementById("resume").value = "";


        console.log(
            "Application Submitted:",
            application
        );
    };


    return (

        <div className="apply-page">

            {/* =========================
                BACK BUTTON
            ========================= */}

            <div className="apply-back-container">

                <Link
                    to={`/jobs/${id}`}
                    className="apply-back-link"
                >
                    ← Back to Job Details
                </Link>

            </div>


            {/* =========================
                APPLY CARD
            ========================= */}

            <div className="apply-card">


                {/* =========================
                    HEADER
                ========================= */}

                <div className="apply-header">

                    <h1>
                        Apply For Job
                    </h1>

                    <p>
                        Fill in your details to submit
                        your application.
                    </p>

                    <span>
                        Job ID: {id}
                    </span>

                </div>


                {/* =========================
                    FORM
                ========================= */}

                <form
                    onSubmit={handleSubmit}
                    className="apply-form"
                >


                    {/* ERROR MESSAGE */}

                    {error && (

                        <div className="error-message">

                            ❌ {error}

                        </div>

                    )}


                    {/* SUCCESS MESSAGE */}

                    {success && (

                        <div className="success-message">

                            ✅ Application submitted successfully!

                        </div>

                    )}


                    {/* =========================
                        NAME
                    ========================= */}

                    <div className="form-group">

                        <label htmlFor="name">
                            Full Name *
                        </label>

                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) =>
                                setName(e.target.value)
                            }
                            placeholder="Enter your full name"
                        />

                        <small>
                            Enter your name using letters only.
                        </small>

                    </div>


                    {/* =========================
                        EMAIL
                    ========================= */}

                    <div className="form-group">

                        <label htmlFor="email">
                            Email Address *
                        </label>

                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            placeholder="example@gmail.com"
                        />

                    </div>


                    {/* =========================
                        PHONE
                    ========================= */}

                    <div className="form-group">

                        <label htmlFor="phone">
                            Phone Number *
                        </label>

                        <input
                            id="phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => {

                                const value =
                                    e.target.value.replace(
                                        /\D/g,
                                        ""
                                    );

                                setPhone(value);

                            }}
                            placeholder="10-digit phone number"
                            maxLength="10"
                        />

                        <small>
                            Enter exactly 10 digits.
                        </small>

                    </div>


                    {/* =========================
                        RESUME
                    ========================= */}

                    <div className="form-group">

                        <label htmlFor="resume">
                            Resume *
                        </label>

                        <input
                            id="resume"
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={(e) =>
                                setResume(
                                    e.target.files[0]
                                )
                            }
                        />

                        <small>
                            Accepted formats: PDF, DOC, DOCX.
                            Maximum size: 2 MB.
                        </small>

                    </div>


                    {/* =========================
                        COVER LETTER
                    ========================= */}

                    <div className="form-group">

                        <label htmlFor="coverLetter">
                            Cover Letter *
                        </label>

                        <textarea
                            id="coverLetter"
                            value={coverLetter}
                            onChange={(e) =>
                                setCoverLetter(
                                    e.target.value
                                )
                            }
                            placeholder="Write your cover letter here..."
                            rows="7"
                        />

                        <small>
                            Minimum 50 characters.
                        </small>

                    </div>


                    {/* =========================
                        SUBMIT BUTTON
                    ========================= */}

                    <button
                        type="submit"
                        className="submit-application"
                    >
                        Submit Application
                    </button>

                </form>

            </div>

        </div>
    );
}

export default ApplyJob;

