"use client";

import Menu from "@/app/interfaces/MenuInterface";
import NavigationMenu from "../navigationMenu";
import "./style.scss";

export default function Header() {
  const menu: Menu[] = [
    { title: "about", route: "/" },
    { title: "projects", route: "/projects" },
    { title: "experiences", route: "/experiences" },
  ];

  return (
    <header>
      <span> LOGO </span>
      <NavigationMenu pages={menu} />
      <div>
        <span>MENU</span>
      </div>
    </header>
  );
}
