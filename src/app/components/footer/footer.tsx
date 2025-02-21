import { getData } from "@/app/lib/get-data";
import FooterSection from "./footer-section";

const Footer = async ({ lang }: any) => {
  const story = await getData();
  return <FooterSection props={story?.data?.data.story.content} lang={lang} />;
};

export default Footer;
