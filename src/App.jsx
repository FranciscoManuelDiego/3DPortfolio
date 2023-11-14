import { BrowserRouter } from "react-router-dom"
import {About, Contact, Experience, 
    Feedbacks, Hero, Loader, Navbar,
Tech, ProjectsDone, StarsCanvas } from "./components"
function App() {
    return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover
        bg-no-repeat bg-center">
            <Navbar/>
            <Hero/>
        </div>
    <div>
        <About/>
        <Experience />
        <Tech />
        <ProjectsDone />
        <Feedbacks />
    </div>
    </div>
        <div className="relative z-0">
            <Contact />
            <StarsCanvas />
        </div>
    </BrowserRouter>
    )
}

export default App
