import './App.css'
import { Routes,Route } from 'react-router-dom'
import About from './pages/About'
import Achives from './pages/Achives'
import Home from './pages/Home'
import Navbar from './Navbar/Navbar'
import Contact from './conatct/Contact'
import Contactme from './pages/Contactme'
import Footer from './Newsletter/Footer'
import { useRef } from 'react'
import Smallproject from './Smallprojects/Smallproject'
function App() {
  const projectRef = useRef(null);
    const scrollToProjects= () => {
      projectRef.current.scrollIntoView({ behavior: 'smooth' });

    }

  return (
    <>
    <div  className='flex flex-col min-h-screen'>
      <Navbar onProjectsClick={scrollToProjects} />
      <main className='flex-grow'>
      <Routes>
        <Route path='/' element={<Home projectRef={projectRef}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='achive/' element={<Achives/>}/>
        <Route path='contact/' element={<Contact/>}/>
<Route path="contactsof/" element={<Contactme/>}/>
  <Route path='Sporjects/' element={<Smallproject/>}/>
      </Routes>
      </main>
      
 <Footer/>
      
        </div>
        
         
         
    </>
  )
}

export default App
