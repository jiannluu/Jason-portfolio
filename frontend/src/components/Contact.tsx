import React from 'react'
import { IoLogoLinkedin } from 'react-icons/io5'
import { IoLogoGithub } from 'react-icons/io5'
import { IconContext } from 'react-icons'

const Contact = (): JSX.Element => {
  return (
        <div className="h-screen bg-white">
            <div className="w-screen h-screen flex flex-col md:flex-row">
                <div className="flex-1 flex flex-col justify-center items-center">
                    <h1>Connect with me here!</h1>
                    <div>
                        <IconContext.Provider value={({ size: '3em' })}>
                            <div className="flex flex-col flex-1 justify-center items-center mx-[5vw] my-[2vh]">
                                <IoLogoLinkedin className="tech-icons"/>
                                <h1 className="text-[2vh]">LinkedIn</h1>
                            </div>
                            <div className="flex flex-col flex-1 justify-center items-center mx-[5vw] my-[2vh]">
                                <IoLogoGithub className="tech-icons"/>
                                <h1 className="text-[2vh]">GitHub</h1>
                            </div>
                            {/* <div className="flex flex-col flex-1 justify-center items-center mx-[5vw] my-[2vh]">
                                <SiCss3 className="tech-icons"/>
                                <h1 className="text-[2vh]">CSS</h1>
                            </div>
                            <div className="flex flex-col flex-1 justify-center items-center mx-[5vw] my-[2vh]">
                                <SiReact className="tech-icons"/>
                                <h1 className="text-[2vh]">React</h1>
                            </div>
                            <div className="flex flex-col flex-1 justify-center items-center mx-[5vw] my-[2vh]">
                                <SiReact className="tech-icons"/>
                                <h1 className="text-[2vh] text-center">React Native</h1>
                            </div>
                            <div className="flex flex-col flex-1 justify-center items-center mx-[5vw] my-[2vh]">
                                <SiSvelte className="tech-icons"/>
                                <h1 className="text-[2vh]">Svelte</h1>
                            </div>
                            <div className="flex flex-col flex-1 justify-center items-center mx-[5vw] my-[2vh]">
                                <SiRedux className="tech-icons"/>
                                <h1 className="text-[2vh]">Redux</h1>
                            </div>
                            <div className="flex flex-col flex-1 justify-center items-center mx-[5vw] my-[2vh]">
                                <TbBrandNextjs className="tech-icons"/>
                                <h1 className="text-[2vh]">Next.js</h1>
                            </div>
                            <div className="flex flex-col flex-1 justify-center items-center mx-[5vw] my-[2vh]">
                                <SiTailwindcss className="tech-icons"/>
                                <h1 className="text-[2vh] text-center">Tailwind CSS</h1>
                            </div> */}
                        </IconContext.Provider>
                    </div>
                </div>
                <div className="flex items-center">
                    <h1>Or</h1>
                </div>
                <div className="flex-1 flex flex-col justify-center items-center">
                    <h1>Send me an email!</h1>
                </div>
            </div>
        </div>
  )
}

export default Contact