import { Contact } from "./components/contact/contactForm"
import { Header } from "./components/header"
import { Home } from "./components/home"
import { Skills } from "./components/skills"


function App() {


  return (
    <div className="bg-gray-200">
      <Header/>
      <Home/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default App
