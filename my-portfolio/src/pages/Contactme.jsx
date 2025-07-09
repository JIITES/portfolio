import React from 'react'

const Contactme = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black px-8 py-20 text-white">
      <h1 className="text-5xl font-extrabold mb-10 text-center bg-gradient-to-r from-green-400 via-white to-green-300 bg-clip-text text-transparent">
        Get in Touch
      </h1>

      <div className="bg-gray-800 rounded-2xl shadow-[0_0_30px_rgba(144,238,144,0.5)] p-8 w-full max-w-lg flex flex-col gap-6 text-lg sm:text-xl transition-transform duration-300 hover:scale-105">
        <p className="font-semibold">
          👤 <span className="text-green-300">Name:</span> Jithesh D R
        </p>

        <a
          href="tel:+917736880239"
          className="hover:text-green-400 transition"
        >
          📞 <span className="text-green-300">Phone:</span> +91 7736880239
        </a>

        <a
          href="mailto:jitheshdr.dev@gmail.com"
          className="hover:text-green-400 transition"
        >
          📧 <span className="text-green-300">Email:</span> jitheshdr.dev@gmail.com
        </a>

        <p>
          📍 <span className="text-green-300">Location:</span> Hyderabad, India
        </p>

        <a
          href="https://linkedin.com/in/jitheshdr"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transition"
        >
          🔗 <span className="text-green-300">LinkedIn:</span> linkedin.com/in/jitheshdr
        </a>
      </div>
    </div>
  )
}

export default Contactme
