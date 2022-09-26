import Action from "./components/Action"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Shorten from "./components/Shorten"

function App() {

  return (
    <div className="font-Poppins">
      <Header/>
      <Hero/>
      <Shorten/>
      <Features/>
      <Action/>
      <Footer/>
    </div>
  )
}

export default App
