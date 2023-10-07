import './App.css'
import { Route } from "wouter";
import { Home } from './Home'
import { Footer } from './Footer/Footer';
import {Projects} from './Projects/Projects';

function App() {
  return (
    <>
        <Route path="/portfolioSantiago"  ><Home /></Route>
        <Route path="/portfolioSantiago/contact"  ><Footer /></Route>
        <Route path="/portfolioSantiago/projects"  ><Projects /></Route>
    </>
  )
}

export default App
