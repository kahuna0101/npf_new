import FundPriceTable from "@/components/FundPriceTable";
import { HeroSlider } from "@/components/HeroSlider";
import HomePopup from "@/components/HomePopup";
import NewsletterForm from "@/components/NewsletterForm";
import OpenAccountButtons from "@/components/OpenAccountButtons";
import PensionAdministrationBox from "@/components/PensionAdministrationBox";
import QuickActionsBox from "@/components/QuickActionsBox";
import TestimonialBox from "@/components/TestimonialBox";
import { pensionAdministrationData, quickActionsData, whyChooseData } from "@/data";
import { registeredAccountsQuery, testimonialsQuery } from "@/lib/queries";
import { client } from "@/sanity/lib/client";
import { Testimonial } from "@/sanity/types";
import { Calculator, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const testimonials = (await client.fetch(testimonialsQuery)).slice(0, 2);
  const accounts = (await client.fetch(registeredAccountsQuery));

  return (
    <>
    <HomePopup />
      <HeroSlider />
      <section className="flex flex-col items-center justify-center bg-white-100 p-12 gap-12.5 sm:p-25">
        <div className="flex flex-col gap-5">
          <h1 className="section-header">Pension Administration</h1>
          <p className="text-base font-normal text-grey-100 text-center">Comprehensive pension solutions designed to meet your unique <br /> retirement planning needs.</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {pensionAdministrationData.map((item, index) => (
            <PensionAdministrationBox key={index} title={item.title} description={item.description} href={item.href} icon={item.icon} />
          ))}
        </div>
      </section>

      <section className="relative flex flex-col h-svh items-center justify-center bg-[url('/images/old-couples.jpg')] bg-cover bg-center p-8 gap-12.5 sm:p-25">
        <div className="absolute inset-0 bg-black/60 z-10" aria-hidden="true" />

        <h3 className="font-bold z-10 flex flex-col text-5xl sm:text-6xl text-center py-4">
          <span className="text-white">Prioritize Your Health</span>
          <span className="text-yellow-100">With PenCare Today</span>
        </h3>
        <p className="font-medium z-10 text-xl text-white text-center py-4">
          Exclusive and free health coverage designed specifically for our valued Retirees on Programmed Withdrawal.
        </p>

        <div className="flex flex-col z-10 md:flex-row gap-5">
          <Link href="/pencare" className="w-60 h-14 bg-blue-100 hover:bg-yellow-100 text-base font-semibold border hover:border-none border-blue-100 text-white mx-auto rounded-md flex items-center justify-center relative">
            Discover PenCare
          </Link>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center bg-white p-8 gap-12.5 sm:p-25">
        <div className="flex flex-col gap-5">
          <h1 className="section-header">Quick Actions</h1>
          <p className="text-base font-normal text-grey-100 text-center">Access the tools and resources you need most.</p>
        </div>

        <div className="flex flex-wrap items-start justify-center gap-5">
          {quickActionsData.map((item, index) => (
            <QuickActionsBox key={index} title={item.title} description={item.description} href={item.href} icon={item.icon} />
          ))}
        </div>
      </section>

      <section className="relative flex flex-col items-center justify-center bg-[url('/images/price-bg.jpg')] bg-cover bg-center p-8 gap-12.5 sm:p-25">
        <div className="absolute inset-0 bg-black/60 z-10" aria-hidden="true" />

        <div className="relative z-10 flex flex-col items-center gap-5">
          <h1 className="text-[40px] leading-13 font-bold text-white text-center">36-Month Compounded Rate of Return</h1>
        </div>

        <div className="z-10 flex w-full lg:w-[80%] flex-wrap items-center justify-center gap-7.5">
          <FundPriceTable />
        </div>

        <div className="relative z-10 flex flex-wrap justify-center items-center gap-5">
          <div className="w-68 h-60 flex flex-col justify-center items-center bg-light-green-100 rounded-[20px] shadow-sm border px-6 py-8 duration-300 text-center">

            <div className="mb-4 rounded-full bg-emerald-100 p-3 text-emerald-600 transition-colors duration-300 group-hover:bg-emerald-500 group-hover:text-white">
              <Calculator size={24} strokeWidth={2} />
            </div>

            <h4 className="text-[17px] font-bold text-emerald-950 group-hover:text-white transition-colors duration-300 leading-tight mb-3">
              Administrative Fees Charged
            </h4>

            <div className="space-y-1.5 flex flex-col items-center">
              <p className="text-sm font-bold text-emerald-800 group-hover:text-emerald-50 transition-colors duration-300">
                #107.50 monthly plus VAT of 5%
              </p>
              <p className="text-xs font-normal text-emerald-600 group-hover:text-emerald-100 transition-colors duration-300">
                Deducted from your monthly contributions.
              </p>
            </div>
          </div>

          <div className="w-68 h-60 flex flex-col justify-center items-center bg-light-green-100 rounded-[20px] shadow-sm border px-6 py-8 duration-300 text-center">

            <div className="mb-4 rounded-full bg-emerald-100 p-3 text-emerald-600 transition-colors duration-300 group-hover:bg-emerald-500 group-hover:text-white">
              <Users size={24} strokeWidth={2} />
            </div>

            <h4 className="text-[17px] font-bold text-emerald-950 group-hover:text-white transition-colors duration-300 leading-tight mb-3">
              RSA Registered Accounts
            </h4>

            <div className="space-y-1.5 flex flex-col items-center">
              <p className="text-2xl font-bold text-emerald-800 group-hover:text-emerald-50 transition-colors duration-300">
                {accounts.map((item:any) =>  Number(item.registeredAccounts).toLocaleString())}
              </p>
              <p className="text-xs font-normal text-emerald-600 group-hover:text-emerald-100 transition-colors duration-300">
                Total number of accounts.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center bg-white p-8 gap-12.5 sm:p-25">
        <div className="flex flex-col gap-5">
          <h1 className="section-header">Why Choose NPF Pensions Limited?</h1>
          <p className="text-base font-normal text-grey-100 text-center">We're committed to providing exceptional service and securing <br /> your financial future.</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-7.5">
          {whyChooseData.map((item, index) => (
            <div key={index} className="group w-2xs h-[235px] gap-5 flex flex-col justify-center items-center bg-light-green-100 hover:bg-green-100 rounded-[20px] shadow-md px-5 py-7.5">
              <Image src="/images/eagle.png" alt="eagle" width={47.06} height={44.76} />
              <h4 className="text-lg font-medium text-black-100 group-hover:text-white">{item.title}</h4>
              <p className="text-sm font-normal text-black-100 text-center group-hover:text-white">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative flex flex-col items-center justify-center bg-[url('/images/hand-shake-bg.jpg')] bg-cover bg-center p-8 gap-12.5 sm:p-25">
        <div className="absolute inset-0 bg-black/60 z-10" aria-hidden="true" />

        <div className="relative z-10 flex flex-col items-center gap-5">
          <h1 className="text-[40px] leading-13 font-bold text-white text-center">Take the First Step Towards a Secure Retirement</h1>
          <p className="text-base font-normal text-white text-center">Join over 1.2 million Nigerians who have chosen NPF Pensions for <br /> their retirement planning</p>
        </div>

        <OpenAccountButtons className="relative z-10 items-center" />
      </section>

      <section className="flex flex-col items-center justify-center bg-white-100 p-12 gap-12.5 sm:p-25">
        {/* <div className="flex flex-col gap-5">
          <h1 className="section-header">Testimonials</h1>
          <p className="text-base font-normal text-grey-100 text-center">What people have to say about NPF Pensions Limited</p>
        </div> */}

        <div className="flex flex-wrap items-center justify-center gap-8">
          <div className="md:3xl lg:w-5xl flex flex-col md:flex-row items-center md:items-start gap-7.5 p-7.5 rounded-[10px] border border-red-600/50">
            <Image src="/images/caveat.png" alt="caveat" width={90} height={90} />
            <p className="text-xl font-normal text-grey-100 text-start">NPF Pensions Limited is wholly committed to the welfare of its clientele (i.e. Personnel of the Nigeria Police Force and their Next of Kin) and as such, no client is required to make any payment to the Company, its employees or any person(s) purporting to be acting on behalf of NPF Pensions Limited, as a condition for accessing any of its services, ranging from simple enquiries to processing and payment of retirement benefits</p>
          </div>
          {/* {testimonials.map((item: Testimonial) => (
            <TestimonialBox key={item._id} name={item.name!} occupation={item.occupation!} testimony={item.testimony!} />
          ))} */}
        </div>

        {/* <Link href="/testimonials" className="h-[60px] p-4 border border-blue-100 bg-white text-base font-semibold text-blue-100 rounded-[8px]">View more</Link> */}
      </section>

      <section className="flex flex-col items-center justify-center bg-white p-8 gap-12.5 sm:p-25">
        <div className="flex flex-col gap-5">
          <h1 className="section-header">Our License</h1>
          <p className="text-base font-normal text-grey-100 text-center">We are licensed and regulated by Pension regulatory bodies</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-19.5">
          <Image src="/images/pencom.png" alt="pencom logo" width={100} height={180} />
          <Image src="/images/ndpa.jpg" alt="ndpa logo" width={280} height={180} />
        </div>
      </section>

      <section className="flex flex-col items-center justify-center bg-light-blue-100 p-8 gap-12.5 sm:p-25">
        <div className="flex flex-col md:flex-row gap-5 bg-blue-100 rounded-[50px] px-10 md:px-[70px] py-12.5 md:py-20">
          <div className="flex flex-col gap-5">
            <h4 className="text-[40px] leading-13 max-md:text-4xl font-bold text-white">Don't miss any update <br /> from us</h4>
            <p className="text-base font-normal text-white">Subscribe and be the first to get all Free Retirement Planning Guide</p>
          </div>

          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
