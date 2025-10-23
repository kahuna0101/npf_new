import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import { benefitsPageData } from "@/data";
import ApplicationProcessBox from "./ApplicationProcessBox";
import BenefitFeatures from "./BenefitFeatures";

type BenefitsTabsProps = {
    onTabChange?: (key: string) => void;
};

export type BenefitsPageProps = {
    value?: string,
    tabsTitle?: string,
    title?: string,
    description?: string,
    features?: string[],
    requirements?: string[],
    process?: string[],
    bgImg?: string
};

export default function BenefitsTabs({ onTabChange }: BenefitsTabsProps) {
    const data = benefitsPageData;

    return (
        <div>
            <Tabs
                defaultValue={data?.[0]?.value ?? "retirement-withdrawal"}
                onValueChange={(val: string) => onTabChange?.(val)}
                className="flex flex-col max-md:gap-10 gap-15 xl:gap-10"
            >
                <div className="flex justify-center items-center">
                    <TabsList className="md:h-15.5 h-auto flex flex-wrap  bg-white gap-2.5 p-1.5 rounde-[10px] shadow-md">
                        {data.map((item, index) => (
                            <TabsTrigger
                                key={index}
                                value={item.value!}
                                className="h-12.5 w-59.5 bg-white data-[state=active]:bg-blue-100  text-base font-semibold text-grey-100 data-[state=active]:text-white transition-colors duration-200 capitalize cursor-pointer p-4 rounded-md"
                            >
                                {item.tabsTitle}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </div>



                {data.map((item, index) => {
                    const { value, title, description, features, requirements, process } = item;
                    return (
                        <TabsContent key={index} value={value!} className='flex flex-col md:flex-row items-start justify-center gap-7.5'>

                            <BenefitFeatures title={title} description={description} features={features} requirements={requirements} />
                            <div className="flex flex-col gap-7.5">
                                <ApplicationProcessBox process={process} />
                            </div>
                        </TabsContent>
                    )
                })}

            </Tabs>
        </div>
    )
}