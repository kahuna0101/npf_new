import TeamBox from '@/components/TeamBox';
import { managementsTeamQuery } from '@/lib/queries';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { Management } from '@/sanity/types';

const Managements = async() => {
   const managements = await client.fetch(managementsTeamQuery); 

  return (
    <section className="w-full">
      <div className="relative h-[50vh] md:h-[443px] flex flex-col items-center justify-center p-8 gap-12.5 sm:p-25 bg-[url('/images/mortgage-bg.jpg')] bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" aria-hidden="true" />
        <div aria-hidden="true" className="ellipse-top" />
        <div aria-hidden="true" className="ellipse-bottom" />

        <div className="absolute z-10 flex flex-col items-center gap-7.5 text-center p-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white">Management Team</h1>
          <p className="text-base md:text-lg font-medium text-white text-center">A dynamic group of experts united by innovation and excellence. Together, <br /> we implement bold strategies to propel NPF Pensions into a prosperous <br /> future.</p>
        </div>
      </div>

      <div className="flex flex-col bg-white-100 p-12 gap-12.5 sm:p-25">
        <div className="flex flex-col gap-7.5">
          <h1 className="section-header">Our Leadership Team</h1>
          <p className="text-base font-normal text-grey-100 text-center">Meet the experienced professionals guiding NPF Pensions Limited <br /> toward continued excellence.</p>
        </div>
        <div className="flex flex-wrap items-start justify-center gap-7.5">
          {managements.map((data: Management) => {
            const { _id, name, role, bio } = data;
            const image  = data?.image ? urlFor(data.image).url(): "";

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

export default Managements