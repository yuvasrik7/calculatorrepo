import React from 'react';
import './Page2.css';
import { useNavigate } from 'react-router-dom';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-regular-svg-icons/faUser';
// import { faLock } from '@fortawesome/free-regular-svg-icons/faLock';
export const Page2=()=>
{   const navigate=useNavigate();
    const home=()=>
    {
        navigate("/Page1");
    }
    return(
        <>
        <div class="block1">
            <h4 class=" head2"><button class="headbtn" >CA</button >    Career Advisor </h4>
            <button> hindi</button>
            <h3>Welcome Back</h3>
            <p>Login to continue your educational journey</p>
        </div>
       
        <div className="block2">
            <label>Username</label>
            <div className="input-container">
                    {/* <FontAwesomeIcon icon={faUser} className="input-icon" /> */}
                <input className="input1" placeholder="student_demo" />
            </div>

            <label>Password</label>
            <div className="input-container">
                {/* <FontAwesomeIcon icon={faLock} className="input-icon" /> */}
                <input className="input2" placeholder="password" />
            </div>
            <button >Sign In</button>
       </div>
        <p class="demohead">Demo Credentials</p>
       <div class="block3">
           
            <div class="student">
                <p class="demo1">Student</p>
                <p>student_demo/student123</p>
            </div>
             <div class="teacher">
                <p class="demo2">Teacher</p>
                <p>teacher_demo/teacher123</p>
            </div>
             <div class="gover">
                <p class="demo3">Government</p>
                <p>gov_admin/gov123</p>
            </div>
       </div>
       <div class="link">
       <p class="end" onClick={home} >Back To Home</p>
       </div>
        
 
        </>
    )
}