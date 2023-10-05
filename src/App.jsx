import './App.css'
import { Home } from './Home'
import { Route } from "wouter";
import { Header } from './Header/Header';
import { Banner } from './Banner/Banner';
import { Footer } from './Footer/Footer';

function App() {
  return (
    <>
        <Route path="/portfolioSantiago"  ><Home /></Route>
        <Route path="/portfolioSantiago/contact"  ><Footer /></Route>
    </>
  )
}

export default App
