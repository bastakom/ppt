import { getStoryblokApi } from "@storyblok/react";
import { redirect } from "next/navigation";

export async function getResor(slug: string) {
  const lang = process.env.STORYBLOCK_LANG || "en";
  let sbParams = {
    version: "draft" as const,
    language: lang,
  };

  const client = getStoryblokApi();
  const slugName = slug || "default-slug";

  try {
    const data = await client.get(
      `cdn/stories/resor-och-paket/${slugName}`,
      sbParams
    );

    if (!data) {
      throw new Error("Not Found");
    }

    return { data };
  } catch (error: any) {
    if (error.response && error.response.status === 500) {
      redirect("/500");
    } else {
      throw error;
    }
  }
}
