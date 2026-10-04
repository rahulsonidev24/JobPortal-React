import { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/job-portal.png";

function HeroSection({ setSearchText }) {

    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    function handleSearch() {
        setSearchText(search);
        navigate("/jobs");
    }

    function handleApply() {
        navigate("/jobs");
    }

    function handleExploreJobs() {
        navigate("/jobs");
    }

    return (
        <section className="Hero-container">

            <div className="Hero">

                <h1>
                    Find Your <br />
                    <span>Dream Job</span>
                </h1>

                <p>
                    Explore Thousands of Job opportunities from top
                    companies and build your future
                </p>

                <div className="input-box">

                    <input
                        type="text"
                        placeholder="Job Title,keywords or company"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Location"
                    />

                    <button
                        type="button"
                        onClick={handleSearch}
                    >
                        Search Jobs
                    </button>

                </div>

                <div className="Apply-button">
                    <button
                        type="button"
                        onClick={handleApply}
                    >
                        Apply Now
                    </button>
                </div>

                <div className="Explore-button">
                    <button
                        type="button"
                        onClick={handleExploreJobs}
                    >
                        Explore Jobs
                    </button>
                </div>

            </div>

            <div className="Hero-image">
                <img
                    src={heroImage}
                    alt="Hero"
                />
            </div>

        </section>
    );
}

export default HeroSection;