"use client";
import NextLink from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { HamburgerMenuIcon as MenuIcon } from "@radix-ui/react-icons";

const menus = [
  { label: "Reference", href: "#reference" },
  { label: "Resume", href: "#resume" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const NavBar = () => {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List className="gap-32 hidden sm:flex">
        {menus.map((menu) => (
          <NavigationMenu.Item key={menu.label}>
            <NavigationMenu.Link className="text-base md:text-xl" href={menu.href}>
              {menu.label}
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
      <NextLink href="">
        <MenuIcon className="sm:hidden" width={"32px"} height={"32px"} />
      </NextLink>
    </NavigationMenu.Root>
  );
};

export default NavBar;
