import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

interface PackageImageBlockProps {
  el: {
    subtitle: string;
    image: {
      filename: string;
      alt: string;
    };

    video: boolean;
    image_right: boolean;
    second_image: {
      filename: string;
      alt: string;
    };

    third_image: {
      filename: string;
      alt: string;
    };

    content: React.ReactNode[];
    dropdown_content: React.ReactNode[];
    second_content: React.ReactNode[];
    third_content: React.ReactNode[];

    read_less_btn: string;
    read_more_btn: string;
  };
}
export const PackageImageBlock = ({ el }: PackageImageBlockProps) => {
  const [readMore, setReadMore] = useState(false);

  const handleDropdown = () => {
    setReadMore(!readMore);
  };

  return (
    <>
      <div
        className={`${"image" in el && el.image ? "lg:flex  gap-6" : "hidden"}`}
      >
        <div
          className={` lg:flex flex-col items-center justify-center gap-6 grid grid-cols-1 mb-6 lg:mb-0 `}
        >
          {el.video ? (
            <video
              controls
              className="w-[90%] mx-auto lg:w-[52.5vw] h-full lg:max-h-[450px] object-cover"
            >
              <source src={el?.image?.filename} type="video/mp4" />
            </video>
          ) : el?.image?.filename ? (
            <div className="relative w-[90%]  mx-auto lg:w-[52.5vw] h-[300px] md:h-[450px]">
              <Image
                src={el?.image?.filename}
                fill
                className="object-cover"
                alt={el?.image?.alt}
              />
            </div>
          ) : null}

          <div className="text-[14px] w-[90%] lg:w-[52.5vw] mx-auto lg:mt-0 ">
            <div className="package-container">{render(el.content)}</div>
            {readMore && (
              <div className="mt-4">{render(el.dropdown_content)}</div>
            )}
            <div className={`${!el.video ? "hidden" : "text-[14px]"}`}>
              {readMore ? (
                <div
                  className="flex items-center gap-2 mt-2"
                  onClick={() => handleDropdown()}
                >
                  <button>{el.read_less_btn}</button>
                  <IoIosArrowUp />
                </div>
              ) : (
                <div
                  className="flex items-center gap-2 mt-2"
                  onClick={() => handleDropdown()}
                >
                  <button>{el.read_more_btn}</button>
                  <IoIosArrowDown fontSize={15} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {el?.second_image?.filename ? (
        <div
          className={`lg:flex w-[90%]  lg:w-[100%] mx-auto  lg:flex-col flex-row items-center gap-6 grid grid-cols-1`}
        >
          {el.video ? (
            <video
              controls
              className="w-[100%] lg:w-[52.5vw] h-full lg:max-h-[450px] object-cover"
            >
              <source src={el?.second_image?.filename} type="video/mp4" />
            </video>
          ) : (
            <div className="relative lg:w-[52.8vw]  h-[300px] md:h-[450px]">
              <div>
                <Image
                  src={el?.second_image?.filename}
                  fill
                  className="object-cover"
                  alt={el?.second_image?.alt}
                />
              </div>
            </div>
          )}
          <div className="w-[100%] lg:w-[90%]">
            <h3 className="font-semibold text-[14px]">{el.subtitle}</h3>
            <div>{render(el.second_content)}</div>
          </div>
        </div>
      ) : null}
      {el?.third_image?.filename ? (
        <div className="lg:flex flex-col justify-center items-center gap-6 mt-6 lg:mt-0">
          <div className="relative w-[90%] mx-auto lg:w-[52.2vw] h-[450px]">
            <div>
              <Image
                src={el?.third_image?.filename}
                fill
                className="object-cover"
                alt={el?.third_image?.alt}
              />
            </div>
          </div>

          <div className="lg:max-w-[89.8%] mt-6 lg:mt-0 w-[90%] mx-auto">
            <div>{render(el.third_content)}</div>
          </div>
        </div>
      ) : null}
    </>
  );
};
