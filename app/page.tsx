"use client"
import { Navbar, Hero, Footer} from '@/Components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'    
import Area from '@/pages/Area'

import Image from 'next/image'
import Offenders from '@/pages/Offenders'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Hero/>}/>
            <Route path='/offenders' element={<Offenders/>}/>
            <Route path='/Area' element={<Area/>}/>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer/>
    </main>
  )
}
