import React from 'react';
import './Page1.css';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
export const Page1=()=>
{   const navigate=useNavigate()
     const getstart=()=>
{
    navigate("/Page2");
};

return(<>
     <header class="head">
        <h4 ><button class="headbtn" >CA</button>Career Advisor </h4>
        <button class="btn">Login</button>
     </header>
    
     <body>
        <main>
            
            <h1 class="headp">Your Career Journey Starts Here</h1>
            <p>Get personalized guidance for choosing the right course and college</p>
            <div class="mainbutton">
            <button class="mainbtn" onClick={getstart}>Get Started <FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffff" }} /></button>
            <button class="learnmore">Learn More</button>
            </div>
            <div class="container">
                <div class="text">
                    <div class="text1">500+</div>
                    <div class="text2">Government Colleges</div>
                </div>
                <div class="text">
                    <div class="text1">50+</div>
                    <div class="text2">Career Paths</div>
                </div>
                <div class="text">
                    <div class="text1">10,000</div>
                    <div class="text2">Students Helped</div>
                </div>
                <div class="text">
                    <div class="text1">95%</div>
                    <div class="text2">Success Rate</div>
                </div>

            </div>
           
        </main>
        <div class="textarea">
            <h2>Everything You Need for Your Career Journey</h2>
            <p>Comprehensive tools and guidance to help your make informed educational decisions</p> 
         </div>
         <div class="container2">
            <div class="box1">
                <button class="gridbtn">h</button>
                <div class="line1">Aptitude Assessment</div>
                <div class="line2">Take personalized quizzes to discover your strengths and interests</div>
            </div>
             <div class="box1">
                <button class="gridbtn">h</button>
                <div class="line1">College Finder</div>
                <div class="line2">Find nearby government colleges with detailed information and maps</div>
            </div>
             <div class="box1">
                <button class="gridbtn">h</button>
                <div class="line1">Career Mapping</div>
                <div class="line2">Explore career paths and opportunities for each course</div>
            </div>
             <div class="box1">
                <button class="gridbtn">h</button>
                <div class="line1">Expert Guidance</div>
                <div class="line2">Get advice from qualified and counselors</div>
            </div>
         </div>
         <div class="block">
            <h2 class="blockh2">Ready to Start Your Journey?</h2>
            <p class="blockp">Join thousands of students who have found their perfect career path</p>
            <button class="blockbutton" onClick={getstart} >Get Started Now  <FontAwesomeIcon icon={faArrowRight} style={{ color:"#3251efff"  }}/></button>
         </div>
         
     </body>
     <footer class="footer">
        <div class="ca">
            <h3 ><button class="headbtn" >CA</button>  Career Advisor </h3>
            <p class="footerp">Empowering students to make informed career decisions through personalized guidance and comprehensive resources.</p>
         </div>
         
         <div class="quicklinks"> 
            <h3>Quick Links</h3>
            <p>Login</p>
            <p>Feature</p>
            <p>About</p>
            <p>Contact</p>
        </div>

        <div class="democred">
            <h3>Demo Credentials</h3>
            <p><span class="demohead" >Student: </span><span class="user">student_demo</span> / <span class="pass">student1123</span></p>
            <p><span class="demohead">Teacher: </span>teacher_demo / teacher123</p> 
            <p><span class="demohead">Government:</span> gov_amin / gov123</p>
        </div>

       
     </footer>
     
      <div class="credits">
        <hr></hr>
            <p>&copy; 2025 Career Advisor Platform.Built for Smart India Hackathon</p>
        </div>

</>)
}
export default Page1;