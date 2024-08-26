import { About } from "./components/about"
import { Contact } from "./components/contact/contactForm"
import { Header } from "./components/header"
import { Home } from "./components/home"
import Portfolio from "./components/portfolio"
import { Skills } from "./components/skills"
import { WorkExperience } from "./components/workExperience"

/* Importar os estilos padrão do react-slick */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from "./components/footer"


function App() {


  return (
    <div className="bg-gray-300">
      <Header/>
      <Home/>
      <About/>
      <WorkExperience/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
