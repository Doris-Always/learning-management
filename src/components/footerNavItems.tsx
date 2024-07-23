import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import  "../styles/footer.css";

interface Props {
  name: string;
  icon: string;
  link: string;
}

const FooterNavItems: React.FC<Props> = ({ name, icon, link }) => {
  const pathname = usePathname();

  const isActive = pathname === link;

  return (
    <li className={`flex flex-col p-4 items-center cursor-pointer ${isActive ? 'active-footer-link' : 'footer-link-inactive'}`}>
      <img src={icon} className={`footer-icon ${isActive ? 'footer-icon-active' : 'footer-icon'}`} alt={`${name} icon`} />
      <Link href={link} className={isActive ? 'active-footer-link' : 'footer-link-inactive'}>
        {name}
      </Link>
    </li>
  );
};

export default FooterNavItems;