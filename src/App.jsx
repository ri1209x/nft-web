
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'


function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/projects" element={<Page2 />} /> */}
    </Routes>
  )
}

export default App
