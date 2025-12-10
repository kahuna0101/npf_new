import { valuesData } from '@/data'
import Image from 'next/image'


export type valueProps = {
  title: string,
  description: string,
  icon: string,
}

const AboutUs = () => {
  return (
    <section className="w-full">
      <div className="relative h-[50vh] md:h-[443px] flex flex-col items-center justify-center p-8 gap-12.5 sm:p-25 bg-[url('/images/vc-bg.jpg')] bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" aria-hidden="true" />
        <div aria-hidden="true" className="ellipse-top" />
        <div aria-hidden="true" className="ellipse-bottom" />

        <div className="absolute z-10 flex flex-col items-center gap-7.5 text-center p-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white">Who We Are</h1>
          <p className="text-base md:text-lg font-medium text-white text-center">NPF Pensions Limited is a leading pension fund administrator committed to <br /> securing the financial futures of Nigerians through professional fund <br /> management and exceptional service.</p>
        </div>
      </div>

      <div className="flex justify-center bg-white-100 p-12 gap-12.5 sm:p-25">
        <div className='w-310 flex flex-col md:flex-row items-start justify-center gap-7.5'>
          <div className="lg:w-155 flex flex-1 flex-col gap-7.5">
            <h1 className="text-[40px] leading-13 font-bold text-black-100">Our Story</h1>
            <p className="text-base font-normal text-grey-100">
              The Nigeria Police force faced challenges because of the peculiarities the pension scheme. The idea of setting up NPF Pension Limited came as a solution the problem. The company was incorporated on 2ist October 2013 and licensed by National Pension Commission (PenCom) on 12th August 2014.            </p>
            <p className="text-base font-normal text-grey-100">
              Today, NPF Pensions ranked top 5 Pension Fund Administrator in the country with Asset Under Management of over 1 trillion.</p>
          </div>
          <div className="flex flex-1 flex-col gap-7.5">
            <div className="flex flex-col gap-7.5 p-7.5 rounded-[10px] border border-gray-100">
              <div className="flex gap-2.5">
                <Image src="/icons/spiral.svg" width={24} height={24} alt='mission' />
                <h3 className="text-xl text-black-100 font-medium">Our Mission</h3>
              </div>
              <p className="text-base font-normal text-grey-100">To provide excellent services to customers while ensuring safety and best possible returns on their pension assets, and value creation for all stakeholders.</p>
            </div>

            <div className="flex flex-col gap-7.5 p-7.5 rounded-[10px] border border-gray-100">
              <div className="flex gap-2.5">
                <Image src="/icons/spiral.svg" width={24} height={24} alt='vision' />
                <h3 className="text-xl text-black-100 font-medium">Our Vision</h3>
              </div>
              <p className="text-base font-normal text-grey-100">To be the foremost customer-centric Pension Administration in Nigeria.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-white p-8 gap-12.5 sm:p-25">
        <div className="flex flex-col gap-5">
          <h1 className="section-header">Our Values</h1>
          <p className="text-base font-normal text-grey-100 text-center">The principles that guide everything we do and shape our <br /> commitment to your financial future.</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-7.5">
          <div className="flex flex-wrap items-start justify-center gap-5">
            {valuesData.map((item, index) => (
              <div key={index} className="w-[287.5px] flex flex-col items-center justify-center p-5 gap-3.5 bg-white rounded-[20px] shadow border border-gray-100">
                <div className="w-12.5 h-12.5 flex items-center justify-center p-2.5 bg-light-green-100 rounded-[70px]">
                  <Image src={item.icon} alt={item.title} width={26} height={26} />
                </div>

                <h4 className="text-[18px] font-medium text-center text-black-100">{item.title}</h4>
                <p className="text-sm font-normal text-center text-black-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs