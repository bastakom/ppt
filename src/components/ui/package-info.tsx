import { CiCalendarDate } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { IoTicketOutline } from "react-icons/io5";
import { render } from "storyblok-rich-text-react-renderer";
import useStore from "../lib/store";

interface PackageInfoProps {
  content: {
    heading: string;
    date: string;
    choose_dates: string;
    position: string;
    price: string;
    package_info: React.ReactNode[];
    date_title: string;
    position_title: string;
    price_title: string;
  };
}

export const PackageInfo = ({ content }: PackageInfoProps) => {
  const { openCalender, setOpenCalender } = useStore();

  return (
    <div className="flex flex-col gap-4">
      <h2>{content.heading}</h2>
      <div className="flex gap-4">
        <span>
          <CiCalendarDate fontSize={30} />
        </span>
        <div className="flex flex-col">
          <h2 className="smaller-heading ">{content.date_title}</h2>
          <div className="text-[18px]">{content.date}</div>
          {content.choose_dates !== "" && (
            <button
              className="text-[#00e154] text-[14px] pt-2 font-medium scroll text-start"
              onClick={() => setOpenCalender(!openCalender)}
            >
              {content.choose_dates}
            </button>
          )}
        </div>
      </div>
      <div className="flex gap-4">
        <span>
          <CiLocationOn fontSize={30} />
        </span>
        <div className="flex flex-col">
          <h2 className="smaller-heading ">{content.position_title}</h2>
          <div className="text-[18px]">{content.position}</div>
        </div>
      </div>
      <div className="flex gap-4">
        <span>
          <IoTicketOutline fontSize={30} />
        </span>
        <div className="flex flex-col">
          <h2 className="smaller-heading ">{content.price_title}</h2>
          <div className="text-[18px]">{content.price}</div>
        </div>
      </div>
      <div className="package-info lg:w-[670px] mt-4 mb-8 lg:mb-0 lg:mt-10">
        {render(content.package_info)}
      </div>
    </div>
  );
};
