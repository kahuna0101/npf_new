import { ImagesSlider } from "./ui/images-slider";
import { client } from "@/sanity/lib/client";
import { heroSliderQuery } from "@/lib/queries";
import { Slider } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";

export async function HeroSlider() {
  // fetch returns the array directly
  const sliderData = await client.fetch(heroSliderQuery);

  // build safe arrays for images and titles
  const images: string[] =
    (sliderData ?? []).map((item: Slider) =>
      item?.image ? (urlFor ? urlFor(item.image).url() : item.image.asset?.url) ?? "" : ""
    ).filter(Boolean);

  const titles: string[] = (sliderData ?? []).map((item: Slider) => item?.title ?? "");
  const descriptions: string[] = (sliderData ?? []).map((item: Slider) => item?.description ?? "");

  
  return (
    <ImagesSlider
     className="h-[40.63rem]"
     images={images} 
     title={titles} 
     description={descriptions}
     direction="right" 
    />
  );
}