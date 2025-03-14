import type { Metadata } from "next";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { StoryblokProvider } from "@/components/StoryblokProvider";
import "./globals.scss";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Premier padel travel",
  description:
    "Låt välmående, god mat och padel stå i centrum för din nästa resa. Ta del av exklusiva padelupplevelser som företag eller privatperson.",
};

const cachedFetch = (input: any, init?: any): Promise<Response> => {
  return fetch(input, {
    ...init,
    cache: "no-cache",
  });
};

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    fetch: cachedFetch,
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoryblokProvider>
      <html lang={process.env.STORYBLOCK_LANG}>
        <head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5KHRGXD');`,
            }}
            id="google-tag-manager-script"
          />
        </head>
        <body className="font-sans">
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5KHRGXD"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
          <Header lang={process.env.STORYBLOCK_LANG} />
          <main>{children}</main>
          <Footer lang={process.env.STORYBLOCK_LANG} />
          <Script src="https://consent.cookiebot.com/uc.js" />
          <script
            id="Cookiebot"
            src="https://consent.cookiebot.com/uc.js"
            data-cbid="ef08f731-bee6-46e4-aaa9-a8367a925572"
            data-blockingmode="manual"
            type="text/javascript"
            async
          ></script>
        </body>
      </html>
    </StoryblokProvider>
  );
}
