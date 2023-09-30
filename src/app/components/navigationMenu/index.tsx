import Menu from "@/app/interfaces/MenuInterface";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ButtonNavMenu from "./ButtonNavMenu";

interface NavigationMenuProps {
  pages: Menu[];
}

export default function NavigationMenu({ pages }: NavigationMenuProps) {
  const [activeMenu, setActiveMenu] = useState(0);
  const router = useRouter();

  const handleButton = (index: number, page: string) => {
    setActiveMenu(index);
    router.push(`${page}`);
  };

  return (
    <nav>
      <ul>
        {pages.map((item, index) => (
          <li key={index}>
            <ButtonNavMenu
              title={item.title}
              page={item.route}
              active={activeMenu === index}
              onClick={() => handleButton(index, item.route)}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
