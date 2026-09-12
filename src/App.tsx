import { Suspense, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

import Footer from './Component/Cards/Footer'
import Banner from './Component/Navbar/Banner'
import Navbar from './Component/Navbar/Navbar'
import TeachCard from './Component/Cards/TeachCard'
import type { Technology } from './type'

const teachPromise = async (): Promise<Technology[]> => {
  const response = await fetch('/data.json')
  const data = await response.json()
  return data
}

function App() {
  const [stack, setStack] = useState<Technology[]>([])

  const promise = teachPromise()

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
    <div className="min-h-screen bg-red-100">
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

        <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 lg:sticky lg:top-24">
          <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>

          <p className="mt-1 text-sm text-slate-500">
            {stack.length} Technology Selected
          </p>

          <div className="mt-6 rounded-xl border border-dashed border-slate-200 px-4 py-8 text-center">
            {stack.length === 0 ? (
              <p className="text-sm text-slate-400">
                Nothing here yet. Add a technology to start building your stack.
              </p>
            ) : (
              <div className="space-y-2">
                {stack.map((tech) => (
                  <div
                    key={tech.id}
                    className="flex items-center justify-between rounded-lg bg-slate-100 p-3"
                  >
                    <span>{tech.name}</span>

                    <button
                      onClick={() => handleRemove(tech.id)}
                      className="text-red-500"
                    >
                      Remove
                    </button>
                  </div>
                ))}

                <button
                  onClick={handleRemoveAll}
                  className="mt-3 text-sm font-semibold text-red-500"
                >
                  Clear All
                </button>
              </div>
            )}
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  )
}

export default App
