import TeamBox from "@/components/TeamBox"
import { directorsQuery } from "@/lib/queries";
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image";
import { Director } from "@/sanity/types";

const Directors = async () => {
  const directors = await client.fetch(directorsQuery);

  return (
    <section className="w-full">
      <div className="relative h-[50vh] md:h-[443px] flex flex-col items-center justify-center p-8 gap-12.5 sm:p-25 bg-[url('/images/hand-shake-bg.jpg')] bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" aria-hidden="true" />
        <div aria-hidden="true" className="ellipse-top" />
        <div aria-hidden="true" className="ellipse-bottom" />

        <div className="absolute z-10 flex flex-col items-center gap-7.5 text-center p-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white">Board OF Directors</h1>
          <p className="text-base md:text-lg font-medium text-white text-center">Our board of directors at are a dedicated team of industry leaders who are all <br /> committed to ensuring we uphold the values of integrity, excellence, and <br /> innovation in everything we do here at NPF Pensions.</p>
        </div>
      </div>

      <div className="flex flex-col bg-white-100 p-12 gap-12.5 sm:p-25">
        <div className="flex flex-col gap-7.5">
          <h1 className="section-header">Our Leadership Team</h1>
          <p className="text-base font-normal text-grey-100 text-center">Meet the experienced professionals guiding NPF Pensions Limited <br /> toward continued excellence.</p>
        </div>
        <div className="flex flex-wrap items-start justify-center gap-7.5">
          {directors.map((data:Director) => {
            const { _id, name, role, bio } = data;
            const image  = data?.image ? urlFor(data.image).url(): "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.png";
            return (
              <TeamBox 
                key={_id}
                name={name!}
                role={role!}
                bio={bio!}
                image={image}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Directors