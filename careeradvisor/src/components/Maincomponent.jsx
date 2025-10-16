import{ useState } from "react";
import {Dashboard} from "./Dashboard";
import {Collegefinder} from "./Collegefinder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faLocationDot, faBrain, faGlobe, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import './Maincomponent.css';

export const Maincomponent=()=>
{    const [activeTab,setActiveTab]=useState("dashboard");
   const tabComponents = {
  dashboard: <Dashboard />,
//   aptitutdetest: <Aptitudetest />,
//   career:<Careerpath/>,
  college: <Collegefinder />
};

    return(
        <>
         
     
          <header>
           <h6 class=" head2"><button class="headbtn" >CA</button >    Career Advisor </h6>
           <div class="head21">
         
             <a  href="#"
                className={activeTab === "dashboard" ? "h active" : "h"}
                onClick={() => setActiveTab("dashboard")}> 
                <FontAwesomeIcon className='h'  icon={faHouse}  /> DashBoard
             </a>
            <a  href="#"
                    className={activeTab === "college" ? "h active" : "h"}
                    onClick={() => setActiveTab("college")}> 
                   <FontAwesomeIcon className='h'  icon={faLocationDot}  /> College Finder
            </a>
           <a href="#"
                className={activeTab === "careerpath" ? "h active" : "h"}
                // onClick={() => setActiveTab("careerpath")}> 
              >  Career Path
            </a>
           <a  href="#"
                className={activeTab === "aptitudetest" ? "h active" : "h"}
                // onClick={() => setActiveTab("Aptitudetest")}> 
               > <FontAwesomeIcon className='h'  icon={faBrain}  /> Aptitude Test
            </a>
           </div>
           <FontAwesomeIcon className='hsp' icon={faGlobe} /> 
           <FontAwesomeIcon className='h'  icon={faArrowRightFromBracket} style={{fontSize: '20px'}} />
         
        </header> 

      {/* Content */}
     <div className="content">{tabComponents[activeTab]}</div>
   
    </>
  );
}
        
      export default Maincomponent;