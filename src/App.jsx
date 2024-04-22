
import './App.css'
import About from './Components/About/About'
import Banner from './Components/Banner/Banner'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Qualification from './Components/Qualification/Qualification'
import Services from './Components/Services/Services'
import Skills from './Components/Skills/Skills'
import Testimonials from './Components/Testimonials/Testimonials'

function App() {


  return (
    <>
      <div>
        <Navbar></Navbar>
       <Banner></Banner>
       <About></About>
       <Skills></Skills>
       <Services></Services>
       <Qualification></Qualification>
       <Testimonials></Testimonials>
       <Contact></Contact>
       <Footer></Footer>
      </div>
    </>
  )
}

export default App
