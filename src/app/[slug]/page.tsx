import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";
import { getAllResor } from "../lib/get-all-resor";
import { getData } from "../lib/get-data";
import { Metadata } from "next";

async function fetchData(slug: string) {
  let sbParams = {
    version: "published" as const,
    language: process.env.STORYBLOCK_LANG,
  };

  const client = getStoryblokApi();

  try {
    const data = await client.get(`cdn/stories/${slug}`, sbParams);
    return { data };
  } catch (error: any) {
    return { data: null };
  }
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const pathname = params.slug || "home";
  const slugName = pathname;

  const story = await fetchData(slugName);
  const resor = await getAllResor();
  const settings = await getData();

  const lang = process.env.STORYBLOCK_LANG;

  if (!story.data) {
    return <div>Error fetching story data. Please try again later.</div>;
  }

  return (
    <StoryblokStory
      story={story.data.data.story}
      resor={resor?.data?.data?.stories}
      lang={lang}
      settings={settings?.data?.data?.story?.content}
    />
  );
};

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const pathname = params.slug || "home";
  const slugName = pathname;

  const data = await fetchData(slugName);

  if (!data.data) {
    return {
      title: "Premier padel travel",
      description: "Default description",
    };
  }

  return {
    title: data.data.data.story.content.seo.title || "Premier padel travel",
    description:
      data.data.data.story.content.seo.description || "Default description",
  };
};

export default Page;
