import { Banner } from "./Banner/Banner"
import { Header } from "./Header/Header"
import PrimerProyecto from "./PrimerProyecto/PrimerProyecto"
import PruebaHover from "./PruebaHover/PruebaHover"

export const Home = () => {
  return (
    <div>
        <Header />
        <Banner />
        <PrimerProyecto />
        {/* <PruebaHover /> */}
    </div>
  )
}
