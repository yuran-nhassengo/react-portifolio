import { Contact } from "./components/contact/contactForm"
import { Header } from "./components/header"
import { Home } from "./components/home"


function App() {


  return (
    <div className="bg-gray-200">
      <Header/>
      <Home/>
      <Contact/>
    </div>
  )
}

export default App
