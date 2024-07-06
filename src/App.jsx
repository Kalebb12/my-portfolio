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
        <Route path="/my-portfolio/" element={<Home/>}/>
        <Route path="/my-portfolio/resume" element={<Resume/>}/>
      </Routes>
    </div>
  )
}

export default App
