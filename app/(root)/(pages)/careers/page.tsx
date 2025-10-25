import JobOpenings from "@/components/JobOpenings"
import { careerWhyData, howItWorksData } from "@/data"
import Image from "next/image"

export type careerWhyProps = {
    title: string,
    description: string,
    icon: string,
}

const Careers = () => {
  return (
    <section className="w-full">
      <div className="relative h-[50vh] md:h-[443px] flex flex-col items-center justify-center p-8 gap-12.5 sm:p-25 bg-[url('/images/mortgage-bg.jpg')] bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" aria-hidden="true" />
        <div aria-hidden="true" className="ellipse-top" />
        <div aria-hidden="true" className="ellipse-bottom" />

        <div className="absolute z-10 flex flex-col items-center gap-7.5 text-center p-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white">Build Your Career with Purpose</h1>
          <p className="text-base md:text-lg font-medium text-white text-center">Join our team of dedicated professionals and help secure the financial futures <br /> of millions of Nigerians while advancing your own career.</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-white p-8 gap-12.5 sm:p-25">
        <div className="flex flex-col gap-5">
          <h1 className="section-header">Why Choose NPF Pensions Limited?</h1>
          <p className="text-base font-normal text-grey-100 text-center">We're more than just a workplace - we're a community of professionals <br /> dedicated to making a meaningful impact.</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-7.5">
          <div className="flex flex-wrap items-start justify-center gap-5">
            {careerWhyData.map((item, index) => (
              <div key={index} className="w-[287.5px] flex flex-col items-center justify-center p-5 gap-3.5 bg-white rounded-[20px] shadow border border-gray-100">
                 <div className="w-12.5 h-12.5 flex items-center justify-center p-2.5 bg-light-green-100 rounded-[70px]">
                    <Image src={item.icon} alt={item.title} width={26} height={26}/>
                  </div>

                   <h4 className="text-[18px] font-medium text-center text-black-100">{item.title}</h4>
            <p className="text-sm font-normal text-center text-black-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-white-100 p-12 gap-12.5 sm:p-25">
         <div className="flex flex-col gap-5">
          <h1 className="section-header">Current Openings</h1>
          <p className="text-base font-normal text-grey-100 text-center">Discover opportunities to grow your career with us.</p>
        </div>   
        
        <div>
          <JobOpenings />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-white p-8 gap-12.5 sm:p-25">
        <div className="flex flex-col gap-5">
          <h1 className="section-header">How It Works</h1>
          <p className="text-base font-normal text-grey-100 text-center">Getting started is simple and straightforward.</p>
        </div>

        <div className="flex flex-wrap items-start justify-center gap-7.5">
          {howItWorksData.map((item, index) => (
            <div key={index} className="w-72 p-5 gap-5 flex flex-col justify-center items-center bg-white-100 rounded-[20px] border border-gray-100">
              <div className="w-12.5 h-12.5 bg-blue-100 rounded-[70px] flex justify-center items-center p-2.5 text-white text-xl">{index + 1}</div>
              <h4 className="text-lg font-medium text-black-100 text-center">{item}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Careers