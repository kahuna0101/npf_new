"use client"

import { useEffect, useState } from "react"
import Script from "next/script"
import { Skeleton } from "@/components/ui/skeleton"

const PensionCalculator = () => {
   const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

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

      <div className="bg-white-100 p-12 gap-12.5 sm:p-25 flex justify-center items-center">
         {!isLoaded && <Skeleton className="h-80 w-310 rounded-[20px] bg-light-blue-100" />}
        <Script
          src="https://elfsightcdn.com/platform.js"
          strategy="lazyOnload"
          onLoad={() => setIsLoaded(true)}
        />
        <div
          className={`elfsight-app-2042e363-87c5-4cde-af8e-08a1f8407db4 ${
            isLoaded ? "block" : "hidden"
          }`}
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  )
}

export default PensionCalculator