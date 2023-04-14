import React, { useState } from 'react'
import waiter from '../assets/waiter.png'
import chef from '../assets/chef.png'
import shipment from '../assets/shipment.png'
import { BsChevronDoubleDown } from 'react-icons/bs'
import { SiReact, SiRedux, SiTypescript, SiCss3, SiHtml5, SiTailwindcss, SiSvelte, SiExpress, SiWebpack, SiMongodb, SiPostgresql, SiVite } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { FaNode } from 'react-icons/fa'
import { IconContext } from 'react-icons'

const Skills = (): JSX.Element => {
  // states to see which view is active (frontend, backend, tool/db) based on user interaction
  const [displayDefault, setDefault] = useState(true)
  const [displayFrontend, setFrontend] = useState(false)
  const [displayBackend, setBackend] = useState(false)
  const [displayTools, setTools] = useState(false)

  // click function that handles state changing based on user interaction
  // function will take a string: ex:'backend' to specify which buttton was clicked
  // user is able to toggle on and off view
  const clickHandler = (view: string): void => {
    // setting the image and its sibling text element to a var
    const waiterImg = document.getElementById('waiter')
    const waiterText = document.getElementById('waiter-text')
    const chefImg = document.getElementById('chef')
    const chefText = document.getElementById('chef-text')
    const supplierImg = document.getElementById('supplier')
    const supplierText = document.getElementById('supplier-text')

    // reset all state and styling to default
    setDefault(false)
    setFrontend(false)
    setBackend(false)
    setTools(false)
    waiterImg?.classList.replace('current:grayscale-0', 'current:grayscale')
    chefImg?.classList.replace('current:grayscale-0', 'current:grayscale')
    supplierImg?.classList.replace('current:grayscale-0', 'current:grayscale')
    waiterText?.classList.replace('inline-block', 'hidden')
    chefText?.classList.replace('inline-block', 'hidden')
    supplierText?.classList.replace('inline-block', 'hidden')

    // conditionally change state based on user click
    // for frontend view
    if (view === 'frontend' && !displayFrontend) {
      // set all other state to false and change frontend state to true
      setDefault(false)
      setBackend(false)
      setTools(false)
      setFrontend(true)
      // replace grayscale with grayscale-0 to give image color
      waiterImg?.classList.replace('current:grayscale', 'current:grayscale-0')
      // replace hidden with inline-block to make text visible
      waiterText?.classList.replace('hidden', 'inline-block')
    } else if (view === 'frontend' && displayFrontend) {
      // set all other state to false and change frontend state to true
      setDefault(true)
      setFrontend(false)
    // for backend view
    } else if (view === 'backend' && !displayBackend) {
      setDefault(false)
      setBackend(true)
      setTools(false)
      setFrontend(false)
      chefImg?.classList.replace('current:grayscale', 'current:grayscale-0')
      chefText?.classList.replace('hidden', 'inline-block')
    } else if (view === 'backend' && displayBackend) {
      setDefault(true)
      setBackend(false)
    // for tool/db view
    } else if (view === 'tools' && !displayTools) {
      setDefault(false)
      setBackend(false)
      setTools(true)
      setFrontend(false)
      supplierImg?.classList.replace('current:grayscale', 'current:grayscale-0')
      supplierText?.classList.replace('hidden', 'inline-block')
    } else if (view === 'tools' && displayTools) {
      setDefault(true)
      setTools(false)
    }
  }

  return (
    <div className="h-screen bg-white" id="skills">
        <h1 className="text-center text-gray-900 font-bold text-2xl xxs:text-4xl md:text-5xl lg:text-6xl pt-[40%] xxs:pt-[25%] pb-[8%] sm:pt-[20%] sm:pb-[6%] md:pt-[17%] md:pb-[2%] lg:pt-[12%] lg:pb-[5%] xl:pt-[8%] ease-in-out">
            Skills
        </h1>
        <div className="flex flex-row justify-around">
            <div className="flex flex-col items-center cursor-pointer group" onClick={() => { clickHandler('frontend') }}>
                <img src={waiter} className="w-[150px] h-[150px] duration-150 group-hover:scale-[135%] group-hover:duration-150 group-active:grayscale-0 group-active:scale-125 active current:grayscale" id="waiter"/>
                <strong className="text-center lg:text-xl mt-8 hidden group-hover:inline-block" id="waiter-text">Waiter (Frontend)</strong>
            </div>
            <div className="flex flex-col items-center cursor-pointer group" onClick={() => { clickHandler('backend') }}>
                <img src={chef} className="w-[150px] h-[150px] duration-150 group-hover:scale-[135%] group-hover:duration-150 group-active:grayscale-0 group-active:scale-125 active current:grayscale" id="chef"/>
                <strong className="text-center lg:text-xl mt-8 hidden group-hover:inline-block" id="chef-text">Chef (Backend)</strong>
            </div>
            <div className="flex flex-col items-center cursor-pointer group" onClick={() => { clickHandler('tools') }}>
                <img src={shipment} className="w-[150px] h-[150px] duration-150 group-hover:scale-[135%] group-hover:duration-150 group-active:grayscale-0 group-active:scale-125 active current:grayscale" id="supplier"/>
                <strong className="text-center lg:text-xl mt-8 hidden group-hover:inline-block" id="supplier-text">Suppliers (Tools/DB)</strong>
            </div>
        </div>
        {
          displayDefault
            ? <h1 className="absolute bottom-[20%] text-center mx-[15vh] lg:text-xl">
                Software development is like running a restaurant: both require careful planning, attention to detail, and the ability to adapt to changing tastes.
                And just like how a dish needs the perfect blend of spices to make it delicious, an app needs the perfect combination of design and functionality to make it a hit with users.
                <br></br>
                <br></br>
                <strong>Click on a role above to see the technologies I know for each role!</strong>
              </h1>
            : <></>
        }
        {
          displayFrontend
            ? <div className="absolute bottom-[10%] w-screen flex flex-row flex-wrap">
                <IconContext.Provider value={({ size: '3em' })}>
                  <div className="flex flex-col flex-1 justify-center items-center mx-[5vw] my-[2vh]">
                    <SiTypescript />
                    <h1>TypeScript</h1>
                  </div>
                  <div className="flex flex-col flex-1 justify-center items-center mx-[5vw] my-[2vh]">
                    <SiHtml5 />
                    <h1>HTML</h1>
                  </div>
                  <div className="flex flex-col flex-1 justify-center items-center mx-[5vw] my-[2vh]">
                    <SiCss3 />
                    <h1>CSS</h1>
                  </div>
                  <div className="flex flex-col flex-1 justify-center items-center mx-[5vw] my-[2vh]">
                    <SiReact />
                    <h1>React</h1>
                  </div>
                  <div className="flex flex-col flex-1 justify-center items-center mx-[5vw] my-[2vh]">
                    <SiReact />
                    <h1>React Native</h1>
                  </div>
                  <div className="flex flex-col flex-1 justify-center items-center mx-[5vw] my-[2vh]">
                    <SiSvelte />
                    <h1>Svelte</h1>
                  </div>
                  <div className="flex flex-col flex-1 justify-center items-center mx-[5vw] my-[2vh]">
                    <SiRedux />
                    <h1>Redux</h1>
                  </div>
                  <div className="flex flex-col flex-1 justify-center items-center mx-[5vw] my-[2vh]">
                    <TbBrandNextjs />
                    <h1>Next.js</h1>
                  </div>
                  <div className="flex flex-col flex-1 justify-center items-center mx-[5vw] my-[2vh]">
                    <SiTailwindcss />
                    <h1>Tailwind CSS</h1>
                  </div>
                </IconContext.Provider>
              </div>
            : <></>
        }
        {
          displayBackend
            ? <div className="absolute bottom-[18%] w-screen flex flex-row flex-wrap">
                <IconContext.Provider value={({ size: '3em' })}>
                  <div className="flex flex-col flex-1 justify-center items-center mx-[5vw] my-[2vh]">
                    <FaNode />
                    <h1>Node.js</h1>
                  </div>
                  <div className="flex flex-col flex-1 justify-center items-center mx-[5vw] my-[2vh]">
                    <SiExpress />
                    <h1>Express</h1>
                  </div>
                </IconContext.Provider>
              </div>
            : <></>
        }
        {
          displayTools
            ? <div className="absolute bottom-[18%] w-screen flex flex-row flex-wrap">
                <IconContext.Provider value={({ size: '3em' })}>
                  <div className="flex flex-col flex-1 justify-center items-center mx-[5vw] my-[2vh]">
                    <SiWebpack />
                    <h1>Webpack</h1>
                  </div>
                  <div className="flex flex-col flex-1 justify-center items-center mx-[5vw] my-[2vh]">
                    <SiVite />
                    <h1>Vite</h1>
                  </div>
                  <div className="flex flex-col flex-1 justify-center items-center mx-[5vw] my-[2vh]">
                    <SiMongodb />
                    <h1>MongoDB</h1>
                  </div>
                  <div className="flex flex-col flex-1 justify-center items-center mx-[5vw] my-[2vh]">
                    <SiPostgresql />
                    <h1>PostgreSQL</h1>
                  </div>
                </IconContext.Provider>
              </div>
            : <></>
        }
        {/* scroll down indicator with bounce effect */}
        <IconContext.Provider value={{ size: '2em', color: 'gray-900' }}>
            <div className="absolute bottom-[2%] left-[50%] animate-bounce z-20">
                  <BsChevronDoubleDown />
            </div>
        </IconContext.Provider>
    </div>
  )
}

export default Skills
