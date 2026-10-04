import { Link } from "react-router-dom";

import "./About.css";

function About() {
    return (
        <div className="about-page">

            {/* HERO SECTION */}

            <section className="about-hero">

                <h1>
                    About <span>Job Portal</span>
                </h1>

                <p>
                    Find the right job and take the next step
                    toward your career.
                </p>

            </section>


            {/* ABOUT SECTION */}

            <section className="about-section">

                <div className="about-content">

                    <h2>
                        Who We Are
                    </h2>

                    <p>
                        Job Portal is a frontend-based job
                        searching platform designed to help
                        job seekers find suitable
                        opportunities easily.
                    </p>

                    <p>
                        Users can explore jobs, search for
                        companies, view detailed job
                        information, and apply for jobs
                        through a simple and user-friendly
                        interface.
                    </p>

                </div>

            </section>


            {/* FEATURES */}

            <section className="about-features">

                <h2>
                    What You Can Do
                </h2>

                <div className="features-grid">

                    <div className="feature-card">

                        <div className="feature-icon">
                            🔍
                        </div>

                        <h3>
                            Search Jobs
                        </h3>

                        <p>
                            Search jobs by title, company,
                            or location.
                        </p>

                    </div>


                    <div className="feature-card">

                        <div className="feature-icon">
                            🏢
                        </div>

                        <h3>
                            Explore Companies
                        </h3>

                        <p>
                            Explore different companies
                            and their available jobs.
                        </p>

                    </div>


                    <div className="feature-card">

                        <div className="feature-icon">
                            📄
                        </div>

                        <h3>
                            Apply for Jobs
                        </h3>

                        <p>
                            View job details and submit
                            your application.
                        </p>

                    </div>


                    <div className="feature-card">

                        <div className="feature-icon">
                            📋
                        </div>

                        <h3>
                            Track Applications
                        </h3>

                        <p>
                            View and manage your submitted
                            job applications.
                        </p>

                    </div>

                </div>

            </section>


            {/* CALL TO ACTION */}

            <section className="about-cta">

                <h2>
                    Ready to Find Your Next Job?
                </h2>

                <p>
                    Explore available opportunities and
                    start your job search today.
                </p>

                <Link
                    to="/jobs"
                    className="about-jobs-button"
                >
                    Explore Jobs
                </Link>

            </section>

        </div>
    );
}

export default About;