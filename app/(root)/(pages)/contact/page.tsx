import ContactForm from "@/components/ContactForm"
import ContactTabs from "@/components/ContactTabs"
import Image from "next/image"

const Contact = () => {
  const address = "NPF Pensions Limited House Plot 3820, R.B. Dikko Road, Off Shehu Shagari Way, Central Business District (CBD) Abuja - Nigeria."
  return (
    <section className="w-full">
      <div className="relative h-[50vh] md:h-[443px] flex flex-col items-center justify-center p-8 gap-12.5 sm:p-25 bg-[url('/images/vc-bg.jpg')] bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" aria-hidden="true" />
        <div aria-hidden="true" className="ellipse-top" />
        <div aria-hidden="true" className="ellipse-bottom" />

        <div className="absolute z-10 flex flex-col items-center gap-7.5 text-center p-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white">We'd Love to Hear From You</h1>
          <p className="text-base md:text-lg font-medium text-white text-center">Get in touch with our team for personalized support, guidance, and answers <br /> to all your pension questions</p>
        </div>
      </div>

      <div className=" bg-white-100 p-12 gap-12.5 sm:p-25">
        <div className='flex flex-col md:flex-row items-start justify-center gap-7.5'>
          <ContactForm />
          <div className="flex flex-col gap-7.5">
            <div className="md:w-80  lg:w-96 xl:w-[590px] flex flex-col gap-7.5 p-7.5 bg-white rounded-[10px] border border-gray-100">
              <div className="flex flex-col gap-2.5">
                <div className="flex gap-2.5">
                  <Image src="/icons/headset.svg" width={26} height={26} alt='headset' />
                  <h3 className="text-2xl text-black-100 font-semibold">Head Office</h3>
                </div>
                <p className="text-base font-normal text-grey-100">Get in touch with us if you need to</p>
              </div>

              <div className="flex gap-2.5 items-start">
                <Image src="/icons/phone.svg" width={24} height={24} alt='phone' />
                <div className="flex flex-col gap-2.5">
                  <h4 className="text-lg text-black-100 font-medium">Customer Service</h4>
                  <a href="tel:+2342094603400" className="hover:text-blue-600 text-base font-normal text-grey-100">
                    02094603400
                  </a>
                </div>
              </div>

              <div className="flex gap-2.5 items-start">
                <Image src="/icons/email.svg" width={24} height={24} alt='email' />
                <div className="flex flex-col gap-2.5">
                  <h4 className="text-lg text-black-100 font-medium">Email Support</h4>
                  <a href="mailto:info@npfpensions.com" className="text-base font-normal hover:text-blue-600 text-grey-100">Info@npfpensions.com</a>
                </div>
              </div>
              <div className="flex gap-2.5 items-start">
                <Image src="/icons/address.svg" width={24} height={24} alt='address' />
                <div className="flex flex-col gap-2.5">
                  <h4 className="text-lg text-black-100 font-medium">Head Office</h4>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 text-base font-normal text-grey-100"
                  >
                    {address}
                  </a>
                </div>
              </div>
              <div className="flex gap-2.5 items-start">
                <Image src="/icons/clock.svg" width={24} height={24} alt='clock' />
                <div className="flex flex-col gap-2.5">
                  <h4 className="text-lg text-black-100 font-medium">Business Hours</h4>
                  <p className="text-base font-normal text-grey-100">Mon - Fri: 8:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            <div className="md:w-80  lg:w-96 xl:w-[590px] flex flex-col gap-7.5 p-7.5 bg-white rounded-[10px] border border-gray-100">
              <div className="flex gap-2.5 items-start">
                <Image src="/icons/response.svg" width={24} height={24} alt='response' />
                <h3 className="text-xl text-black-100 font-medium">Quick Response Promise</h3>
              </div>
              <p className="text-base font-normal text-grey-100">We're committed to providing prompt responses to all inquiries. Most questions receive a response within 4 hours during business hours, with complex matters addressed within 24 hours.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-white p-8 gap-12.5 sm:p-25">
        <div className="flex flex-col gap-5">
          <h1 className="section-header">Our Branch Network</h1>
          <p className="text-base font-normal text-grey-100 text-center">Visit us at any of our conveniently located branches across <br /> Nigeria.</p>
        </div>

        <ContactTabs />

      </div>
    </section>
  )
}

export default Contact