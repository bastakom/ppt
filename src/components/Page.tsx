import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const Page = ({ blok, resor, lang, settings }: any) => {
  return (
    <div {...storyblokEditable(blok)}>
      {blok &&
        Array.isArray(blok.body) &&
        blok.body.map((nestedBlok: any, index: number) => {
          return (
            <StoryblokComponent
              blok={nestedBlok}
              resor={resor}
              lang={lang}
              settings={settings}
              key={nestedBlok._uid}
            />
          );
        })}
    </div>
  );
};

export default Page;
