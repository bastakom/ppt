"use client";

import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { TabelRowProps } from "./utils/interface";

interface TabelProps {
  tabel: {
    tabel: TabelRowProps[];
    subtitle: string;
  };
  lang: any;
}

export const Tabel = ({ tabel, lang }: TabelProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div
      className={`${
        tabel?.tabel?.length > 0 ? " mb-10 w-[90%] mx-auto" : "hidden"
      }`}
    >
      <div className="mb-4 font-bold">{tabel.subtitle}</div>
      <div>
        <div>
          <table className="hidden md:table">
            <tbody>
              {tabel?.tabel?.map((row: TabelRowProps, index: number) => (
                <tr
                  key={index}
                  style={{
                    display: index < 5 || isOpen ? "table-row" : "none",
                  }}
                >
                  <td className="px-4 py-2 border">{row.country}</td>
                  <td className="px-4 py-2 border">{row.dates}</td>
                  <td className="px-4 py-2 border">{row.month}</td>
                  <td className="px-4 py-2 border">{row.serie}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="block md:hidden">
            {tabel?.tabel?.map((row: TabelRowProps, index: number) => (
              <div
                key={index}
                className="mb-6 p-4 border rounded-lg shadow-lg bg-white"
                style={{
                  display: index < 5 || isOpen ? "flex" : "none",
                }}
              >
                <div className="flex flex-col mr-4 w-1/2">
                  <div className="font-semibold mb-2">
                    <span className="block">Country:</span>
                    <span className="font-normal">{row.country}</span>
                  </div>
                  <div className="font-semibold mb-2">
                    <span className="block">Month:</span>
                    <span className="font-normal">{row.month}</span>
                  </div>
                </div>
                <div className="flex flex-col w-1/2">
                  <div className="font-semibold mb-2">
                    <span className="block">Serie:</span>
                    <span className="font-normal">{row.serie}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="flex items-center cursor-pointer pt-4"
          onClick={handleOpen}
        >
          {isOpen
            ? lang === "en"
              ? "Read less"
              : lang === "da"
              ? "Læs mindre"
              : "Läs mindre"
            : lang === "en"
            ? "Read more"
            : lang === "da"
            ? "Læs mere"
            : "Läs mer"}
          <IoIosArrowDown className={`ml-2 ${isOpen && "rotate-180"}`} />
        </div>
      </div>
    </div>
  );
};
