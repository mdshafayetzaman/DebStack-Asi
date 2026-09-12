import { Suspense, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './App.css'

import Footer from './Component/Cards/Footer'
import Banner from './Component/Navbar/Banner'
import Navbar from './Component/Navbar/Navbar'
import TeachCard from './Component/Cards/TeachCard'
import StackSidebar from './Component/Cards/StackSideBar'

import type { Technology } from './type'

const teachPromise = async (): Promise<Technology[]> => {
  const response = await fetch('/data.json')
  const data = await response.json()
  return data
}

const promise = teachPromise()

function App() {
  const [stack, setStack] = useState<Technology[]>([])

  function handleAdd(tech: Technology) {
    const alreadyAdded = stack.some((item) => item.id === tech.id)

    if (alreadyAdded) {
      toast.warn(`${tech.name} is already in your stack.`)
      return
    }

    setStack((prev) => [...prev, tech])
    toast.success(`${tech.name} added to your stack.`)
  }

  function handleRemove(id: string) {
    const tech = stack.find((item) => item.id === id)

    setStack((prev) => prev.filter((item) => item.id !== id))

    if (tech) {
      toast.info(`${tech.name} removed from your stack.`)
    }
  }

  function handleRemoveAll() {
    if (stack.length === 0) return

    setStack([])
    toast.info('Your stack has been cleared.')
  }

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <ToastContainer />

      <Navbar />

      <Banner />

      <div className="mx-auto mt-5 max-w-7xl p-5">
        <h1 className="text-4xl font-bold">
          Explore the <span className="text-purple-500">Technologies</span>
        </h1>

        <p>Pick one technology per category to build your ideal stack.</p>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-6 px-6 lg:grid-cols-[1fr_320px]">
        <Suspense fallback={<h1>Loading......</h1>}>
          <TeachCard teachPromise={promise} handleAdd={handleAdd} />
        </Suspense>

        <StackSidebar
          stack={stack}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      </div>

      <Footer />
    </div>
  )
}

export default App
