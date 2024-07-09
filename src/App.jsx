import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Resume from './pages/resume'
import Navbar from './components/navbar/navbar'

function App() {
  return (
    <div>
        <Navbar/>
      <Routes>
        <Route path="/caleb-portfolio/" element={<Home/>}/>
        <Route path="/caleb-portfolio/Resume" element={<Resume/>}/>
      </Routes>
    </div>
  )
}

export default App
