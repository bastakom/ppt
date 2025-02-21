import Image from "next/image";
import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";

interface TripsCardProps {
  item: {
    id: string;
    full_slug: string;

    content: {
      show_overlay_text: boolean;
      overlay_text: string;
      future_image: {
        filename: string;
        alt: string;
      };
      position: boolean;
      heading: string;
      date: string;
      future_content: React.ReactNode[];
    };
  };

  boolean: boolean;
}

export const TripsCard = ({ item, boolean }: TripsCardProps) => {
  return (
    <>
      <Link href={`/${item.full_slug.replace(/^(da|en)\//, "")}`} key={item.id}>
        <div>
          <div className="bg-white rounded-lg shadow-lg mb-4 lg:mb-0">
            <div
              className={`relative  ${
                boolean ? " h-[34vh]" : "lg:w-[28.6vw] h-[44vh]"
              } overflow-hidden`}
            >
              {item.content.show_overlay_text && !boolean && (
                <div className="relative top-[8%] w-[36vw] right-[8%] lg:top-[10%] md:top-[10%] md:right-[27%] lg:right-[7%] z-10 bg-[linear-gradient(220deg,_#f15c22_14%,_#f15c22_30%,_#e95326_50%,_#d33b30_82%,_#c33_91%)] lg:w-[10vw] h-[4vh] -rotate-[45deg] text-white flex items-center justify-center uppercase text-[10px]">
                  {item.content.overlay_text}
                </div>
              )}
              {item.content.future_image.filename !== "" && (
                <Image
                  src={item.content.future_image.filename}
                  alt={item.content.future_image.alt}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                />
              )}
            </div>

            <div className="p-4 min-h-[370px] mt-2 flex flex-col gap-2">
              <div className="text-[#004e70] text-[11px] font-bold !text-center">
                {item.content.position}
              </div>
              <h2 className="text-xl text-black !text-[18px] font-bold text-center">
                {item.content.heading}
              </h2>
              <div className="text-[#004e70] text-center text-[12px]">
                {item.content.date}
              </div>
              <div className="package-content mt-2">
                {render(item.content.future_content)}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
