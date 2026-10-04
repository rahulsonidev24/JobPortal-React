import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Applications.css";
import jobs from "../data/jobs";

function Applications() {

    const [applications, setApplications] = useState([]);

    const [searchText, setSearchText] = useState("");

    const [statusFilter, setStatusFilter] = useState("All");


    // Load applications from localStorage
    useEffect(() => {

        const savedApplications =
            JSON.parse(localStorage.getItem("applications")) || [];

        setApplications(savedApplications);

    }, []);


    // Delete application
    const handleDelete = (applicationId, index) => {

        const updatedApplications = applications.filter(
            (application, i) => {

                // New applications
                if (application.applicationId) {
                    return application.applicationId !== applicationId;
                }

                // Old applications
                return i !== index;
            }
        );

        localStorage.setItem(
            "applications",
            JSON.stringify(updatedApplications)
        );

        setApplications(updatedApplications);
    };


    // Change application status
    const handleStatusChange = (index, newStatus) => {

        const updatedApplications = [...applications];

        updatedApplications[index].status = newStatus;

        localStorage.setItem(
            "applications",
            JSON.stringify(updatedApplications)
        );

        setApplications(updatedApplications);
    };


    // Search and filter applications
    const filteredApplications = applications.filter(
        (application) => {

            const job = jobs.find(
                (job) =>
                    job.id === Number(application.jobId)
            );

            const search = searchText.toLowerCase();


            const matchesSearch =
                !search ||
                job?.title
                    ?.toLowerCase()
                    .includes(search) ||

                job?.company
                    ?.toLowerCase()
                    .includes(search) ||

                job?.location
                    ?.toLowerCase()
                    .includes(search);


            const matchesStatus =
                statusFilter === "All" ||
                (application.status || "Applied") ===
                    statusFilter;


            return matchesSearch && matchesStatus;
        }
    );


    // Application statistics
    const totalApplications = applications.length;

    const appliedApplications = applications.filter(
        (application) =>
            (application.status || "Applied") === "Applied"
    ).length;

    const underReviewApplications = applications.filter(
        (application) =>
            application.status === "Under Review"
    ).length;

    const shortlistedApplications = applications.filter(
        (application) =>
            application.status === "Shortlisted"
    ).length;

    const rejectedApplications = applications.filter(
        (application) =>
            application.status === "Rejected"
    ).length;


    return (

        <div className="applications-page">

            <h1>My Applications</h1>


            {/* APPLICATION DASHBOARD */}

            <div className="application-stats">

                <div className="stat-card">

                    <h3>
                        Total Applications
                    </h3>

                    <p>
                        {totalApplications}
                    </p>

                </div>


                <div className="stat-card">

                    <h3>
                        Applied
                    </h3>

                    <p>
                        {appliedApplications}
                    </p>

                </div>


                <div className="stat-card">

                    <h3>
                        Under Review
                    </h3>

                    <p>
                        {underReviewApplications}
                    </p>

                </div>


                <div className="stat-card">

                    <h3>
                        Shortlisted
                    </h3>

                    <p>
                        {shortlistedApplications}
                    </p>

                </div>


                <div className="stat-card">

                    <h3>
                        Rejected
                    </h3>

                    <p>
                        {rejectedApplications}
                    </p>

                </div>

            </div>


            {/* SEARCH AND FILTER */}

            <div className="application-filters">

                <input
                    type="text"
                    placeholder="Search by job, company or location..."
                    value={searchText}
                    onChange={(e) =>
                        setSearchText(e.target.value)
                    }
                />


                <select
                    value={statusFilter}
                    onChange={(e) =>
                        setStatusFilter(e.target.value)
                    }
                >

                    <option value="All">
                        All Applications
                    </option>

                    <option value="Applied">
                        Applied
                    </option>

                    <option value="Under Review">
                        Under Review
                    </option>

                    <option value="Shortlisted">
                        Shortlisted
                    </option>

                    <option value="Rejected">
                        Rejected
                    </option>

                </select>


                {/* RESET BUTTON */}

                <button
                    className="reset-filter-button"
                    onClick={() => {

                        setSearchText("");

                        setStatusFilter("All");

                    }}
                >
                    Reset
                </button>

            </div>


            {/* APPLICATION LIST */}

            {applications.length === 0 ? (

                <p>
                    No applications submitted yet.
                </p>

            ) : filteredApplications.length === 0 ? (

                <p>
                    No matching applications found.
                </p>

            ) : (

                <div className="applications-container">

                    {filteredApplications.map(
                        (application) => {

                            // Find original index
                            const originalIndex =
                                applications.indexOf(
                                    application
                                );


                            // Find related job
                            const job =
                                jobs.find(
                                    (job) =>
                                        job.id ===
                                        Number(
                                            application.jobId
                                        )
                                );


                            return (

                                <div
                                    className="application-card"
                                    key={
                                        application.applicationId ||
                                        originalIndex
                                    }
                                >


                                    {/* JOB INFORMATION */}

                                    {job && (

                                        <div className="applied-job">

                                            <img
                                                src={job.logo}
                                                alt={job.company}
                                                className="application-job-logo"
                                            />


                                            <h2>
                                                {job.title}
                                            </h2>


                                            <p>
                                                <strong>
                                                    Company:
                                                </strong>{" "}
                                                {job.company}
                                            </p>


                                            <p>
                                                <strong>
                                                    Location:
                                                </strong>{" "}
                                                {job.location}
                                            </p>


                                            <p>
                                                <strong>
                                                    Job Type:
                                                </strong>{" "}
                                                {job.type}
                                            </p>


                                            <p>
                                                <strong>
                                                    Salary:
                                                </strong>{" "}
                                                {job.salary}
                                            </p>

                                        </div>

                                    )}


                                    <hr />


                                    {/* APPLICANT INFORMATION */}

                                    <h3>
                                        Applicant Information
                                    </h3>


                                    <p>
                                        <strong>
                                            Name:
                                        </strong>{" "}
                                        {application.name}
                                    </p>


                                    <p>
                                        <strong>
                                            Email:
                                        </strong>{" "}
                                        {application.email}
                                    </p>


                                    <p>
                                        <strong>
                                            Phone:
                                        </strong>{" "}
                                        {application.phone}
                                    </p>


                                    <p>
                                        <strong>
                                            Resume:
                                        </strong>{" "}
                                        {application.resume}
                                    </p>


                                    {/* COVER LETTER */}

                                    <div className="cover-letter">

                                        <strong>
                                            Cover Letter:
                                        </strong>

                                        <p>
                                            {
                                                application.coverLetter
                                            }
                                        </p>

                                    </div>


                                    {/* APPLICATION DATE */}

                                    <p className="application-date">

                                        <strong>
                                            Applied On:
                                        </strong>{" "}

                                        {application.appliedDate
                                            ? new Date(
                                                  application.appliedDate
                                              ).toLocaleDateString(
                                                  "en-IN",
                                                  {
                                                      day: "numeric",
                                                      month: "long",
                                                      year: "numeric"
                                                  }
                                              )
                                            : "Date not available"}

                                    </p>


                                    {/* STATUS */}

                                    <div className="application-status">

                                        <strong>
                                            Status:
                                        </strong>


                                        <select
                                            value={
                                                application.status ||
                                                "Applied"
                                            }
                                            onChange={(e) =>
                                                handleStatusChange(
                                                    originalIndex,
                                                    e.target.value
                                                )
                                            }
                                        >

                                            <option value="Applied">
                                                Applied
                                            </option>

                                            <option value="Under Review">
                                                Under Review
                                            </option>

                                            <option value="Shortlisted">
                                                Shortlisted
                                            </option>

                                            <option value="Rejected">
                                                Rejected
                                            </option>

                                        </select>

                                    </div>


                                    {/* VIEW APPLICATION */}

                                    <Link
                                        to={
                                            application.applicationId
                                                ? `/applications/${application.applicationId}`
                                                : `/applications/${originalIndex}`
                                        }
                                        className="view-application-button"
                                    >
                                        View Application
                                    </Link>


                                    {/* DELETE APPLICATION */}

                                    <button
                                        className="delete-button"
                                        onClick={() =>
                                            handleDelete(
                                                application.applicationId,
                                                originalIndex
                                            )
                                        }
                                    >
                                        Delete Application
                                    </button>

                                </div>

                            );

                        }
                    )}

                </div>

            )}

        </div>
    );
}

export default Applications;

