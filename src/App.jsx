import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import CompaniesPage from "./pages/CompaniesPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import JobDetails from "./pages/JobDetails";
import ApplyJob from "./pages/ApplyJob";
import Applications from "./pages/Applications";
import ApplicationDetails from "./pages/ApplicationDetails";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
function App() {
    const [searchText, setSearchText] = useState("");
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode((previousMode) => !previousMode);
    };

    return (
        <div className={darkMode ? "dark-mode" : "light-mode"}>

            <Navbar
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
            />

            <Routes>

                {/* Home */}
                <Route
                    path="/"
                    element={
                        <Home
                            searchText={searchText}
                            setSearchText={setSearchText}
                        />
                    }
                />

                {/* Jobs */}
                <Route
                    path="/jobs"
                    element={
                        <Jobs
                            searchText={searchText}
                        />
                    }
                />

                {/* Companies */}
                <Route
                    path="/companies"
                    element={<CompaniesPage />}
                />

                {/* About */}
                <Route
                    path="/about"
                    element={<About />}
                />

                {/* Contact */}
                <Route
                    path="/contact"
                    element={<Contact />}
                />

                {/* Job Details */}
                <Route
                    path="/jobs/:id"
                    element={<JobDetails />}
                />

                {/* Apply Job */}
                <Route
                    path="/apply/:id"
                    element={<ApplyJob />}
                />

                {/* Applications */}
                <Route
                    path="/applications"
                    element={<Applications />}
                />

                {/* Application Details */}
                <Route
                    path="/applications/:id"
                    element={<ApplicationDetails />}
                />
               <Route
    path="/signup"
    element={<Signup />}
/>
<Route
    path="/login"
    element={<Login />}
/>

            </Routes>

        </div>
    );
}

export default App;