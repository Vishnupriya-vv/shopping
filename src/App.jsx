import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import { Route,Routes } from 'react-router-dom'
import Basic_table from './component/Basic_table'
import Basic_card from './component/Basic_card'



function App() {   
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
   <Routes>
    <Route path="/b" element={<Basic_table/>}/>
    <Route path="/c" element={<Basic_card/>}/>

   </Routes>
    </>
  )
}

export default App