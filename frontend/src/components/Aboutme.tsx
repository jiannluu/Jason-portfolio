import React from 'react'
import me from '../assets/me.png'
import { BsChevronDoubleDown } from 'react-icons/bs'
import { IconContext } from 'react-icons'

const Aboutme = (): JSX.Element => {
  return (
        <div className="h-screen bg-[#01313f]">
            <h1 className=" text-center text-white font-bold text-2xl xxs:text-4xl md:text-5xl lg:text-6xl pt-[40%] xxs:pt-[25%] pb-[8%] sm:pt-[20%] sm:pb-[6%] md:pt-[17%] md:pb-[2%] lg:pt-[12%] lg:pb-[5%] xl:pt-[8%] ease-in-out duration 500s">
                <span className='underline underline-offset-8 decoration-[#00b2df]'>A</span>bout Me
            </h1>
            <div className="flex flex-col md:flex-row justify-around items-center h-100% ease-in-out duration 500s">
                {/* my cartoon photo with blob effect */}
                {/* adjusted size for mobile responsiveness until 1024px */}
                <div className="flex w-[50%] justify-center">
                    <img src={me} className="object-cover w-[150px] h-[150px] xxs:w-[195px] xxs:h-[195px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[375px] xl:h-[375px] overflow-hidden rounded-[42%_56%_72%_28%_/_42%_42%_56%_48%] animate-blob-smooth shadow-blob-shadow ease-in-out duration 500s"/>
                </div>
                {/* description about me */}
                <div className="flex justify-center ml-7 mr-7 md:w-[50%]">
                    <h1 className="text-white text-xs xxs:text-[2vh] xxs:leading-[2.5vh] sm:text-base lg:text-xl mt-7 lg:mt-0 xl:text-2xl md:mr-[7vw] ease-in-out duration 500s">
                        I am a fullstack engineer who passion is creating things that live on the internet.
                        I enjoy staying current with the latest advancements in the industry and love to continually contribute to the open source community in a collaborative environment.
                        I recently gave a talk in New York City about message brokers and did a deep dive into Kafka.
                        <br></br>
                        <br></br>
                        When I&apos;m not glued to my seat in front of my computer you can find me bouldering up a storm at the nearest climbing gym.
                        I find that scaling walls and solving problems with my body is the perfect complement to my cerebal work as a developer.
                    </h1>
                </div>
            </div>
            {/* scroll down indicator with bounce effect */}
            <IconContext.Provider value={{ size: '2em', color: 'white' }}>
                <div className="absolute bottom-[2%] left-[50%] animate-bounce z-20">
                    <BsChevronDoubleDown />
                </div>
            </IconContext.Provider>
        </div>
  )
}

export default Aboutme
