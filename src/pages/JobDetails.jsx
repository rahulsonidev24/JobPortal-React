import { useParams, Link } from "react-router-dom";
import jobs from "../data/jobs";

import "./JobDetails.css";

function JobDetails() {

    const { id } = useParams();

    const jobId = Number(id);

    const job = jobs.find((job) => job.id === jobId);

    // If job does not exist
    if (!job) {
        return (
            <div className="job-not-found">

                <h1>Job Not Found</h1>

                <p>
                    The job you are looking for does not exist.
                </p>

                <Link to="/jobs">
                    Back to Jobs
                </Link>

            </div>
        );
    }

    return (
        <div className="job-details-page">

            {/* BACK BUTTON */}

            <Link
                to="/jobs"
                className="back-jobs"
            >
                ← Back to Jobs
            </Link>


            {/* JOB HEADER */}

            <div className="job-details-header">

                <div className="job-details-company">

                    <img
                        src={job.logo}
                        alt={job.company}
                    />

                    <div>

                        <h1>
                            {job.title}
                        </h1>

                        <h2>
                            {job.company}
                        </h2>

                    </div>

                </div>

            </div>


            {/* JOB INFORMATION */}

            <div className="job-info">

                <div className="info-box">

                    <span>📍</span>

                    <div>
                        <small>Location</small>
                        <p>{job.location}</p>
                    </div>

                </div>


                <div className="info-box">

                    <span>💼</span>

                    <div>
                        <small>Job Type</small>
                        <p>{job.type}</p>
                    </div>

                </div>


                <div className="info-box">

                    <span>💰</span>

                    <div>
                        <small>Salary</small>
                        <p>{job.salary}</p>
                    </div>

                </div>

            </div>


            {/* MAIN CONTENT */}

            <div className="job-content">

                {/* LEFT SIDE */}

                <div className="job-main">

                    {/* DESCRIPTION */}

                    <section>

                        <h2>
                            Job Description
                        </h2>

                        <p>
                            {job.description}
                        </p>

                    </section>


                    {/* RESPONSIBILITIES */}

                    <section>

                        <h2>
                            Responsibilities
                        </h2>

                        <ul>

                            {job.responsibilities.map(
                                (responsibility, index) => (

                                    <li key={index}>
                                        {responsibility}
                                    </li>

                                )
                            )}

                        </ul>

                    </section>


                    {/* REQUIREMENTS */}

                    <section>

                        <h2>
                            Requirements
                        </h2>

                        <ul>

                            {job.requirements.map(
                                (requirement, index) => (

                                    <li key={index}>
                                        {requirement}
                                    </li>

                                )
                            )}

                        </ul>

                    </section>

                </div>


                {/* RIGHT SIDE */}

                <div className="job-sidebar">

                    <h2>
                        Interested in this job?
                    </h2>

                    <p>
                        Apply now and take the next step
                        toward your career.
                    </p>

                    <Link
                        to={`/apply/${job.id}`}
                        className="apply-now"
                    >
                        Apply Now
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default JobDetails;