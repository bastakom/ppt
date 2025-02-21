"use client";

import { render } from "storyblok-rich-text-react-renderer";

export const DropDown = ({ el }: any) =>
  el.component === "program" ? (
    <div className="w-[90%] mx-auto">{render(el.content)}</div>
  ) : null;
