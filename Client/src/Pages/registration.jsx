import React from 'react'
import { Link } from 'react-router'

const registration = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-blue-100 to-white">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Connect</h1>
        <h2 className="text-xl font-semibold text-center mb-4 text-blue-600">Register</h2>
        
        {/* form area */}
        <form className="space-y-4">
          {/* fullname */}
          <input
            type="text"
            placeholder="fullname"
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-300"
          />
          {/* email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-300"
          />
          {/* password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-300"
          />
          {/* button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 rounded-md shadow-md hover:opacity-90 transition-all duration-300"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default registration