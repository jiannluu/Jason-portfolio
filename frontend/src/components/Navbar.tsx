import React, { useState } from 'react'
import { IoReorderThree, IoClose } from 'react-icons/io5'
import { IconContext } from 'react-icons'
import logo from '../assets/logo.png'

const Navbar = (): JSX.Element => {
  // menuStatus keeps track of if the dropdown menu is currently open
  const [menuStatus, setMenuStatus] = useState(false)

  //  toggle drop down menu on mobile
  const onToggleMenu = (): void => {
    const dropMenu = document.getElementById('drop-menu')
    // toggle menuStatus state
    menuStatus ? setMenuStatus(false) : setMenuStatus(true)
    // toggle dropdown menu
    dropMenu?.classList.toggle('top-[9%]')
  }

  return (
        // navbar responsive to mobile view
        <div className='flex justify-between p-2.5 items-center w-[92%] mx-auto'>
            <a className='cursor-pointer hover:animate-spin transition-transform 0.12s'>
                <img src={logo} alt='logo' className='w-[4em]'/>
            </a>

            {/* hover effect for navbar links */}
            <div className="md:static absolute md:min-h-fit min-h-[35vh] bg-white left-0 top-[-100%] md:w-auto w-full flex items-center px-5 z-30 ease-in-out duration-500" id="drop-menu">
                <ul className='flex md:flex-row flex-col md:items-center md:gap-3.5 gap-8'>
                    <li className="ml-7 mr-7 pl-1 pr-1 md:font-medium text-lg text-gray-900 relative group cursor-pointer">
                        <span>About Me</span>
                        <span className="md:absolute -bottom-1 left-1/2 w-0 h-1 bg-gray-700 group-hover:w-1/2 group-hover:transition-all"></span>
                        <span className="md:absolute -bottom-1 right-1/2 w-0 h-1 bg-gray-700 group-hover:w-1/2 group-hover:transition-all"></span>
                    </li>
                    <li className="ml-7 mr-7 pl-1 pr-1 md:font-medium text-lg text-gray-900 relative group cursor-pointer">
                        <span>Skills</span>
                        <span className="md:absolute -bottom-1 left-1/2 w-0 h-1 bg-gray-700 group-hover:w-1/2 group-hover:transition-all"></span>
                        <span className="md:absolute -bottom-1 right-1/2 w-0 h-1 bg-gray-700 group-hover:w-1/2 group-hover:transition-all"></span>
                    </li>
                    <li className="ml-7 mr-7 pl-1 pr-1 md:font-medium text-lg text-gray-900 relative group cursor-pointer">
                        <span>Projects</span>
                        <span className="md:absolute -bottom-1 left-1/2 w-0 h-1 bg-gray-700 group-hover:w-1/2 group-hover:transition-all"></span>
                        <span className="md:absolute -bottom-1 right-1/2 w-0 h-1 bg-gray-700 group-hover:w-1/2 group-hover:transition-all"></span>
                    </li>
                    <li className="ml-7 mr-7 pl-1 pr-1 md:font-medium text-lg text-gray-900 relative group cursor-pointer md:hidden">
                        <span>Contact Me</span>
                        <span className="md:absolute -bottom-1 left-1/2 w-0 h-1 bg-gray-700 group-hover:w-1/2 group-hover:transition-all"></span>
                        <span className="md:absolute -bottom-1 right-1/2 w-0 h-1 bg-gray-700 group-hover:w-1/2 group-hover:transition-all"></span>
                    </li>
                </ul>
            </div>

            {/* hover effect for contact me button */}
            <a href="#_" className="hidden relative md:inline-block text-lg group">
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span className="relative">Contact Me</span>
                </span>
                <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
            </a>

            {/* menu and menuclose button on mobile view */}
            <IconContext.Provider value={{ size: '2em' }}>
                <button className="md:hidden z-50 bg-white" onClick={onToggleMenu}>
                    {/* dynamically change menu to close icon based on state to see if the menu is open or closed */}
                    {
                        menuStatus ? <IoClose /> : <IoReorderThree />
                    }
                </button>
            </IconContext.Provider>
        </div>
  )
}

export default Navbar
