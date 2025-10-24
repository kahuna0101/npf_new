import FormDownloadBox from "@/components/FormDownloadBox"
import { formsQuery } from "@/lib/queries"
import { client } from "@/sanity/lib/client"
import { Form } from "@/sanity/types"
import Link from "next/link"

export type FormFile = Omit<Form, "file"> & {
  file?: {
    url?: string;
    type?: string;
    size?: number;
  };
};

const FormsDownloads = async () => {

  const formsData = await client.fetch(formsQuery);

  return (
    <section className="w-full">
      <div className="relative h-64 md:h-[443px] flex flex-col items-center justify-center p-8 gap-12.5 sm:p-25 bg-[url('/images/vc-bg.jpg')] bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" aria-hidden="true" />
        <div aria-hidden="true" className="ellipse-top" />
        <div aria-hidden="true" className="ellipse-bottom" />

        <div className="absolute z-10 flex flex-col items-center gap-7.5 text-center p-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white">Forms & Downloads</h1>
          <p className="text-base md:text-lg font-medium text-white text-center">Download the forms and documents you need for your pension account <br /> management.</p>
        </div>
      </div>

      <div className="flex justify-center bg-white-100 p-12 gap-12.5 sm:p-25">
        <div className="flex flex-wrap justify-center w-full md:w-310 gap-7.5">
          {formsData.map((data: FormFile) => {

            return (
              <FormDownloadBox
                key={data._id}
                title={data.title ?? ""}
                description={data.description ?? ""}
                fileUrl={data.file?.url ?? ""}
                fileType={data.file?.type ?? ""}
                fileSize={`${data.file?.size ?? 0} MB`}
              />
            )
          }
          )}
        </div>

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
  )
}

export default FormsDownloads