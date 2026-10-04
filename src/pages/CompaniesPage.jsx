
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import companies from "../data/companies";

import "./CompaniesPage.css";

function CompaniesPage() {

    const [searchText, setSearchText] = useState("");

    const navigate = useNavigate();

    // Filter companies
    const filteredCompanies = companies.filter((company) => {

        const search = searchText
            .toLowerCase()
            .trim();

        return company.name
            .toLowerCase()
            .includes(search);

    });

    // View jobs of selected company
    const handleViewJobs = (companyName) => {

        navigate(`/jobs?company=${encodeURIComponent(companyName)}`);

    };

    return (

        <div className="companies-page">

            {/* Header */}

            <div className="companies-header">

                <h1>Top Companies</h1>

                <p>
                    Explore companies and find your
                    perfect job opportunity.
                </p>

            </div>


            {/* Search */}

            <div className="company-search">

                <input
                    type="text"
                    placeholder="Search company..."
                    value={searchText}
                    onChange={(e) =>
                        setSearchText(e.target.value)
                    }
                />

            </div>


            {/* Company Count */}

            <div className="company-count">

                <h2>
                    Companies
                </h2>

                <span>
                    {filteredCompanies.length} Companies Found
                </span>

            </div>


            {/* Companies */}

            {filteredCompanies.length > 0 ? (

                <div className="companies-grid">

                    {filteredCompanies.map((company) => (

                        <div
                            className="company-card"
                            key={company.id}
                        >

                            {/* Logo */}

                            <div className="company-logo">

                                <img
                                    src={company.logo}
                                    alt={company.name}
                                />

                            </div>


                            {/* Company Name */}

                            <h2>
                                {company.name}
                            </h2>


                            {/* Jobs */}

                            <p>
                                {company.jobs} Jobs
                            </p>


                            {/* Button */}

                            <button
                                type="button"
                                onClick={() =>
                                    handleViewJobs(
                                        company.name
                                    )
                                }
                            >
                                View Jobs
                            </button>

                        </div>

                    ))}

                </div>

            ) : (

                <div className="no-companies">

                    <h2>
                        No Companies Found
                    </h2>

                    <p>
                        Try searching with another
                        company name.
                    </p>

                </div>

            )}

        </div>
    );
}

export default CompaniesPage;
