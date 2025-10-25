import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { faqData } from "@/data"

export type FaqsDataProps = {
    value: string,
    category: string,
    faqs: FaqItem []
};

type FaqItem = {
    question: string,
    answer: string  
}

export default function FaqTabs() {
    const data = faqData;

    return (
        <div>
            <Tabs defaultValue={data?.[0]?.value || "generalQuestions"} className="flex flex-col justify-center items-center max-md:gap-10 gap-15 xl:gap-10">
                <div className="flex justify-center items-center">
                    <TabsList className="md:h-15.5 h-auto flex flex-wrap  bg-white gap-2.5 p-1.5 rounde-[10px] shadow-md">
                        {data.map((item, index) => (
                            <TabsTrigger
                                key={index}
                                value={item.value}
                                className="h-12.5 w-59.5 bg-white data-[state=active]:bg-blue-100  text-base font-semibold text-grey-100 data-[state=active]:text-white transition-colors duration-200 capitalize cursor-pointer p-4 rounded-md"
                            >
                                {item.category}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </div>

                {data.map((item, index) => {
                    const { value, faqs } = item;
                    return (
                        <TabsContent key={index} value={value} className=''>
                            <Accordion type="single" collapsible className="xl:w-[1040px] flex flex-col gap-5" defaultValue="item-0">
                                {faqs.map((item, index) => (
                                    <AccordionItem key={index} value={`item-${index}`} className="w-full flex flex-col rounded-[30px] border border-gray-100 bg-white p-7.5 gap-5">
                                        <AccordionTrigger className="text-lg text-black-100 font-medium">{item.question}</AccordionTrigger>
                                        <AccordionContent className="text-sm text-grey-100 font-normal">
                                            {item.answer}
                                        </AccordionContent>
                                    </AccordionItem>))}
                            </Accordion>

                        </TabsContent>
                    )
                })}

            </Tabs>
        </div>
    )
}

