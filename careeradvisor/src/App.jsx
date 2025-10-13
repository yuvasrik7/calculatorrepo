import React from 'react'
import Page1 from './components/Page1';
import { Page2 } from './components/page2';
import { Page3 } from './components/Page3';
import { BrowserRouter, Routes, Route } from "react-router-dom";



export const App=()=>
{


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 />} />      
        <Route path="/Page2" element={<Page2 />} />
        <Route path="/Page3" element={ <Page3/>}/>
          
      </Routes>
    </BrowserRouter>
   
    
    </>
  )
}

export default App;
