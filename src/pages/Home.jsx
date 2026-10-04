import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import Companies from "../components/Companies";
import Categories from "../components/Categories";
import LatestJobs from "../components/LatestJobs";
import { useState } from "react";
function Home(){
    const [searchText,setSearchText] = useState(""); 
    const [selectedCompany,setSelectedCompany] = useState("");
    return(<>
        <HeroSection setSearchText={setSearchText}/>
        <Companies setSelectedCompany={setSelectedCompany}/>
        <Categories/>
        <LatestJobs searchText= {searchText} selectedCompany={selectedCompany}/>
</>
    );
}
export default Home;