import { useNavigate } from "react-router-dom";
import "./Categories.css";

function Categories() {

    const navigate = useNavigate();

    const categories = [
        {
            id: 1,
            name: "IT & Software",
            jobs: "120 jobs Available"
        },
        {
            id: 2,
            name: "Marketing",
            jobs: "80 jobs Available"
        },
        {
            id: 3,
            name: "Design",
            jobs: "65 jobs Available"
        },
        {
            id: 4,
            name: "Sales",
            jobs: "90 jobs Available"
        },
        {
            id: 5,
            name: "Finance",
            jobs: "70 jobs Available"
        },
        {
            id: 6,
            name: "HR",
            jobs: "50 jobs Available"
        }
    ];

    // Category card click
    const handleCategoryClick = (categoryName) => {

        navigate(
            `/jobs?category=${encodeURIComponent(categoryName)}`
        );

    };

    // View All button
    const handleViewAll = () => {

        navigate("/jobs");

    };

    return (

        <section className="categories">

            {/* HEADING */}
            <div className="categories-heading">

                <div>
                    <h2>Browse by Category</h2>

                    <p>
                        Explore jobs by different categories
                    </p>
                </div>

                <button
                    type="button"
                    className="view-all-button"
                    onClick={handleViewAll}
                >
                    View All
                </button>

            </div>


            {/* CATEGORY CARDS */}
            <div className="category-container">

                {categories.map((category) => (

                    <div
                        className="category-card"
                        key={category.id}
                        onClick={() =>
                            handleCategoryClick(category.name)
                        }
                    >

                        <h3>
                            {category.name}
                        </h3>

                        <p>
                            {category.jobs}
                        </p>

                    </div>

                ))}

            </div>

        </section>

    );
}

export default Categories;