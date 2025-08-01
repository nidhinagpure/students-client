import { BrowserRouter, Routes, Route } from 'react-router'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from "./view/Home.jsx"
import Add from "./view/Add.jsx";
import Edit from "./view/Edit.jsx";


createRoot(document.getElementById('root')).render(
  <div className='bg-blue-50 m-0 p-0 min-h-screen'>

  <BrowserRouter>
  <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/add" element={<Add />}/>
      <Route path="/edit/:userid" element={<Edit />}/>

  </Routes>
  </BrowserRouter>
  </div>
  
)
