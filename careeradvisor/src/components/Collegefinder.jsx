import React from 'react';
import './Collegefinder.css' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faBookOpen } from '@fortawesome/free-solid-svg-icons'; 
 import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
 import { faMedal } from '@fortawesome/free-solid-svg-icons';

export const Collegefinder=()=>
{   let count=0;

    return(
        <> 
        <div className='colhead'>
           <h1>Government College Finder 🎓</h1>
           <p style={{marginleft:'30px'}}>Discover nearby government colleges with detailed information and facilities</p>
      
        <div className='colbox' >
            <div className='colbox1'>
            <input className='inputcol1' placeholder="Search colleges courses and locations"/>
            </div>
            <div className='colbox2'>
                 <input className='inputcol2' placeholder='All Streams'/>
            </div>
            <div className='colbox3 colicon'>
                <FontAwesomeIcon icon={faLocationDot} className='colicon'></FontAwesomeIcon>
                <input className='inputcol3' placeholder='All Locations'/>
            </div>

        </div>
          </div>
        <div className='colbody'>
            <p className='colbodyp'>
                Found <span className='colcount'>{count}</span> matching your criteria
            </p>
        </div>
        <div className='collegedetail'>
            <img src="https://tse1.mm.bing.net/th/id/OIP.lnboVok2ZDMqwIcTF6fieQHaEo?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"></img>
            <div className='eachcollege'>
                        <div className='collegetitle'>
                            <div className='name'>
                                <h4 className='collegeName'>Delhi University-Miranda house</h4>
                                <p>🏛️ North Delhi, Delhi,  2.5 away</p>
                                <p>Est.1948      Women's college</p>
                            </div>
                            <div className='rating'><p> ⭐4.8</p></div>
                        </div>
                        <div className='detail1'>
                            <div className='b1'>
                                <FontAwesomeIcon icon={faUser}/>
                                <p className='colora1'>2500</p>
                                <p>Students</p>
                            </div>
                             <div className='b2'>
                                <FontAwesomeIcon icon={faBookOpen} />
                                <p  className='colora2'><span className="fee">15000</span>/year</p>
                                <p>Annual fees</p>
                            </div>
                             <div className='b3'>
                               <FontAwesomeIcon icon={faMedal}/>
                                <p  className='colora3'><span className='percent'>95%</span></p>
                                <p>Last cutoff</p>
                            </div>
                        </div>
                         <p style={{color:'black',fontSize:'15px',fontWeight:'600'}}>Popular Courses:</p>
                        <div className='courses'>
                            <p>B.A(Hons)English</p>
                             <p>B.A(Hons) History</p>
                             <p>B.A(Hons)Physics</p>
                            

                        </div>
                        
                        <p style={{color:'black',fontSize:'15px',fontWeight:'600'}}>Facilites:</p>
                        <div className='facilities'>
                            
                            <p>Library</p>
                            <p>Hostel</p>
                            <p>sports</p>
                            <p>Wifi</p>
                        </div>
                         <hr></hr>
                        <div className='contact'>
                            <p>9991796433</p>
                            <p className="email">www.mirandahouse.ac.in</p>
                            <button>direct</button>
                        </div>
             </div>
        </div>
           
        
        </>
    )
}
export default Collegefinder;