import React from 'react';
import './Page3.css';
import { useNavigate } from 'react-router-dom';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-regular-svg-icons/faUser';
// import { faLock } from '@fortawesome/free-regular-svg-icons/faLock';
export const Page3=()=>
{
// {   const navigate=useNavigate();
//     const home=()=>
//     {
//         navigate("/Page1");
//     }
    return(
        <> 
        <header>
           <h6 class=" head2"><button class="headbtn" >CA</button >    Career Advisor </h6>
           <p>DashBoard</p>
           <p>College Finder</p>
           <p>Career Path</p>
           <p>Aptitude Test</p>
           <button>id</button>

        </header> 
        <body>

            <h1>Welcome,<span> Rahul!</span>👋</h1>
            <p class="p1">Let's continue building your educational journey</p>
            <div class="dashblk1">
                <div class="top-row">
                    <h3>Your Progress</h3>
                    <h3>68%</h3>
                </div>
                <div class="line"></div>
                <div class="new">
                    <h3>Aptitude Test</h3>
                    <h3>Career Explored</h3>
                    <h3>Career Path</h3>
                </div>
            </div>
            <div class="dashblk2">
                <h3>Quick Actions</h3>
                <div class="takeaptitude">
                    <p class="takeaptitudehead">Take Aptitude Test</p>
                    <p>Discover your strengths and interest</p>
                </div>
                <div class="findcollege">
                    <p class="findcollegehead">Find College</p>
                    <p>Find nearby Government College</p>
                </div>
                 <div class="Explorecareer">
                    <p class="Explorecareerhead">Explore Career Paths</p>
                    <p>Explore different Career options</p>
                </div>
            </div>

        </body>
        </>
        );
    }
    export  default Page3;