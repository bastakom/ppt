import { TravelReqForm } from "@/app/components/form/travel-request-form";
import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import { Settings } from "./utils/interface";

interface AboutProps {
  blok: {
    Heading: string;
    content: React.ReactNode[];
    styling_left: boolean;
    form: boolean;
    no_spacing: boolean;
    citat: React.ReactNode[];
    citat_person: string;
  };
  lang: any;
  settings: Settings;
}
export const About = ({ blok, settings, lang }: AboutProps) => {
  const {
    Heading,
    content,
    styling_left,
    form,
    citat,
    no_spacing,
    citat_person,
  } = blok;
  console.log(lang);
  return (
    <div
      className={`
      ${styling_left ? "wrapper-left" : "wrapper"}
      ${form && "bg-[#f8f8f8] p-10 md:!p-16"}
      ${no_spacing && "no-spacing"}
    `}
      {...storyblokEditable(blok)}
    >
      <h2 className="ordinary-heading pb-2 text-center lg:text-start">
        {Heading}
      </h2>
      <div className="md:flex md:justify-center lg:justify-between md:pb-8 lg:pb-0">
        <div className="paragraph md:text-center lg:text-start">
          {render(content)}
        </div>
        <div className="flex flex-col md:hidden lg:flex">
          <div className="citat ">{render(citat)}</div>
          <div className="text-14px italic  lg:ml-10 lg:text-start pt-2 text-center">
            {citat_person}
          </div>
        </div>
      </div>

      {form && <TravelReqForm settings={settings} lang={lang} />}
    </div>
  );
};

export default About;
