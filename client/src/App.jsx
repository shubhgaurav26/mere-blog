import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Abuot from './pages/Abuot'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'   
import Home from './pages/Home'


export default function App() {
  return (
    <BrowserRouter>
     <Routes>
     
      <Route path="/" element={<Home/>}/>
      <Route path="/abuot" element={<Abuot/>}/>
      <Route path="/sign-in" element={<Signin/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/projects" element={<Projects/>}/>


     </Routes>
      
    </BrowserRouter>
  )
}
