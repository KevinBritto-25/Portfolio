import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary" >
        <div className="relative h-screen w-full overflow-hidden">
          <div className="bg-hero-pattern bg-cover bg-center h-full w-full animate-zoom"></div>
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <Navbar />
            <Hero />
          </div>
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="realative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
