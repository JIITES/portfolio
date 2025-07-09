import React from 'react'
import { projects } from '../asset/asset'

const Project = () => {
  return (
    <div className="pt-[250px] px-4">
      <h1 className="text-emerald-300 text-5xl font-bold mb-8">Projects</h1>

      <div className="flex flex-wrap gap-7 justify-center">
        {projects.map((item, index) => (
          <div
            key={index}
            className="text-white bg-neutral-400 w-[320px] sm:w-[400px] rounded-3xl transition-transform duration-300 transform hover:scale-105 p-5"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[220px] object-cover rounded-lg transition-transform duration-300 hover:scale-95"
            />
            <h2 className="font-bold text-xl mt-4 animate-pulse">{item.title}</h2>
            <p className="my-2">{item.description}</p>

            <div className="mt-4 flex gap-4">
              <a
                href={item.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-300 text-blue-700 px-4 py-1 rounded hover:underline"
              >
                View Project
              </a>
              <a
                href={item.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-600 text-blue-100 px-4 py-1 rounded hover:underline"
              >
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
