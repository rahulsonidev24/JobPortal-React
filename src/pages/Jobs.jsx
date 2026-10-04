import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import jobs from "../data/jobs";

import {
    FaMapMarkerAlt,
    FaBriefcase,
    FaMoneyBillWave,
    FaBookmark
} from "react-icons/fa";

import "./Jobs.css";

function Jobs({ searchText = "" }) {

    const navigate = useNavigate();

    const [searchParams] = useSearchParams();

    const companyFilter =
        searchParams.get("company") || "";

    const categoryFilter =
        searchParams.get("category") || "";


    // =========================
    // BOOKMARK STATE
    // =========================

    const [bookmarkedJobs, setBookmarkedJobs] = useState([]);


    // =========================
    // BOOKMARK FUNCTION
    // =========================
const handleBookmark = (id) => {

    setBookmarkedJobs((oldBookmarks) => {

        if (oldBookmarks.includes(id)) {

            console.log("Removing bookmark:", id);

            return oldBookmarks.filter(
                (jobId) => jobId !== id
            );

        }

        console.log("Adding bookmark:", id);

        return [...oldBookmarks, id];

    });

};

    // =========================
    // FILTER JOBS
    // =========================

    const filteredJobs = jobs.filter((job) => {

        const search =
            searchText.toLowerCase().trim();

        const companySearch =
            companyFilter.toLowerCase().trim();


        const matchesSearch =
            job.title
                .toLowerCase()
                .includes(search) ||

            job.company
                .toLowerCase()
                .includes(search) ||

            job.location
                .toLowerCase()
                .includes(search);


        const matchesCompany =
            companySearch === "" ||
            job.company
                .toLowerCase()
                .trim() === companySearch;


        const matchesCategory =
            categoryFilter === "" ||

            (
                categoryFilter === "IT & Software" &&

                (
                    job.title
                        .toLowerCase()
                        .includes("developer") ||

                    job.title
                        .toLowerCase()
                        .includes("software") ||

                    job.title
                        .toLowerCase()
                        .includes("engineer") ||

                    job.title
                        .toLowerCase()
                        .includes("react")
                )
            );


        return (
            matchesSearch &&
            matchesCompany &&
            matchesCategory
        );

    });


    // =========================
    // CLEAR COMPANY FILTER
    // =========================

    const handleClearCompany = () => {

        navigate("/jobs");

    };


    return (

        <div className="jobs-page">

            {/* HEADER */}

            <div className="jobs-header">

                <h1>
                    Available Jobs
                </h1>

                <p>
                    Find your perfect job opportunity
                </p>


                {companyFilter && (

                    <div className="company-filter">

                        <p>
                            Showing jobs from:

                            <strong>
                                {" "}
                                {companyFilter}
                            </strong>
                        </p>

                        <button
                            type="button"
                            onClick={handleClearCompany}
                        >
                            Show All Jobs
                        </button>

                    </div>

                )}

            </div>


            {/* JOB COUNT */}

            <div className="jobs-count">

                <h2>
                    Latest Jobs
                </h2>

                <span>
                    {filteredJobs.length} Jobs Found
                </span>

            </div>


            {/* JOB CARDS */}

            <div className="jobs-grid">

                {filteredJobs.length > 0 ? (

                    filteredJobs.map((job) => (

                        <div
                            className="jobs-card"
                            key={job.id}
                        >

                            {/* =========================
                                BOOKMARK BUTTON
                            ========================= */}
<button
    type="button"
    className="bookmark-button"
    onClick={() => {
        console.log("Bookmark clicked:", job.id);
        handleBookmark(job.id);
    }}
    style={{
        backgroundColor: bookmarkedJobs.includes(job.id)
            ? "#2563eb"
            : "#f1f5f9",

        color: bookmarkedJobs.includes(job.id)
            ? "white"
            : "#64748b"
    }}
>
    <FaBookmark />
</button>


                            {/* COMPANY */}

                            <div className="jobs-card-top">

                                <div className="company-section">

                                    {job.logo && (

                                        <img
                                            src={job.logo}
                                            alt={job.company}
                                        />

                                    )}

                                    <div>

                                        <h3>
                                            {job.company}
                                        </h3>

                                        <p>
                                            {job.location}
                                        </p>

                                    </div>

                                </div>

                            </div>


                            {/* TITLE */}

                            <h2 className="job-title">
                                {job.title}
                            </h2>


                            {/* INFORMATION */}

                            <div className="job-information">

                                <span>

                                    <FaMapMarkerAlt />

                                    {job.location}

                                </span>


                                <span>

                                    <FaBriefcase />

                                    {job.type}

                                </span>

                            </div>


                            {/* SALARY */}

                            <div className="job-salary">

                                <FaMoneyBillWave />

                                <span>
                                    {job.salary}
                                </span>

                            </div>


                            {/* VIEW DETAILS */}

                            <button
                                type="button"
                                className="view-job-button"
                                onClick={() =>
                                    navigate(
                                        `/jobs/${job.id}`
                                    )
                                }
                            >
                                View Details
                            </button>

                        </div>

                    ))

                ) : (

                    <div className="no-jobs">

                        <h2>
                            No Jobs Found
                        </h2>

                        <p>
                            Try searching with another
                            keyword, company or location.
                        </p>

                    </div>

                )}

            </div>

        </div>
    );
}

export default Jobs;