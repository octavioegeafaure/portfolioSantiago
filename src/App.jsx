import './App.css'
import { Route, Routes } from "react-router-dom";
import { Home } from './Home'
import { Footer } from './Footer/Footer';
import {Projects} from './Projects/Projects';
import {ProjectsDetalle} from './ProjectsDetalle/ProjectsDetalle';
import { About } from './About/About';

import { HashRouter } from "react-router-dom";
function App() {
  return (
    <>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/projects/" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectsDetalle />} />
        <Route path="/about/" element={<About />} />
        <Route path="/contact/" element={<Footer />} />
      </Routes>
    </HashRouter>   
    </>
  )
}

export default App
