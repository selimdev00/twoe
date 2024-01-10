"use client";

import styles from "./sidebar.module.scss";

import {
  ArrowUpIcon,
  LogoIcon,
  SearchIcon,
  HomeIcon,
  HeartIcon,
  VideoIcon,
  TVIcon,
  AccountIcon,
} from "@/components/icons";
import Link from "next/link";

import { useEffect } from "react";

const nav = [
  {
    id: "search",
    title: "Поиск",
    link: "/search",
    icon: <SearchIcon />,
  },
  {
    id: "main",
    title: "Главная",
    link: "/",
    icon: <HomeIcon />,
  },
  {
    id: "catalog",
    title: "Каталог",
    link: "/catalog",
    icon: <VideoIcon />,
  },
  {
    id: "tv",
    title: "ТВ каналы",
    link: "/tv",
    icon: <TVIcon />,
  },
  {
    id: "favorites",
    title: "Моё",
    link: "/favorites",
    icon: <HeartIcon />,
  },
  {
    id: "account",
    title: "Аккаунт",
    link: "/account",
    icon: <AccountIcon />,
  },
];
export default function LayoutSidebar() {
  useEffect(() => {
    const up = document.querySelector(`.${styles.layoutSidebar__up}`);

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 0) {
        up?.classList.add(styles.active);
      } else {
        up?.classList.remove(styles.active);
      }
    });

    up?.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    return () => {
      up?.removeEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    };
  }, []);

  return (
    <div className={styles.layoutSidebar}>
      <div>
        <LogoIcon />

        <nav className={styles.layoutSidebar__nav}>
          <ul className={styles.layoutSidebar__nav__list}>
            {nav.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.link}
                  className={styles.layoutSidebar__nav__list__item}
                >
                  {item.icon} <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={styles.layoutSidebar__up}>
        <ArrowUpIcon />
      </div>
    </div>
  );
}
