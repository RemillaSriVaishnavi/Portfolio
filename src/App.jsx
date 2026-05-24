import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Certifications from './sections/Certifications'
import CodingProfiles from './sections/CodingProfiles'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <CodingProfiles />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App