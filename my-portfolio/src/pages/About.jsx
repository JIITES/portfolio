import React from 'react'

const About = () => {
  return (
    <section className="text-white bg-gray-900 min-h-screen flex items-center justify-center px-4">
      <article className="max-w-3xl pt-14">
        <h1 className="text-5xl font-bold ">Hello</h1>
        <p className="text-lg leading-relaxed pt-7">
          Hi, I'm <span className="font-semibold text-blue-400">Jithesh D R</span>, a dedicated frontend developer with a strong focus on building clean, user-friendly web interfaces. I'm currently a trainee web developer and have completed my 6th semester of a diploma program.
          <br /><br />
          Over the past few months, I’ve built several real-world projects — including a grocery e-commerce site, blog app, and a job board — using React, Tailwind CSS, JavaScript, and modern frontend tools like Vite.
          <br /><br />
          I enjoy translating ideas into responsive, visually appealing UIs. I’ve learned not just how to make websites functional, but also how to make them feel polished and professional. Right now, I'm focused on sharpening my frontend skills, working on project structure, reusable components, and deepening my understanding of layout and styling.
          <br /><br />
          I'm actively looking for <span className="font-semibold text-green-400">internships</span> or <span className="font-semibold text-green-400">junior frontend developer roles</span>, where I can contribute to real-world projects and continue growing as a developer.
        </p>
        <education className= '' >
          <h1 className='text-amber-50 text-3xl font-bold pt-9 pl-7'>My eduction</h1>
          <div className='flex  col-end-3   pt-6  pr-22 '>
            <div >
            <p className=' text-blue-300'>Diploma  year(2023-2025) </p>
            <p>Dimploma in c.s </p>
            <p>college-p.a polytechnich collehe manglaore,karnataka</p>
             </div>
             <div>
            <p className=' text-blue-300'>PUC  year(2022-2023) </p>
            <p>puc in commerce  </p>
            <p>college- G.p.u.c mudipu,karnataka </p>
             </div>
             <div>
            <p className='text-blue-300'>SSLC year(2018-2021) </p>
            <p>sslc in karnataka state board</p>
            <p>k.p.s kanyana,karnataka</p>
             </div>
             
             
          </div>
        </education>
      </article>
    </section>
  );
};

export default About;