"use client";

import React, { useState } from "react";
import { StandardForm } from "@/app/components/form/standard-form";
import { TripsCard } from "./ui/trips-card";
import { v4 as uuidv4 } from "uuid";
import { Settings } from "./utils/interface";

interface FilterProps {
  blok: {
    filter_links: string[];
    smaller_cards: boolean;
    title: string;
    show_filter: boolean;
  };

  resor: string[];
  settings: Settings;
  lang: any;
}
export const Filter = ({ blok, resor, settings, lang }: FilterProps) => {
  const [filter, setFilter] = useState("alla");
  const [filterContent, setFilterContent] = useState("alla");
  const handleFilter = (data: string) => {
    setFilter(data);
    setFilterContent(data);
  };

  const filteredTitles = blok.filter_links.filter((el: any) => {
    if (filter === "alla") {
      return el;
    } else {
      return el.link_title.includes(filter);
    }
  });

  const filteredContent = blok.filter_links.filter((el: any) => {
    if (filter === "") {
      return el;
    } else {
      return el.link_title.includes(filterContent);
    }
  });

  const filteredForm = blok.filter_links.filter((el: any) => {
    if (el.display_form || filter === "alla") {
      return el.link_title.includes(filterContent);
    } else {
      return null;
    }
  });

  return (
    <div className={`${blok.smaller_cards ? "lg:mt-14" : "lg:mt-20"}`}>
      <h2 className="ordinary-heading text-center mt-10 mb-4 lg:mt-0">
        {blok.title}
      </h2>
      {blok.show_filter && (
        <div className="flex flex-col lg:flex-row justify-center lg:gap-4">
          <button
            className={
              filter === "alla"
                ? "font-bold underline decoration-black underline-offset-4"
                : ""
            }
            onClick={() => handleFilter("alla")}
          >
            {lang == "en"
              ? "All trips"
              : lang == "da"
              ? "Alle ture"
              : "Alla resor"}
          </button>
          <div className="invisible lg:visible">|</div>

          {blok.filter_links.map(
            (el: any, index: number) =>
              el.title && (
                <React.Fragment key={uuidv4()}>
                  <button
                    key={uuidv4()}
                    onClick={() => handleFilter(el.link_title)}
                    className={
                      filter === `${el.link_title}`
                        ? "font-bold underline decoration-black underline-offset-4"
                        : ""
                    }
                  >
                    {el.title}
                  </button>
                  <div className="invisible lg:visible">|</div>
                </React.Fragment>
              )
          )}
        </div>
      )}
      <div className="w-[100%] flex justify-center text-center mt-4 lg:mt-8 text-[14px] leading-[22px]">
        {filteredContent.map((el: any) => {
          return (
            <div className="w-[90%] lg:w-[40%]" key={uuidv4()}>
              {el.content}
            </div>
          );
        })}
      </div>
      <div>
        {filteredTitles.map((el: any) => {
          return (
            <div
              key={uuidv4()}
              className={`${
                el.section_title == ""
                  ? "invisible"
                  : "card-container visible mb-10 lg:mb-20"
              }`}
            >
              <div className="w-[90%] mx-auto">
                <h2>{el.section_title}</h2>
              </div>
              <div
                className={`w-[90%] mx-auto grid grid-cols-1 gap-6 mt-4 ${
                  blok.smaller_cards ? "lg:grid-cols-4" : "lg:grid-cols-3"
                } `}
              >
                {resor
                  .filter(
                    (item: any) =>
                      filter === "alla" ||
                      item.content.category.includes(filter)
                  )
                  .filter((item: any) =>
                    item.content.category.includes(el.link_title)
                  )
                  .map((item: any) => {
                    return (
                      <TripsCard
                        item={item}
                        boolean={blok.smaller_cards}
                        key={uuidv4()}
                      />
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>
      {filteredForm.map((el: any) => {
        return (
          <div
            className="flex justify-center mb-20 lg:mb-0 lg:mt-10"
            key={uuidv4()}
          >
            <StandardForm settings={settings} />
          </div>
        );
      })}
    </div>
  );
};
