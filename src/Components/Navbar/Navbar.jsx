import { useState } from "react"
import logo from "../../Images/protfolio_logo.png"
import { useEffect } from "react"


const Navbar = () => {
    const navlinks = <>
  <li className="hover:text-blue-500 hover:font-bold">Home</li>
   <li className="hover:text-blue-500 hover:font-bold">About</li>
    <li className="hover:text-blue-500 hover:font-bold">Skills</li>
    <li className="hover:text-blue-500 hover:font-bold">Service</li>
    <li className="hover:text-blue-500 hover:font-bold">Portfolio</li>
    <li className="hover:text-blue-500 hover:font-bold">Contact</li>
    </>


// dark and light mode 

const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")

  const handleClickMode = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    }
    else {
      setTheme("light");
    }
  }

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localtheme = localStorage.getItem("theme");

    document.querySelector("html").setAttribute("data-theme", localtheme);
  }, [theme])
  return (
    <>
       <div className="navbar bg-base-200">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navlinks}
      </ul>
    </div>
    <img className="btn btn-ghost ml-16" src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu space-x-5 text-xl  font-medium menu-horizontal px-1">
      {navlinks}
    </ul>
  </div>
  <div className="ml-12">
  <input type="checkbox" checked={theme === "light" ? false : true} onChange={handleClickMode} className="toggle theme-controller"/>
  </div>
</div> 
    </>
  )
}

export default Navbar