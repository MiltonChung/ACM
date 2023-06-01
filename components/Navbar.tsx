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
  { link: "/", svg: <HomeIcon />, title: "Home" },
  { link: "/about", svg: <AboutIcon />, title: "About" },
  { link: "/events", svg: <EventsIcon />, title: "Events" },
  { link: "/resources", svg: <ResourcesIcon />, title: "Resources" },
  { link: "/contact", svg: <ContactIcon />, title: "Contact" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <Link title="Home" href="/" className={styles.navLogo}>
        <LogoDarkIcon />
      </Link>

      <ul>
        {navLinks.map(({ link, svg, title }) => {
          const isActive = pathname === link;

          return (
            <li key={link}>
              <Link
                title={title}
                href={link}
                className={isActive ? styles.selected : ""}
              >
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
