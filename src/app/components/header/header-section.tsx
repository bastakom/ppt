"use client";
import { useState } from "react";
import LinkBtn from "../../../components/link-btn";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

const HeaderSection = (props: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;
    window.location.replace(selectedLang);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { logo, header_menu, logoLink } = props.props.content;

  const firstMenuItems = header_menu.slice(0, 3);
  const secondMenuItems = header_menu.slice(3, 5);

  return (
    <nav className="flex  items-center bg-white border-gray-200 px-4">
      <div className="grid grid-cols-3 flex-nowrap lg:flex  items-center justify-between pb-4 pt-4 lg:pt-0 mx-auto gap-10 lg:py-4 justify-self-end justify-items-center lg:w-[100%]">
        {/* Hamburgermeny-knapp */}
        <button
          data-collapse-toggle="navbar-search"
          type="button"
          className="inline-flex items-center p-2  h-16 justify-center text-sm rounded-lg md:hidden focus:outline-none order-3 w-auto"
          aria-controls="navbar-search"
          aria-expanded={isMenuOpen ? "true" : "false"}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-[50px]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Menu for larger screens */}
        <div
          className="flex items-center w-full justify-between md:justify-center lg:gap-[1.5rem]"
          id="navbar-default"
        >
          {/* Första menyn */}
          <ul className="hidden md:flex md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white lg:gap-[1rem]">
            {firstMenuItems.map((element: any, i: number) => (
              <li key={i}>
                {
                  <LinkBtn
                    className={"font-medium text-lg headerLink"}
                    link={`/${element.link?.cached_url.replace(
                      /^\/(da|en)\//,
                      ""
                    )}`}
                    title={element.name}
                  />
                }
              </li>
            ))}
          </ul>

          {/* Logotyp */}

          <LinkBtn
            link={`/${logoLink.cached_url.replace(/^\/(da|en)\//, "")}`}
            className="flex items-center space-x-3 rtl:space-x-reverse md:pr-8 md:pl-8"
          >
            <Image
              alt={logo.name}
              height={64}
              width={129}
              src={logo.filename}
            />
          </LinkBtn>

          {/* Andra menyn */}
          <ul className="hidden md:flex md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white lg:gap-[1.5rem]">
            {secondMenuItems.map((element: any, i: number) => (
              <li key={i}>
                <LinkBtn
                  className={"font-medium text-lg headerLink"}
                  link={`/${element.link?.cached_url.replace(
                    /^\/(da|en)\//,
                    ""
                  )}`}
                  title={element.name}
                />
              </li>
            ))}
          </ul>

          {/* Hamburger meny för mobil */}
          <div
            className={`fixed flex-col h-[100vh] w-full left-0 top-0 z-50 bg-white gap-5 pt-24  transition-all duration-500 right-0 ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            id="mobile-menu"
          >
            <button className="fixed top-0 right-0 z-10" onClick={toggleMenu}>
              <IoMdClose
                fontSize={60}
                className="mt-[2rem] mr-[2rem] md:mt-[2rem] md:mr-[2rem]"
              />
            </button>
            <div className="flex items-center justify-center h-[62vh]">
              <ul>
                {firstMenuItems.map((element: any, i: number) => (
                  <li key={i} className={"mb-[20px] "} onClick={toggleMenu}>
                    <LinkBtn
                      className={"font-semibold mb-[20px] text-[36px]"}
                      link={`${element.link?.cached_url.replace(
                        /^\/(da|en)\//,
                        "/"
                      )}`}
                      title={element.name}
                    />
                  </li>
                ))}
                {secondMenuItems.map((element: any, i: number) => (
                  <li key={i} className={"mb-[20px]"} onClick={toggleMenu}>
                    <LinkBtn
                      className={"font-semibold text-[36px]"}
                      link={`${element.link?.cached_url.replace(
                        /^\/(da|en)\//,
                        "/"
                      )}`}
                      title={element.name}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <form className="w-[100%] lg:w-[10%] ">
          <div className="relative">
            <select
              name="language"
              id="language-select"
              onChange={handleLangChange}
              className="block py-2.5 px-0 w-full lg:text-lg text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option value="https://premierpadeltravel.se">Svenska</option>
              <option value="https://premierpadeltravel.dk">Danska</option>
              <option value="https://premierpadeltravel.com">Engelska</option>
            </select>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none lg:text-2xl">
              <MdKeyboardArrowDown />
            </div>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default HeaderSection;
