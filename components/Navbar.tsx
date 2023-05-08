"use client";

import Link from "next/link";
import { LogoDarkIcon } from "./svg/logos";
import { usePathname } from "next/navigation";
import styles from "../styles/navbar.module.scss";
import {
  HomeIcon,
  AboutIcon,
  ContactIcon,
  EventsIcon,
  ResourcesIcon,
} from "./svg/icons";

const navLinks = [
  { link: "/", svg: <HomeIcon /> },
  { link: "/about", svg: <AboutIcon /> },
  { link: "/events", svg: <EventsIcon /> },
  { link: "/resources", svg: <ResourcesIcon /> },
  { link: "/contact", svg: <ContactIcon /> },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.navLogo}>
        <LogoDarkIcon />
      </Link>

      <ul>
        {navLinks.map(({ link, svg }) => {
          const isActive = pathname === link;

          return (
            <li key={link}>
              <Link href={link} className={isActive ? styles.selected : ""}>
                {svg}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
