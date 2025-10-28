import LoadingBox from "@/components/LoadingBox"
import Script from "next/script"
import { Suspense } from "react"

const PensionCalculator = () => {
  return (
    <section className="w-full">
      <div className="relative h-[50vh] md:h-[443px] flex flex-col items-center justify-center p-8 gap-12.5 sm:p-25 bg-[url('/images/calculator-bg.jpg')] bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" aria-hidden="true" />
        <div aria-hidden="true" className="ellipse-top" />
        <div aria-hidden="true" className="ellipse-bottom" />

        <div className="absolute z-10 flex flex-col items-center gap-7.5 text-center p-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white">Plan Your Future with <br /> Confidence</h1>
          <p className="text-base md:text-lg font-medium text-white text-center">See our comprehensive pension calculator to project your retirement benefits <br /> and plan your financial future</p>
        </div>
      </div>

      <div className=" bg-white-100 p-12 gap-12.5 sm:p-25">
        <Suspense fallback={<LoadingBox />}>
        <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
        <div className="elfsight-app-2042e363-87c5-4cde-af8e-08a1f8407db4" data-elfsight-app-lazy></div>
        </Suspense>
      </div>
    </section>
  )
}

export default PensionCalculator