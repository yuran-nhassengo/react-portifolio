import { About } from "./components/about"
import { Contact } from "./components/contact/contactForm"
import { Header } from "./components/header"
import { Home } from "./components/home"
import Portfolio from "./components/portfolio"
import { Skills } from "./components/skills"
import { WorkExperience } from "./components/workExperience"


function App() {


  return (
    <div className="bg-gray-200">
      <Header/>
      <Home/>
      <About/>
      <WorkExperience/>
      <Skills/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}

export default App
