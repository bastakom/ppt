import { getAllResor } from "@/app/lib/get-all-resor";
import { getData } from "@/app/lib/get-data";
import { getResor } from "@/app/lib/get-resor";
import { Packages } from "@/components/packages";
import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const pathname = params.slug;
  const data = await getResor(pathname);

  return {
    title: data?.data.data.story?.content?.seo.title || "Premier padel travel",
    description:
      data?.data.data.story?.content?.seo.description || "Default description",
  };
};
const page = async ({ params }: { params: { slug: string } }) => {
  const pathname = params.slug;
  const paket = await getResor(pathname);
  const settings = await getData();
  const resor = await getAllResor();
  const lang = process.env.STORYBLOCK_LANG || "en";

  return (
    <div>
      <Packages
        paket={paket?.data?.data?.story}
        lang={lang}
        resor={resor?.data?.data?.stories}
        settings={settings?.data?.data?.story?.content}
      />
    </div>
  );
};

export default page;
