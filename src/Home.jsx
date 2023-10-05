import { Banner } from "./Banner/Banner"
import { Header } from "./Header/Header"
import "./Home.css"
export const Home = () => {
  return (
    <div className="home">
        <Header />
        <Banner />
    </div>
  )
}
