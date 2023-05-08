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
  { link: "/", label: "home", svg: <HomeIcon /> },
  { link: "/about", label: "about", svg: <AboutIcon /> },
  { link: "/events", label: "events", svg: <EventsIcon /> },
  { link: "/resources", label: "resources", svg: <ResourcesIcon /> },
  { link: "/contact", label: "contact", svg: <ContactIcon /> },
];

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.navLogo}>
        <LogoDarkIcon />
      </Link>

      <ul>
        {navLinks.map(({ link, svg, label }) => {
          const isActive = pathname.includes(label);

          return (
            <li key={link}>
              <Link href={link} className={isActive ? styles.selected : ""}>
                {svg}
              </Link>
            </li>
          );
        })}
        {/* <li>
          <Link href="/">
            <HomeIcon />
          </Link>
        </li>

        <li>
          <Link href="/about">
            <AboutIcon />
          </Link>
        </li>

        <li>
          <Link href="/events">
            <EventsIcon />
          </Link>
        </li>

        <li>
          <Link href="/resources">
            <ResourcesIcon />
          </Link>
        </li>

        <li>
          <Link href="/contact">
            <ContactIcon />
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
