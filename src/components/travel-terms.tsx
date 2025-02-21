"use client";
import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

export const TravelTerms = ({ blok }: any) => {
  const { heading, subheading, information, mainContent } = blok;
  return (
    <div
      className="travelTermsWrapper w-[90%] lg:w-[80%] m-auto mt-10"
      {...storyblokEditable(blok)}
    >
      <div>
        <h2 className="text-[30px] lg:text-[36px]">{heading}</h2>
      </div>

      <div
        className={`${
          subheading ? "visible travelTermsContent" : "invisible lg:-mt-10"
        }`}
      >
        <h2>{subheading}</h2>
        <p>{information}</p>
      </div>

      <div className="travelTermsContent">
        <div className="terms">{render(mainContent)}</div>
      </div>
    </div>
  );
};

export default TravelTerms;
