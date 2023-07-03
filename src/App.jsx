import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Contact from './components/Contact/Contact'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/Services/Services'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header></Header>
     <Nav></Nav>
     <About></About>
     <Experience></Experience>
     <Services></Services>
     <Contact></Contact>
     <Footer></Footer>
    </>
  )
}

export default App
