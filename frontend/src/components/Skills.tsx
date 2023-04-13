import React from 'react'
import waiter from '../assets/waiter.png'
import chef from '../assets/chef.png'
import shipment from '../assets/shipment.png'

const Skills = (): JSX.Element => {
  return (
    <div className="h-screen bg-white" id="skills">
        <h1 className=" text-center text-white font-bold text-2xl xxs:text-4xl md:text-5xl lg:text-6xl pt-[40%] xxs:pt-[25%] pb-[8%] sm:pt-[20%] sm:pb-[6%] md:pt-[17%] md:pb-[2%] lg:pt-[12%] lg:pb-[5%] xl:pt-[8%] ease-in-out">
            Skills
        </h1>
        <div className="flex flex-row justify-around">
          <img src={waiter} className="w-[200px] h-[200px]"/>
          <img src={chef} className="w-[200px] h-[200px]"/>
          <img src={shipment} className="w-[200px] h-[200px]"/>
        </div>
    </div>
  )
}

export default Skills
