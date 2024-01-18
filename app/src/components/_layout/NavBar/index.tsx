"use client";
import { useState } from "react";
import NextLink from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { RxHamburgerMenu as ClosedMobileMenuIcon } from "react-icons/rx";
import { IoClose as OpenedMobileMenuIcon } from "react-icons/io5";
import { Typography } from "@@src/components";
import { useRouter } from "next/navigation";

interface IMenu {
  label: string;
  href: string;
  icon: any;
}

const menus: IMenu[] = [
  { label: "References", href: "#references", icon: "" },
  { label: "Resume", href: "#resume", icon: "" },
  { label: "Portfolio", href: "#portfolio", icon: "" },
  { label: "Contact", href: "#contact", icon: "" },
];

const NavBar = () => {
  const router = useRouter();
  const [showMobileMenu, toggleMobileMenu] = useState(false);
  const handleMenuClick = (href?: string) => {
    router.push(href || "/");
    toggleMobileMenu(false);
  };

  const handleClose = () => {
    toggleMobileMenu(false);
  };

  return (
    <>
      <NavigationMenu.Root>
        <NavigationMenu.List className="gap-32 hidden sm:flex">
          {menus.map((menu) => (
            <NavigationMenu.Item key={menu.label}>
              <NavigationMenu.Link
                className="text-base md:text-xl"
                href={menu.href}
              >
                {menu.label}
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          ))}
        </NavigationMenu.List>
        <button onClick={() => toggleMobileMenu((s) => !s)} className="block">
          {showMobileMenu ? (
            <OpenedMobileMenuIcon className="w-32 h-32 sm:hidden" />
          ) : (
            <ClosedMobileMenuIcon className="w-32 h-32 sm:hidden" />
          )}
        </button>
      </NavigationMenu.Root>
      <MobileMenu
        open={showMobileMenu}
        menus={menus}
        handleClose={handleClose}
        handleMenuClick={handleMenuClick}
      />
    </>
  );
};

const MobileMenu = ({
  open,
  menus,
  handleClose,
  handleMenuClick,
}: {
  open: boolean;
  menus: IMenu[];
  handleClose: () => void;
  handleMenuClick: (href?: string) => void;
}) => {
  const onMenuClick = (e: any, href?: string) => {
    e.preventDefault();
    e.stopPropagation();

    handleMenuClick(href);
  };

  const onLayoutClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    handleClose();
  };

  const onFalsyLayoutClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <section
      className={`${open ? "" : "hidden"} mobile-menu`}
      onClick={(e) => onLayoutClick(e)}
    >
      <div
        onClick={(e) => onFalsyLayoutClick(e)}
        className="mobile-menu-container"
      >
        <menu className="mobile-menu-list">
          <NextLink key={"home"} onClick={(e) => onMenuClick(e)} href="">
            <Typography as="span">Home</Typography>
          </NextLink>
          <div className="mobile-menu-separator" />
          {menus.map((menu) => (
            <>
              <NextLink
                key={menu.label}
                onClick={(e) => onMenuClick(e, menu.href)}
                href={""}
              >
                <Typography as="span">{menu.label}</Typography>
              </NextLink>
              <div className="mobile-menu-separator" />
            </>
          ))}
        </menu>
        <footer>
          <Typography>Alpha v0.1.0</Typography>
        </footer>
      </div>
    </section>
  );
};

export default NavBar;
