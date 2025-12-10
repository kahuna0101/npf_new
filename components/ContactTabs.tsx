import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { contactData } from "@/data";

export type ContactDataProps = {
    value: string,
    category: string,
    branches: BranchItem []
};

type BranchItem = {
    office: string,
    address: string  
}

const ContactTabs = () => {
  const data = contactData;

  // helper function to detect email vs address
  const renderAddress = (text:string) => {
    // check if it's an email (can be multiple separated by commas)
    if (text.includes("@")) {
      return text.split(",").map((email, i) => (
        <a
          key={i}
          href={`mailto:${email.trim()}`}
          className="text-blue-600 hover:underline block"
        >
          {email.trim()}
        </a>
      ));
    }

    // check if it's a phone number
    if (/^\d{7,}$/.test(text.replace(/\D/g, ""))) {
      return (
        <a href={`tel:${text.replace(/\D/g, "")}`} className="text-blue-600 hover:underline">
          {text}
        </a>
      );
    }

    // otherwise treat as physical address → Google Maps
    return (
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(text)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        {text}
      </a>
    );
  };

  return (
    <div>
      <Tabs
        defaultValue={data?.[0]?.value || "northCentral"}
        className="flex flex-col justify-center items-center max-md:gap-10 gap-15 xl:gap-10"
      >
        <div className="flex justify-center items-center">
          <TabsList className="md:h-15.5 h-auto flex flex-wrap bg-white gap-2.5 p-1.5 rounde-[10px] shadow-md">
            {data.map((item, index) => (
              <TabsTrigger
                key={index}
                value={item.value}
                className="h-12.5 w-59.5 bg-white data-[state=active]:bg-blue-100 text-base font-semibold text-grey-100 data-[state=active]:text-white transition-colors duration-200 capitalize cursor-pointer p-4 rounded-md"
              >
                {item.category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {data.map((item, index) => {
          const { value, branches } = item;
          return (
            <TabsContent
              key={index}
              value={value}
              className="w-full bg-white-100 flex flex-col p-7.5 gap-7.5 rounded-[20px]"
            >
              {branches.map((branch, i) => (
                <div key={i} className="flex flex-col gap-2.5">
                  <h4 className="text-lg text-black-100 font-medium">{branch.office}:</h4>
                  <p className="text-base text-grey-100 font-normal">
                    {branch.office === "Regional Manager" ? branch.address : renderAddress(branch.address)}
                  </p>
                </div>
              ))}
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
};

export default ContactTabs