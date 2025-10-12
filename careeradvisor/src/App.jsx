import React from 'react'
import Page1 from './components/Page1';
import { Page2 } from './components/page2';
import { BrowserRouter, Routes, Route } from "react-router-dom";



export const App=()=>
{


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 />} />       {/* Default page */}
        <Route path="/Page2" element={<Page2 />} />
        <Route path="/Page1" element={<Page1/>} />
          {/* Target page */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
