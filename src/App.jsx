import './App.css'
import { Route } from "react-router-dom";
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
        <Route path="/portfolioSantiago" element={<Home />}  />
        <Route path="/portfolioSantiago/projects/" element={<Projects />} />
        <Route path="/portfolioSantiago/projects/:id" element={<ProjectsDetalle />} />
        <Route path="/portfolioSantiago/about/" element={<About />} />
        <Route path="/portfolioSantiago/contact/" element={<Footer />} />
    </HashRouter>   
    </>
  )
}

export default App
