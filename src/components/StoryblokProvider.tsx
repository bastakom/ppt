"use client";
import type { PropsWithChildren } from "react";
import { storyblokInit } from "@storyblok/react/rsc";
import Page from "./Page";
import HeroSection from "./hero-section";
import About from "./about";
import { ImageSection } from "./image-section";
import TravelTerms from "./travel-terms";
import { LogoBlock } from "./logo-block";
import { Tabel } from "./tabel";
import { ContactForm } from "./contact_form";
import { Filter } from "./filter-package";

storyblokInit({
  components: {
    page: Page,
    Hero: HeroSection,
    section: About,
    image_section: ImageSection,
    terms: TravelTerms,
    partners: LogoBlock,
    filter: Filter,
    tabel: Tabel,
    contact_form: ContactForm,
  },
  enableFallbackComponent: true,
});

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};
