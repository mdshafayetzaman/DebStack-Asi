import { useState } from 'react'
import logo from '/logo-text.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="relative mx-auto mt-5 flex max-w-6xl items-center justify-between px-4">
  
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-2xl text-slate-600 md:hidden"
      >
        ☰
      </button>

      {/* Logo */}
      <div>
        <img src={logo} alt="DevStack" className="w-32 md:w-36" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:block">
        <ul className="flex items-center gap-7 text-sm text-slate-600">
          <li className="cursor-pointer text-pink-500">Home</li>
          <li className="cursor-pointer hover:text-pink-500">Technologies</li>
          <li className="cursor-pointer hover:text-pink-500">Projects</li>
          <li className="cursor-pointer hover:text-pink-500">About</li>
          <li className="cursor-pointer hover:text-pink-500">Contact</li>
        </ul>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3">
        <button className="text-sm text-slate-700">Sign In</button>

        <button className="btn btn-secondary rounded-full px-5">Sign Up</button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute left-4 right-4 top-14 z-50 rounded-xl bg-white p-5 shadow-lg md:hidden">
          <ul className="flex flex-col gap-4 text-sm text-slate-600">
            <li className="text-pink-500">Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar
