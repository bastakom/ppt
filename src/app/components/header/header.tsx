import HeaderSection from "./header-section";
import { getData } from "@/app/lib/get-data";

const Header = async ({ lang }: any) => {
  const story = await getData();
  return <HeaderSection lang={lang} props={story?.data?.data.story} />;
};

export default Header;
