import "./Companies.css";
import { Link } from "react-router-dom";
import google from "../assets/google.png";
import amazon from "../assets/amazon.png";
import microsoft from "../assets/microsoft.png";
import infosys from "../assets/infosys.png";
import tcs from "../assets/tcs.png";
import wipro from "../assets/wipro.png";
function Companies({setSelectedCompany})
{

    const companies = [
        {
            id:1,
            name:"Google",
            logo:google,
            jobs:"245 jobs Available"
        },
          {
            id:2,
            name:"Microsoft",
            logo:microsoft,
            jobs:"190 jobs Available"
        },
          {
            id:3,
            name:"Amazon",
            logo:amazon,
            jobs:"230 jobs Available"
        },
          {
            id:4,
            name:"TCS",
            logo:tcs,
            jobs:"400 jobs Available"
        },
          {
            id:5,
            name:"Infosys",
            logo:infosys,
            jobs:"350 jobs Available"
        },
          {
            id:6,
            name:"Wipro",
            logo:wipro,
            jobs:"390 jobs Available"
        }
    ];
    function handleCompanyclick(companyName){
      setSelectedCompany(companyName);
    }
    return (
       <section className="companies">
          <div className="company-heading">
            <h2>Top Companies Hiring</h2>
            <Link to="/companies" className="view-all-button">
                View All
            </Link>
          </div>
          <div className="company-container">
            {
              companies.map((company)=>(
                <div className="company-card" key={company.id} onClick={()=>{handleCompanyclick(company.name)}}>
                  <img src={company.logo} alt={company.name}/>
                  <h3>{company.name}</h3>
                  <p>{company.jobs}</p>
                  </div>
              ))
            }
          </div>
       </section> 
    );
}
export default Companies;