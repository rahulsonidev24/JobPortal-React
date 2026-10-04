import { useParams, Link } from "react-router-dom";
import jobs from "../data/jobs";
import "./ApplicationDetails.css";

function ApplicationDetails() {
    const { id } = useParams();

    const applications =
        JSON.parse(localStorage.getItem("applications")) || [];

    const application = applications.find(
    (application) =>
        Number(application.applicationId) === Number(id)
);
    if (!application) {
        return (
            <div className="application-not-found">
                <h1>Application Not Found</h1>

                <p>
                    The application you are looking for does not exist.
                </p>

                <Link to="/applications">
                    Back to Applications
                </Link>
            </div>
        );
    }

    const job = jobs.find(
        (job) => job.id === Number(application.jobId)
    );

    return (
        <div className="application-details">

            <Link
                to="/applications"
                className="back-button"
            >
                ← Back to Applications
            </Link>

            <div className="application-details-card">

                {/* Job Information */}

                {job && (
                    <div className="application-job-info">

                        <img
                            src={job.logo}
                            alt={job.company}
                            className="application-details-logo"
                        />

                        <h1>{job.title}</h1>

                        <h2>{job.company}</h2>

                        <p>
                            📍 {job.location}
                        </p>

                        <p>
                            💼 {job.type}
                        </p>

                        <p>
                            💰 {job.salary}
                        </p>
                    </div>
                )}

                <hr />

                {/* Applicant Information */}

                <h2>Applicant Information</h2>

                <p>
                    <strong>Application ID:</strong>{" "}
                    {application.applicationId}
                </p>

                <p>
                    <strong>Name:</strong>{" "}
                    {application.name}
                </p>

                <p>
                    <strong>Email:</strong>{" "}
                    {application.email}
                </p>

                <p>
                    <strong>Phone:</strong>{" "}
                    {application.phone}
                </p>

                <p>
                    <strong>Resume:</strong>{" "}
                    {application.resume}
                </p>

                {/* Cover Letter */}

                <h2>Cover Letter</h2>

                <p className="details-cover-letter">
                    {application.coverLetter}
                </p>

                {/* Application Date */}

                <h2>Application Information</h2>

                <p>
                    <strong>Applied On:</strong>{" "}
                    {application.appliedDate
                        ? new Date(
                              application.appliedDate
                          ).toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "long",
                              year: "numeric"
                          })
                        : "Date not available"}
                </p>

                {/* Status */}

                <p>
                    <strong>Status:</strong>{" "}
                    {application.status || "Applied"}
                </p>

            </div>
        </div>
    );
}

export default ApplicationDetails;
