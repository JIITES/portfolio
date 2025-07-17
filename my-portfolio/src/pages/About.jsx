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
        <section className="px-4 py-10 bg-blue-950 text-white">
  <h1 className="text-amber-50 text-3xl font-bold mb-8 pl-2 sm:pl-7">My Education</h1>
  
  <div className="flex flex-col md:flex-row gap-6 md:gap-10 md:justify-evenly">
    
    {/* Diploma */}
    <div>
      <p className="text-blue-300 font-medium">Diploma (2023–2025)</p>
      <p>Diploma in Computer Science</p>
      <p>P.A. Polytechnic College, Mangalore, Karnataka</p>
    </div>

    {/* PUC */}
    <div>
      <p className="text-blue-300 font-medium">PUC (2022–2023)</p>
      <p>PUC in Commerce</p>
      <p>G.P.U.C Mudipu, Karnataka</p>
    </div>

    {/* SSLC */}
    <div>
      <p className="text-blue-300 font-medium">SSLC (2018–2021)</p>
      <p>SSLC – Karnataka State Board</p>
      <p>K.P.S Kanyana, Karnataka</p>
    </div>

  </div>
</section>

      </article>
    </section>
  );
};

export default About;