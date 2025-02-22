"use client";

import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { CardItem } from "./utils/interface";

interface ContentProps {
  content: {
    card: CardItem[];
    content: React.ReactNode[];
    read_less_btn: string;
    read_more_btn: string;
  };
}

export const Card = ({ content }: ContentProps) => {
  const [openStates, setOpenStates] = useState<{ [key: string]: boolean }>({});

  const handleOpen = (index: number) => {
    setOpenStates((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className={`${content.card ? "lg:-mb-16" : "hidden"} `}>
      {content.content && (
        <div className="w-[90%] ml-4 -mb-6 lg:w-[90%] md:ml-12 lg:mb-0 ">
          {render(content.content)}
        </div>
      )}
      <div
        className={`${
          content.card?.length > 0
            ? "flex flex-col justify-center items-center gap-10 mb-8 mt-4 lg:mt-0 "
            : "invisible"
        }`}
      >
        {content?.card?.map((el: any, index: number) => {
          const hasBulletList =
            el.content?.content?.[0]?.type === "bullet_list";

          return (
            <div
              key={el.title}
              className={`md:flex flex-row gap-4 bg-white rounded shadow-lg ${
                openStates[index]
                  ? "lg:h-[65vh] w-[90%] md:w-[84vw] lg:w-[53vw]"
                  : "h-[65vh] md:h-[52vh] w-[90%] md:w-[84vw] lg:w-[53vw]"
              }`}
            >
              <div className="md:min-w-[42vw] md:max-w-[42vw] lg:min-w-[50%] lg:max-w-[50%] h-[30vh] md:h-auto">
                <Image
                  src={el.img.filename}
                  alt={el.img.alt}
                  className="w-full h-full object-cover rounded"
                  width={400}
                  height={300}
                />
              </div>
              <div
                className={`flex flex-col gap-2 p-4 lg:w-[50%] ${
                  !hasBulletList && "items-center justify-center"
                }`}
              >
                <h3
                  className={`${
                    hasBulletList ? "text-xl font-semibold" : "text-[30px]"
                  }`}
                >
                  {el.title}
                </h3>

                <h4 className="text-lg font-light">{el.price}</h4>
                <div className="card-content text-sm text-gray-700">
                  {render(el.content)}

                  {el.second_content?.content[0].content?.length > 0 && (
                    <>
                      <div
                        className="text-[14px] cursor-pointer"
                        onClick={() => handleOpen(index)}
                      >
                        {el.second_content && (
                          <div
                            className={`${
                              openStates[index] ? "lg:-mt-4" : "hidden"
                            }`}
                          >
                            {render(el.second_content)}
                          </div>
                        )}
                        <div className="flex items-end mt-6">
                          {openStates[index]
                            ? `${content.read_less_btn}`
                            : `${content.read_more_btn}`}
                          <IoIosArrowDown
                            fontSize={20}
                            className={`pt-1 ml-2 ${
                              openStates[index] && "rotate-180"
                            }`}
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
