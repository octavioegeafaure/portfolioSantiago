import { Banner } from "./Banner/Banner"
import { Header } from "./Header/Header"
import PrimerProyecto from "./PrimerProyecto/PrimerProyecto"
import SegundoProyecto from "./SegundoProyecto/SegundoProyecto"

export const Home = () => {
  return (
    <div>
        <Header />
        <Banner />
        <PrimerProyecto />
        <SegundoProyecto />
    </div>
  )
}
