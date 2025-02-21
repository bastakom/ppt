import Link from "next/link";
import { ReactNode } from "react";
interface Props {
  title?: string;
  link: string;
  className?: string;
  children?: ReactNode;
}
const LinkBtn = ({ link, title, className = "", children }: Props) => {
  return (
    <Link className={className} href={`${link}`}>
      {children || title}
    </Link>
  );
};
export default LinkBtn;
