import { useState } from 'react'
import './App.css'
import { CoverDemo } from './component/Heading'
import Navbar from './component/Navbar'
import TemplateGrid from './component/TemplateGrid'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-black text-white h-screen w-full'>
      <Navbar/>
    <CoverDemo/>
    <TemplateGrid/>
    </div>
    </>
  )
}

export default App
