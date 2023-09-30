"use client";

import Menu from "@/app/interfaces/MenuInterface";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ButtonNavMenu from "./ButtonNavMenu";
import "./style.scss";

export default function Header() {
  const menu: Menu[] = [
    { title: "about", page: "/" },
    { title: "projects", page: "/projects" },
    { title: "experiences", page: "/experiences" },
  ];

  const [activeMenu, setActiveMenu] = useState(0);
  const router = useRouter();

  const handleButton = (index: number, page: string) => {
    setActiveMenu(index);
    router.push(`${page}`);
  };

  return (
    <header>
      <span> LOGO </span>
      <nav>
        <ul>
          {menu.map((item, index) => (
            <li key={index}>
              <ButtonNavMenu
                title={item.title}
                page={item.page}
                active={activeMenu === index}
                onClick={() => handleButton(index, item.page)}
              />
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <span>MENU</span>
      </div>
    </header>
  );
}
