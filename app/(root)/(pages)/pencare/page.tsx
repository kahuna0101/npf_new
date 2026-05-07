import { enrollmentData, keybenefitsData } from "@/data"
import Image from "next/image"
import Link from "next/link"
import PencomConsentForm from "@/components/PencomConsentForm"

export type KeyBenefitsDataProps = {
    img?: string,
    title?: string,
    description?: string,
}

export type enrollmentDataProps = {
    title?: string,
    description?: string,
}



const Pencare = () => {
    return (
        <section className="w-full">
            <div className="relative h-[50vh] md:h-[443px] flex flex-col items-center justify-center p-8 gap-12.5 sm:p-25 bg-[url('/images/calculator-bg.jpg')] bg-cover bg-center overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10" aria-hidden="true" />
                <div aria-hidden="true" className="ellipse-top" />
                <div aria-hidden="true" className="ellipse-bottom" />

                <div className="absolute z-10 flex flex-col items-center gap-7.5 text-center p-8">
                    <h1 className="text-3xl md:text-5xl font-bold text-white">PenCare Initiative</h1>
                    <p className="text-base md:text-lg font-medium text-white text-center">Access comprehensive healthcare services with the PenCare Initiative – a national healthcare support programme designed <br /> specifically for eligible retirees under the Contributory Pension Scheme (CPS).</p>
                </div>
            </div>

            <div className="flex flex-col justify-center bg-white-100 p-12 gap-12.5 sm:p-25">
                <h1 className="section-header">About PenCare</h1>
                <p className="text-base font-normal text-grey-100 text-center">The PenCare Initiative is a landmark healthcare support programme introduced by the National Pension Commission (PenCom) <br /> to improve access to medical services for eligible retirees.  Under this initiative, you will be enrolled with a designated Health Maintenance Organisation (HMO) <br /> to enable seamless access to healthcare services at no cost to you. Your health and wellbeing are our priority.</p>
            </div>

            <div className="flex flex-col justify-center bg-white p-12 gap-12.5 sm:p-25">
                <h1 className="section-header">Key Benefits</h1>
                <div className="flex flex-col justify-center md:flex-row gap-5">
                    {keybenefitsData.map((item, index) => (
                        <div key={index} className="md:w-80  lg:w-96 xl:w-[590px] flex flex-col gap-7.5 p-7.5 rounded-[10px] border border-gray-100">
                            <div className="flex gap-2.5">
                                <Image src={item.img!} width={24} height={24} alt='icon' />
                                <h3 className="text-xl text-black-100 font-medium">{item.title}</h3>
                            </div>
                            <p className="text-base font-normal text-grey-100">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col justify-center items-center bg-white-100 p-12 gap-12.5 sm:p-25">
                <h1 className="section-header">How to Enroll</h1>
                <div className="flex flex-col justify-center md:flex-row gap-5">
                    {enrollmentData.map((item, index) => (
                        <div key={index} className="w-86 sm:w-98 h-76 flex flex-col items-center justify-center py-7.5 px-5 gap-5  bg-white rounded-[20px] border border-gray-100 drop-shadow-xl">
                            <div className="w-[65px] h-[65px] flex items-center justify-center bg-blue-100 text-3xl text-white-100 rounded-xl">{index + 1}</div>
                            <h4 className="text-[18px] font-medium text-center text-blue-100">{item.title}</h4>
                            <p className="text-sm font-normal text-center text-black-100">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col justify-center bg-white p-12 gap-12.5 sm:p-25">
                <div className="flex flex-wrap items-center justify-center gap-10">
                    <div className="flex flex-1 flex-col gap-3">
                        <h1 className="text-[40px] leading-13 max-md:text-center font-bold text-black-100">Your Consent Matters</h1>
                        <p className="text-base leading-6 font-normal text-grey-100">To proceed with your enrollment, PenCom requires us to share limited personal information with the designated HMO. In line with applicable data protection requirements, we can only do so with your explicit and informed consent.</p>
                    </div>

                    <div className="md:w-80 lg:w-96 xl:w-[590px] flex flex-1 flex-col gap-7.5 p-7.5 rounded-[10px] border border-gray-100">
                        <div className="flex flex-col gap-5">
                            <h3 className="text-xl text-black-100 font-medium">Provide Consent Through:</h3>
                            <ul className="flex flex-col gap-2.5 list-disc pl-6">
                                <li className="text-base font-normal text-grey-100">Electronically via the secure consent link provided below</li>
                                <li className="text-base font-normal text-grey-100">By signing and returning the attached consent letter copy</li>
                            </ul>
                            <p className="text-md text-black-100 font-medium italic">Your consent will enable us to complete your enrollment and ensure you benefit from this healthcare initiative.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center bg-white-100 p-12 gap-6 sm:p-25">
                <h1 className="section-header">Ready to Benefit from PenCare?</h1>
                <p className="text-base font-normal text-grey-100 text-center">Join thousands of eligible retirees who are accessing quality healthcare through the PenCare Initiative.</p>
                <div className="flex flex-col md:flex-row gap-5">
                    <Link href="/docs/" download className="w-60 h-14 bg-white-100 hover:bg-yellow-100 gap-3 text-base font-semibold border hover:border-none border-gray-100 text-blue-100 hover:text-white mx-auto rounded-md flex items-center justify-center">
                       <Image src="/icons/downloads-blue.svg" width={20} height={20} alt="download"/> Download Form
                    </Link>

                   <PencomConsentForm />
                </div>
            </div>

            <div className="flex flex-col items-center justify-center bg-white p-8 gap-12.5 sm:p-25">
                <div className="flex flex-col items-center justify-center gap-7.5 md:w-[500px]">
                    <h1 className="section-header">Need Assistance?</h1>
                    <p className="text-base font-normal text-grey-100 text-center">Our dedicated customer service team is here to help you navigate your benefit options and ensure you get the support you need.</p>

                    <div className="flex flex-col md:flex-row gap-5">
                        <Link href="/faqs" className="w-29 h-15 bg-blue-100 hover:bg-yellow-100 text-base font-semibold border hover:border-none border-blue-100 text-white mx-auto rounded-md flex items-center justify-center">
                            View FAQs
                        </Link>

                        <Link href="/contact" className="w-50 h-15 bg-white-100 hover:bg-yellow-100 text-base font-semibold border hover:border-none border-gray-100 text-blue-100 hover:text-white mx-auto rounded-md flex items-center justify-center">
                            Contact Support
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pencare