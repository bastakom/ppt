"use client";

import LinkBtn from "@/components/link-btn";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

const FooterSection = ({ props }: any) => {
  const { Heading, Email, number, companyName, adress, orgNumber } =
    props.footerBlocks[0];
  const {
    HeadingTerms,
    IntegritetTitle,
    Integritetspolicy,
    ReseVillkorTitle,
    Resevillkor,
    CookiePolicy,
    CookieTitle,
  } = props.footerBlocks[1];

  const { HeadingFollow, Facebook, Instagram } = props.footerBlocks[2];

  return (
    <footer className="footer">
      <div className="footerWrapper">
        <div>
          <h1 className="footerTitle">{Heading}</h1>
          <div className="contentWrapper">
            <Link
              className="smallText"
              href={"mailto:info@premierpadeltravel.se"}
            >
              {Email}
            </Link>
            <p className="smallText">{number}</p>
            <p className="smallText">{adress}</p>
            <div>
              <p className="smallText">{companyName}</p>
              <p className="smallText">{orgNumber}</p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="footerTitle">{HeadingTerms}</h1>
          <div className="linkWrapper">
            <LinkBtn
              className="smallText"
              link={`/${Resevillkor.cached_url.replace(/^(\/)?(da|en)\//, "")}`}
              title={ReseVillkorTitle}
            />

            <LinkBtn
              className="smallText"
              link={`/${Integritetspolicy.cached_url.replace(
                /^\/(da|en)\//,
                ""
              )}`}
              title={IntegritetTitle}
            />

            <LinkBtn
              className="smallText"
              link="/cookies"
              title={CookieTitle}
            />
          </div>
        </div>

        <div className="socialMediaWrapper">
          <h1 className="footerTitle">{HeadingFollow}</h1>
          <div className="followLinks">
            <LinkBtn className="socialMediaLink" link={Facebook.url}>
              <FaFacebook />
            </LinkBtn>
            <LinkBtn className="socialMediaLink" link={Instagram.url}>
              <FaInstagram />
            </LinkBtn>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
