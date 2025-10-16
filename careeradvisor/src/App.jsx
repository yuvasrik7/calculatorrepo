import React from 'react'
import Page1 from './components/Page1';
import { Page2 } from './components/page2';
import { Maincomponent } from './components/Maincomponent';
import { Dashboard} from './components/Dashboard';

// npm run dev

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Collegefinder from './components/collegefinder';



export const App=()=>
{


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 />} />      
        <Route path="/Page2" element={<Page2 />} />
        <Route path="/Maincomponent" element={ <Maincomponent/>}/>
        <Route path="/Page1" element={<Page1/>}/>
        <Route path="/Collegefinder" element={<Collegefinder/>}/>
        {/* <Route path="/AptitudeTest" element={<Aptitudetest/>}/> */}
       
          
      </Routes>
    </BrowserRouter>
   
    
    </>
  )
}

export default App;
