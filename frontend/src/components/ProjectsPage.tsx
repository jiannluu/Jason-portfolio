import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper'
import ProjectButton from './ProjectButton'
import { BsChevronDoubleDown } from 'react-icons/bs'
import { IconContext } from 'react-icons'

// importing css from swiper library
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// importing project images
import aionic from '../assets/aionic-gif.gif'
import couplets from '../assets/couplets-gif.gif'
import gitgob from '../assets/gitgob-img.png'
import stonkz from '../assets/stonkz-gif.gif'
import alfred from '../assets/alfred-gif.gif'

// Button component for the project cards with animation and styling
const ProjectsPage = (): JSX.Element => {
  return (
        <div className="h-screen bg-[#01313f]">
            <div className="max-w-[124rem] h-[100%] py-[4rem] px-[1rem] my-0 mx-auto">
                <h1 className="py-[1rem] pt-[3rem] px-0 text-2xl xxs:text-4xl md:text-5xl lg:text-6xl text-center text-white font-bold">Projects</h1>
                    {/* imported swiper card library */}
                    <Swiper
                        // setting card effect and how the cards are position
                        effect = { 'coverflow' }
                        grabCursor = { true }
                        centeredSlides = { true }
                        loop = { true }
                        slidesPerView = { 'auto' }
                        coverflowEffect = {
                            {
                              rotate: 0,
                              stretch: 0,
                              depth: 100,
                              modifier: 2.5
                            }
                        }
                        // the pagination animation and navigation clickables
                        pagination={ { el: '.swiper-pagination', clickable: true } }
                        navigation={ {
                          nextEl: '.swiper-button-next',
                          prevEl: '.swiper-button-prev'
                        } }
                        modules={ [EffectCoverflow, Pagination, Navigation] }
                        className="h-[72.5vh] py-[2rem] px-0 relative"
                    >
                        {/* Aionic card */}
                        <SwiperSlide>
                            <img src={aionic} alt="sample image of aionic" className='w-[60rem] h-[100%] mx-auto' />
                            <figcaption className="w-[60rem] h-[100%] flex flex-col justify-center items-center text-center">
                                <h1 className="text-[#00b2df] font-bold text-4xl lg:text-6xl m-[1vh]">Aionic</h1>
                                <p className="text-white w-[75vw] lg:w-[42rem] text-sm xs:text-lg text-center m-[1vh]">Aionic streamlines Kubernetes cluster management by tracking manifest history and enabling effortless reversions.</p>
                                {/* flexing the two buttons based on view size */}
                                {/* smaller view will flex col and larger screens will flex row */}
                                <div className="flex flex-col lg:flex-row justify-center items-center">
                                    <ProjectButton buttonName="See Launch Site" buttonLink="https://www.aionic.app/" />
                                    <ProjectButton buttonName="See Source Code" buttonLink="https://github.com/oslabs-beta/Aionic" />
                                </div>
                            </figcaption>
                        </SwiperSlide>
                        {/* Couplets card */}
                        <SwiperSlide>
                            <img src={couplets} alt="sample image of couplets" className='w-[60rem] h-[100%] mx-auto' />
                            <figcaption className="w-[60rem] h-[100%] flex flex-col justify-center items-center text-center">
                                <h1 className="text-[#00b2df] font-bold text-4xl lg:text-6xl m-[1vh]">Couplets</h1>
                                <p className="text-white w-[75vw] lg:w-[42rem] text-sm xs:text-lg text-center m-[1vh]">Couplets is a social platform that connects users based on shared literary interests.</p>
                                <ProjectButton buttonName="See Source Code" buttonLink="https://github.com/Team-Couplets/Couplets" />
                            </figcaption>
                        </SwiperSlide>
                        {/* GitGob card */}
                        <SwiperSlide>
                            <img src={gitgob} alt="sample image of gitgob" className='w-[60rem] h-[100%] mx-auto' />
                            <figcaption className="w-[60rem] h-[100%] flex flex-col justify-center items-center text-center">
                                <h1 className="text-[#00b2df] font-bold text-4xl lg:text-6xl m-[1vh]">GitGob</h1>
                                <p className="text-white w-[75vw] lg:w-[42rem] text-sm xs:text-lg text-center m-[1vh]">GitGob helps developers and project managers visualize and manage pull requests for their projects.</p>
                                <ProjectButton buttonName="See Source Code" buttonLink="https://github.com/UGG-boots-with-the-fur/GitGoblin" />
                            </figcaption>
                        </SwiperSlide>
                        {/* StonkZ card */}
                        <SwiperSlide>
                            <img src={stonkz} alt="sample image of stonkz" className='w-[60rem] h-[100%] mx-auto' />
                            <figcaption className="w-[60rem] h-[100%] flex flex-col justify-center items-center text-center">
                                <h1 className="text-[#00b2df] font-bold text-4xl lg:text-6xl m-[1vh]">StonkZ</h1>
                                <p className="text-white w-[75vw] lg:w-[42rem] text-sm xs:text-lg text-center m-[1vh]">StonkZ keeps users informed about the latest stock trends, news, and developments.</p>
                                <ProjectButton buttonName="See Source Code" buttonLink="https://github.com/JT-Team/StonkZ" />
                            </figcaption>
                        </SwiperSlide>
                        {/* Alfred card */}
                        <SwiperSlide>
                            <img src={alfred} alt="sample image of alfred" className='w-[60rem] h-[100%] mx-auto' />
                            <figcaption className="w-[60rem] h-[100%] flex flex-col justify-center items-center text-center">
                                <h1 className="text-[#00b2df] font-bold text-4xl lg:text-6xl m-[1vh]">Alfred</h1>
                                <p className="text-white w-[75vw] lg:w-[42rem] text-sm xs:text-lg text-center m-[1vh]">Alfred assists users in managing and visualizing their monthly subscriptions and spending.</p>
                                <ProjectButton buttonName="See Source Code" buttonLink="https://github.com/jiannluu/Alfred" />
                            </figcaption>
                        </SwiperSlide>
                        {/* div with controller and pagination */}
                        <div className="slider-controller">
                            <div className="swiper-button-prev slider-arrow animate-bounce-left"></div>
                            <div className="swiper-button-next slider-arrow animate-bounce-right"></div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </Swiper>
            </div>
            <IconContext.Provider value={{ size: '1.5em', color: 'white' }}>
                <div className="absolute bottom-[1%] left-[50%] animate-bounce z-20">
                    <BsChevronDoubleDown />
                </div>
            </IconContext.Provider>
        </div>
  )
}

export default ProjectsPage
