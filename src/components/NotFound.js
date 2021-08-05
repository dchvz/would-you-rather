import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NotFound(props) {
  return (
    <div>
      <p className="font-bold text-custom-lg">404</p>
      <p className="text-center mb-5">
        This route does not exist, please authenticate before you continue
      </p>
      <NavLink
        to="/"
        exact
        className="shadow bg-cerise-red-600 hover:bg-cerise-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
      >
        Back to Sign in
      </NavLink>
    </div>
  )
}