import React, { useState } from 'react'
import { IoReorderThree, IoClose } from 'react-icons/io5'
import { IconContext } from 'react-icons'

const Navbar = (): JSX.Element => {
  // menuStatus keeps track of if the dropdown menu is currently open
  const [menuStatus, setMenuStatus] = useState(false)

  //  toggle drop down menu on mobile
  const onToggleMenu = (): void => {
    const dropMenu = document.getElementById('drop-menu')
    // toggle menuStatus state
    menuStatus ? setMenuStatus(false) : setMenuStatus(true)
    // toggle dropdown menu
    dropMenu?.classList.toggle('top-[calc(98%)]')
  }

  // because the cards are stacked on top of each other, I can't use anchor tags to redirect to certain cards
  // using javascript we can calculate the y coordinate of each card and scroll their manually
  const scrollToTop = (): void => {
    window.scrollTo(0, 0)
  }

  const scrollToAbout = (): void => {
    const windowHeight = window.innerHeight
    console.log(windowHeight)
    window.scrollTo(0, (windowHeight + 584))
    onToggleMenu()
  }

  const scrollToSkill = (): void => {
    const windowHeight = window.innerHeight
    console.log(windowHeight)
    window.scrollTo(0, (windowHeight * 2 + 1334))
    onToggleMenu()
  }

  const scrollToProjects = (): void => {
    const windowHeight = window.innerHeight
    console.log(windowHeight)
    window.scrollTo(0, (windowHeight * 3 + 2084))
    onToggleMenu()
  }

  const scrollToContact = (): void => {
    window.scrollTo(0, document.body.scrollHeight)
    onToggleMenu()
  }

  return (
        // navbar responsive to mobile view
        <div className='flex justify-between w-[100%] p-2.5 items-center bg-white bg-opacity-50'>
            <button onClick={scrollToTop} className="relative h-9 w-9 flex justify-center items-center ml-[4%] border-2 before:absolute before:-bottom-2 before:-right-2 before:h-4 before:w-4 before:border-b-2 before:border-r-2 before:border-gray-900 before:transition-all before:duration-300 before:ease-in-out after:absolute after:-top-2 after:-left-2 after:h-4 after:w-4 after:border-t-2 after:border-l-2 after:border-gray-900 after:transition-all after:duration-300 after:ease-in-out hover:before:h-[calc(100%+16px)] hover:before:w-[calc(100%+16px)] hover:after:h-[calc(100%+16px)] hover:after:w-[calc(100%+16px)] m-2 cursor-pointer">
                <h1 className="font-bold text-gray-900">JL</h1>
            </button>

            {/* hover effect for navbar links */}
            <div className="md:static absolute md:min-h-fit min-h-[35vh] left-0 top-[-535%] md:w-auto w-full flex items-center px-5 bg-white md:bg-transparent z-30 ease-in-out duration-500" id="drop-menu">
                <ul className='flex md:flex-row flex-col md:items-center md:gap-3.5 gap-8'>
                    <li className="ml-7 mr-7 pl-1 pr-1 md:font-medium text-lg text-gray-900 relative group cursor-pointer">
                        <button onClick={scrollToAbout}>About Me</button>
                        <span className="md:absolute -bottom-1 left-1/2 w-0 h-1 bg-gray-700 group-hover:w-1/2 group-hover:transition-all"></span>
                        <span className="md:absolute -bottom-1 right-1/2 w-0 h-1 bg-gray-700 group-hover:w-1/2 group-hover:transition-all"></span>
                    </li>
                    <li className="ml-7 mr-7 pl-1 pr-1 md:font-medium text-lg text-gray-900 relative group cursor-pointer">
                        <button onClick={scrollToSkill}>Skills</button>
                        <span className="md:absolute -bottom-1 left-1/2 w-0 h-1 bg-gray-700 group-hover:w-1/2 group-hover:transition-all"></span>
                        <span className="md:absolute -bottom-1 right-1/2 w-0 h-1 bg-gray-700 group-hover:w-1/2 group-hover:transition-all"></span>
                    </li>
                    <li className="ml-7 mr-7 pl-1 pr-1 md:font-medium text-lg text-gray-900 relative group cursor-pointer">
                        <button onClick={scrollToProjects}>Projects</button>
                        <span className="md:absolute -bottom-1 left-1/2 w-0 h-1 bg-gray-700 group-hover:w-1/2 group-hover:transition-all"></span>
                        <span className="md:absolute -bottom-1 right-1/2 w-0 h-1 bg-gray-700 group-hover:w-1/2 group-hover:transition-all"></span>
                    </li>
                    <li className="ml-7 mr-7 pl-1 pr-1 md:font-medium text-lg text-gray-900 relative group cursor-pointer md:hidden">
                        <button onClick={scrollToContact}>Contact Me</button>
                        <span className="md:absolute -bottom-1 left-1/2 w-0 h-1 bg-gray-700 group-hover:w-1/2 group-hover:transition-all"></span>
                        <span className="md:absolute -bottom-1 right-1/2 w-0 h-1 bg-gray-700 group-hover:w-1/2 group-hover:transition-all"></span>
                    </li>
                </ul>
            </div>

            {/* hover effect for contact me button */}
            <button onClick={scrollToContact} className="hidden relative md:inline-block text-lg group mr-[4%]">
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span className="relative">Contact Me</span>
                </span>
                <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
            </button>

            {/* menu and menuclose button on mobile view */}
            <IconContext.Provider value={{ size: '2em' }}>
                <button className="md:hidden z-50" onClick={onToggleMenu}>
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
