import React from 'react'
import Typewriter from 'typewriter-effect'
import codingGif from '../assets/coding.gif'
import { BsChevronDoubleDown } from 'react-icons/bs'
import { IconContext } from 'react-icons'

const Frontpage = (): JSX.Element => {
  return (
        <>
            <div className="flex flex-col items-center mt-[24vh] xs:mt-0 xs:absolute xs:left-[4%] xs:top-[25%] z-10 ease-in-out duration-500">
                {/* short description about me */}
                <h1 className="text-3xl xxs:text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold mb-3 md:mb-7 text-gray-900 ease-in-out duration-500 z-10">
                  <span className="text-[#00b2df]">Hi!</span> I&apos;m Jian Cheng
                </h1>
                <h1 className="text-xl xxs:text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-3 md:mb-7 text-gray-900 ease-in-out duration-500 z-10">
                  I am a <span className="text-[#00b2df]">Fullstack Developer</span>
                </h1>
                <div className="flex justify-center mb-7 md:mb-9">
                    <h1 className="text-xl xxs:text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-bold mr-1.5 text-gray-900 ease-in-out duration-500 z-10">
                        I like to
                    </h1>
                    <div className="text-xl xxs:text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-bold ease-in-out duration-500 z-10">
                      {/* typewriter effect passing in game, climb, and code */}
                      <Typewriter
                        options = {{
                          strings: ['<span style="color: #00b2df;">game.</span>', '<span style="color: #00b2df;">climb.</span>', '<span style="color: #00b2df;">code.</span>'],
                          autoStart: true,
                          loop: true
                        }}
                      />
                    </div>
                </div>
                <h1 className="text-gray-900 text-center lg:text-lg animate-bounce z-10">Scroll down to see more</h1>
            </div>

            {/* scroll down indicator with bounce effect */}
            <IconContext.Provider value={{ size: '2em', color: 'white' }}>
                <div className="absolute bottom-[2%] left-[50%] animate-bounce z-20">
                    <BsChevronDoubleDown />
                </div>
            </IconContext.Provider>

            <div className="flex absolute w-[100%] flex-col sm:flex-row sm:items-end bottom-[0%]">
                {/* solid background to create an extension the gif to the left */}
                <div className="w-[0%] sm:p-[4.1%] md:p-[2.93%] md:w-[50%] bg-[#01313f]"></div>
                {/* guy coding gif */}
                <img src={codingGif} alt="A man in front of a computer coding" className="w-[100%] bg-[#01313f] pb-20 sm:pb-0 border-none z-0"/>
            </div>
        </>
  )
}

export default Frontpage
