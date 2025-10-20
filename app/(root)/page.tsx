import { HeroSlider } from "@/components/HeroSlider";

export default async function Home() {


  return (
    <>
      <section>
        <HeroSlider
        />
      </section>

      <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <p>New NPF Site</p>
      </div>
    </>
  );
}
