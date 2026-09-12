import { Suspense } from 'react'
import './App.css'
import Footer from './Component/Cards/Footer'

import Banner from './Component/Navbar/Banner'
import Navbar from './Component/Navbar/Navbar'
import type { Technology } from './type'
import TeachCard from './Component/Cards/TeachCard'

const teachPromise = async (): Promise<Technology[]> => {
  const response = await fetch('/data.json')
  const data = await response.json()
  return data
}

function App() {
  const promise = teachPromise()

  return (
    <>
      <div className="min-h-screen bg-white mt-10">
        <Navbar />
        <Banner />
        <div className="grid grid-cols-1 gap-6 max-w-6xl mx-auto lg:grid-cols-[1fr_320px] px-6">
          <Suspense fallback={<h1>Loading......</h1>}>
            <TeachCard teachPromise={promise}></TeachCard>
          </Suspense>

          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 lg:sticky lg:top-24">
            <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>
            <p className="mt-1 text-sm text-slate-500">0 Technology Selected</p>
            <div className="mt-6 rounded-xl border border-dashed border-slate-200 px-4 py-8 text-center">
              <p className="text-sm text-slate-400">
                Nothing here yet. Add a technology to start building your stack.
              </p>
            </div>
          </aside>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
