import Image from "next/image"

export type FormProps = {
  title: string;
  description?: string;
  fileUrl: string;
  fileType: string;
  fileSize: string | number;
}

const FormDownloadBox = ({ title, description, fileType, fileSize, fileUrl }: FormProps) => {
    const shortType = fileType?.split("/")[1] ?? "";

    return (
        <div className="md:w-[393px] flex p-5 gap-5 border border-gray-100 bg-white rounded-[10px] shadow">
            <div className="flex justify-center items-center w-12.5 h-12.5 p-2.5 rounded-[10px] bg-light-blue-100">
                <Image src="/icons/forms-blue.svg" alt="forms" width={24} height={24} />
            </div>

            <div className="flex flex-1 flex-col gap-2.5">
                <h4 className="text-lg font-medium text-black-100">{title}</h4>
                <p className="text-base font-normal text-grey-100">{description}</p>
                <div className="flex gap-2.5 w-full">
                  <p className="text-base font-normal uppercase text-grey-100">{shortType} • {fileSize}</p>
                  <a href={fileUrl} download target="_blank" rel="noopener noreferrer">
                    <Image src="/icons/downloads-blue.svg" width={20} height={20} alt="download"/>
                  </a>
                </div>
            </div>
        </div>
    )
}

export default FormDownloadBox