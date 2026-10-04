
import "./LatestJobs.css";
import { useNavigate } from "react-router-dom";
import jobs from "../data/jobs";

import {
    FaMapMarkerAlt,
    FaBriefcase,
    FaMoneyBillWave,
    FaRegBookmark
} from "react-icons/fa";

function LatestJobs({ searchText = "", selectedCompany = "" }) {

    const navigate = useNavigate();

    // FILTER JOBS
    const filteredJobs = jobs.filter((job) => {

        const search = searchText.toLowerCase().trim();

        const matchesSearch =
            job.company.toLowerCase().includes(search) ||
            job.title.toLowerCase().includes(search) ||
            job.location.toLowerCase().includes(search);

        const matchesCompany =
            selectedCompany === "" ||
            job.company === selectedCompany;

        return matchesSearch && matchesCompany;
    });

    return (
        <section className="Latest-jobs">

            {/* HEADING */}
            <div className="Latest-jobs-heading">

                <h2>
                    Latest Job Opening
                </h2>

                {/* VIEW ALL JOBS */}
                <button
                    type="button"
                    onClick={() => navigate("/jobs")}
                >
                    View All Jobs
                </button>

            </div>

            {/* JOB CARDS */}
            <div className="Latest-job-container">

                {filteredJobs.length > 0 ? (

                    filteredJobs.map((job) => (

                        <div
                            className="job-cards"
                            key={job.id}
                        >

                            {/* TOP */}
                            <div className="job-top">

                                <div className="company-info">

                                    <img
                                        src={job.logo}
                                        alt={job.company}
                                    />

                                    <h4>
                                        {job.company}
                                    </h4>

                                </div>

                                <FaRegBookmark className="bookmark" />

                            </div>

                            {/* JOB TITLE */}
                            <h3>
                                {job.title}
                            </h3>

                            {/* JOB INFORMATION */}
                            <div className="job-info">

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
                            <div className="salary">

                                <FaMoneyBillWave />

                                <span>
                                    {job.salary}
                                </span>

                            </div>

                            {/* BUTTONS */}
                            <div className="button-container">

                                {/* VIEW DETAILS */}
                                <button
                                    className="apply-btn"
                                    type="button"
                                    onClick={() =>
                                        navigate(`/jobs/${job.id}`)
                                    }
                                >
                                    View Details
                                </button>

                            </div>

                        </div>

                    ))

                ) : (

                    <p>
                        No jobs found.
                    </p>

                )}

            </div>

        </section>
    );
}

export default LatestJobs;
