import React from 'react'
import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import Project from '../projects/Project'
import Getintouch from '../Contact/Getintouch'


const Home = ({projectRef}) => {
  return (
      <div  className="bg-blend-darken pt-[80px]" >{/*here added pt-[80px] because when you add classname="fixed top-0 left-0 w-full z-50  shadow-md"  in navbar  when  you click on  scrollbar itcorrectly works */}

      <div>     
         <Header/>
         <div id='project'>{/*this passed in were thev component is passed*/}

      <Banner/>
       <section ref={projectRef}>
               <Project/>

       </section>
      
          </div>
          
      </div>
      <div id='contact'>
        <Getintouch/>
      </div>
    </div>
  )
}

export default Home