"use client";
import { useEffect } from "react";

const CookieConsent = () => {
  useEffect(() => {
    const cookieBotWrapper = document.getElementById("CookiebotWrapper");
    if (cookieBotWrapper) {
      const script = document.createElement("script");
      script.id = "CookieDeclaration";
      script.type = "text/javascript";
      script.async = true;
      script.src =
        "https://consent.cookiebot.com/ef08f731-bee6-46e4-aaa9-a8367a925572/cd.js";

      cookieBotWrapper.appendChild(script);
    }
  }, []);

  return (
    <div id="CookiebotWrapper" className="container px-4 pt-10 py-8"></div>
  );
};

export default CookieConsent;
