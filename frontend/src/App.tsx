import React from 'react'
import Navbar from './components/Navbar'
import Frontpage from './components/Frontpage'
import Aboutme from './components/Aboutme'
import Skills from './components/Skills'

const App = (): JSX.Element => {
  return (
    <>
        <div className='sticky top-0 z-50'>
            <Navbar />
        </div>
        <div className="flex flex-col">
            <div className="w-[100%] h-screen mt-[-84px] mb-[84px] sticky top-0">
                <Frontpage />
            </div>
            <div className="w-[100%] h-screen mt-[500px] sticky top-0">
                <Aboutme />
            </div>
            <div className="w-[100%] h-screen mt-[750px] sticky top-0">
                <Skills />
            </div>
        </div>
    </>
  )
}

export default App
