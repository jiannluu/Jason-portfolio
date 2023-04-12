import React from 'react'
import Navbar from './components/Navbar'
import Frontpage from './components/Frontpage'

const App = (): JSX.Element => {
  return (
    <>
        <Navbar />
        <div>
            <Frontpage />
        </div>
    </>
  )
}

export default App
