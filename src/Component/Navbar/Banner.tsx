
import banner from '/banner-stack.png'

const Banner = () => {
  return (
    <div className=" gap-10 relative mx-auto mt-5 flex max-w-6xl items-center justify-between px-4">
      <div>
        <h1 className="text-4xl font-bold">Build Your Ideal Development</h1>

        <h1 className="inline-block bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#4b12ae] bg-clip-text text-5xl font-bold text-transparent">
          Stack Development Stack
        </h1>

        <p className="mt-5 text-lg text-[#475569] ">
          Explore frontend, backend, database, and tooling options,
          <br />
          compare them side by side, and put together the stack that fits your
          <br />
          next project.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="rounded-lg bg-[#FF5722] px-6 py-3 font-semibold text-white">
            Explore Technologies
          </button>

          <button className="rounded-lg border border-gray-400 px-6 py-3 font-semibold">
            Learn More
          </button>
        </div>
      </div>

      <div>
        <img src={banner} alt="Development Stack" className="w-full max-w-lg" />
      </div>
    </div>

  )
}

export default Banner
