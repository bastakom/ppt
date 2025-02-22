import { BsPlusLg } from "react-icons/bs";
import { Card } from "./card";
import { PackageImageBlock } from "./ui/packages-img-block";
import { DropDown } from "./ui/dropdown";
import { Tabel } from "./tabel";
import useStore from "./lib/store";
import { InfoBlockElement } from "./utils/interface";

interface InfoBlock {
  paket: InfoBlockElement[];
  lang: any;
}

export const InfoBlock = ({ paket, lang }: InfoBlock) => {
  const { open, setOpen } = useStore();

  const handleClick = (id: any) => {
    setOpen(open === id ? null : id);

    if (open === id) {
      setOpen("");
    }
  };

  return (
    <div className="lg:mb-8">
      <div className="flex flex-col gap-6 mt-4 lg:mt-0">
        {paket.map((el: InfoBlockElement, index: number) => {
          return (
            <div className="flex flex-col  gap-6 items-center" key={index}>
              <div
                className="flex items-center text-[26px] gap-6 cursor-pointer w-full lg:w-[63.2%] justify-between bg-[#f8f8f8] p-6"
                onClick={() => handleClick(el._uid)}
              >
                <h2 className="smaller-heading">{el.title}</h2>
                <BsPlusLg fontSize={20} className="text-[#004e70]" />
              </div>

              <div
                className={`${
                  open == el._uid
                    ? "md:flex flex-col items-center lg:gap-8 lg:mt-4 lg:mb-4 w-[90%] lg:w-[70%]"
                    : "hidden"
                }`}
              >
                <PackageImageBlock el={el} />

                <Card content={el} />

                <DropDown el={el} />

                <Tabel tabel={el} lang={lang} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
