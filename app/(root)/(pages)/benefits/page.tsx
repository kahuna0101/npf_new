"use client";

import { useState } from "react";
import BenefitsTabs from '@/components/BenefitsTabs';
import { benefitsPageData } from '@/data';
import Image from 'next/image';
import Link from 'next/link';

const Benefits = () => {
  const [activeBg, setActiveBg] = useState<string>(
    benefitsPageData?.[0]?.bgImg ?? "/images/vc-bg.jpg"
  );

  const handleTabChange = (value: string) => {
    const found = benefitsPageData.find((d) => d.value === value);
    setActiveBg(found?.bgImg ?? benefitsPageData?.[0]?.bgImg ?? "/images/vc-bg.jpg");
  };

  return (
    <section className="w-full">
      <div
        className="relative h-[50vh] md:h-[443px] flex flex-col items-center justify-center p-8 gap-12.5 sm:p-25 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${activeBg})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-10" aria-hidden="true" />
        <div aria-hidden="true" className="ellipse-top" />
        <div aria-hidden="true" className="ellipse-bottom" />

        <div className="absolute z-10 flex flex-col items-center gap-7.5 text-center p-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center">Accessing Your Benefits Made <br /> Simple</h1>
          <p className="text-base md:text-lg font-medium text-white text-center">Understanding your benefit options and accessing your retirement savings <br /> when you need them most</p>

          {/* upload benefit guide document */}
          <Link href="/docs/REGULATIONS-FOR-THE-ADMINISTRATION-OF-RETIREMENT-AND-TERMINAL-BENEFITS.pdf" target="_blank" className="w-60 h-14 gap-2.5 bg-blue-100 hover:bg-yellow-100 text-base font-semibold border hover:border-none border-blue-100 text-white mx-auto rounded-md flex items-center justify-center relative">
            <Image src="/images/downloads.png" width={24} height={24} alt='download' className="invert brightness-0 contrast-200" />
            Download Benefit Guide
          </Link>
        </div>
      </div>

      <div className="bg-white-100 p-8 gap-12.5 sm:p-25">
        <BenefitsTabs onTabChange={handleTabChange} />
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
  );
};

export default Benefits;