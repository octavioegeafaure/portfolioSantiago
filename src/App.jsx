import './App.css'
import { Route, Switch } from "wouter";
import { Home } from './Home'
import { Footer } from './Footer/Footer';
import {Projects} from './Projects/Projects';
import {ProjectsDetalle} from './ProjectsDetalle/ProjectsDetalle';
import { About } from './About/About';

function App() {
  return (
    <>
    <Switch>
        <Route path="/portfolioSantiago"  ><Home /></Route>
        <Route path="/portfolioSantiago/projects/"  ><Projects /></Route>
        <Route path="/portfolioSantiago/projects/:id"  ><ProjectsDetalle /></Route>
        <Route path="/portfolioSantiago/about/"  ><About /></Route>
        <Route path="/portfolioSantiago/contact/"  ><Footer /></Route>
        

    </Switch>
   
        {/* <Route path="/portfolioSantiago/projects/:id" component={ProjectsDetalle} /> */}
        
      
    </>
  )
}

export default App
