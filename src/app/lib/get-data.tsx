import { getStoryblokApi } from "@storyblok/react";

export async function getData() {
  const lang = process.env.STORYBLOCK_LANG;
  let sbParams = {
    version: "published" as const,
    language: lang,
  };

  const client = getStoryblokApi();
  try {
    const data = await client.get(`cdn/stories/config`, sbParams);

    if (!data) {
      throw new Error("Not Found");
    }

    return { data };
  } catch (error: any) {
    return { data: null };
  }
}
