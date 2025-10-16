import React from 'react';
import './Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


export const Dashboard=()=>
{
{   const navigate=useNavigate();
    const college=()=>
    {
        navigate("/Collegefinder");
    }
    // const test=()=>
    // {
    //     navigate("/Aptitutdetest");
    // }
    return(
        <> 
        {/* <header>
           <h6 class=" head2"><button class="headbtn" >CA</button >    Career Advisor </h6>
           <div class="head21">
           <a>  <FontAwesomeIcon className='h'  icon={faHouse}  /> DashBoard</a>
           <a> <FontAwesomeIcon className='h'  icon={faLocationDot}  /> College Finder</a>
           <a>Career Path</a>
           <a> <FontAwesomeIcon className='h'  icon={faBrain}  /> Aptitude Test</a>
           </div>
           <FontAwesomeIcon className='h' icon={faGlobe} /> 
           <FontAwesomeIcon className='h'  icon={faArrowRightFromBracket} style={{fontSize: '20px'}} />
         
        </header>  */}
        <div>

            <h1>Welcome,<span> Rahul!</span>👋</h1>
            <p class="p1">Let's continue building your educational journey</p>
            <div class="dashblk1">
                <div class="top-row">
                    <h3>Your Progress</h3>
                    <h3>68%</h3>
                </div>
                <div class="line"><div class="line0"></div></div>
                <div class="new">
                    <h3>Aptitude Test</h3>
                    <h3>Career Explored</h3>
                    <h3>Career Path</h3>
                </div>
            </div>
            <div class="dashblk2">
                <h3>Quick Actions</h3>
                <div class="dashblk21">
                <div class="takeaptitude">
                    <p class="takeaptitudehead"> <FontAwesomeIcon className='h'  icon={faBrain}  />Take Aptitude Test</p>
                    <p>Discover your strengths and interest</p>
                </div>
                <div class="findcollege" onClick={college}>
                    <p class="findcollegehead">  <FontAwesomeIcon className='h'  icon={faLocationDot} />Find College</p>
                    <p>Find nearby Government College</p>
                </div>
                 <div class="Explorecareer" >
                    <p class="Explorecareerhead">Explore Career Paths</p>
                    <p>Explore different Career options</p>
                </div>
                </div>
            </div>

        </div>
        </>
        );
    }
}
    export  default Dashboard;