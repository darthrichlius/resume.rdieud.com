"use client";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { RxHamburgerMenu as ClosedMobileMenuIcon } from "react-icons/rx";
import { IoClose as OpenedMobileMenuIcon } from "react-icons/io5";

import { Icon, Typography } from "@@src/components";
import AppConfig from "@@/config/app";
import { useWindowResize } from "@@src/hooks";
import downloadCVFile from "@@src/services/downloadCVFile";

interface IMenu {
  label: string;
  href: string;
  icon: any;
}

const menus: IMenu[] = [
  { label: "References", href: "#references", icon: "" },
  { label: "Resume", href: "#resume", icon: "" },
  { label: "Portfolio", href: "#portfolio", icon: "" },
  { label: "Contact", href: "#presentation", icon: "" },
];

const NavBar = () => {
  const router = useRouter();
  const {
    isResizing,
    windowSize: { width: winWidth, height: winHeight },
  } = useWindowResize();
  const [showMobileMenu, toggleMobileMenu] = useState(false);
  const [isConfettiActive, setConfettiActive] = useState(false);

  const handleMenuClick = (href?: string) => {
    router.push(href || "/");
    toggleMobileMenu(false);
  };

  const handleClose = () => {
    toggleMobileMenu(false);
  };

  /**
   * @todo Showcase a new Confetti with a different approach at each click
   * It will requires to play with the options and drawShape()
   */
  const handleLightModeClick = () => {
    setConfettiActive(true);
    setTimeout(() => {
      setConfettiActive(false);
    }, 8000);
  };

  useEffect(() => {
    toggleMobileMenu(false);
  }, [isResizing]);

  return (
    <>
      <NavigationMenu.Root>
        <NavigationMenu.List className="gap-24 md:gap-32 hidden sm:flex">
          {menus.map((menu, i) => (
            <NavigationMenu.Item key={`menu-${i}`}>
              <NavigationMenu.Link
                className="text-sm md:text-base"
                href={menu.href}
              >
                <Typography>{menu.label}</Typography>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          ))}
          <div className="flex gap-24 border-l border-l-zinc-600 ml-16 pl-40">
            <NextLink
              className="text-zinc-600 hover:text-zinc-400"
              href={AppConfig.owner.contact.github}
              target="blank"
              title="Navigate to my Github repository"
            >
              <Icon className="w-16 -h-16" index="Github" />
            </NextLink>
            <NextLink
              className="text-zinc-600 hover:text-zinc-400"
              href={AppConfig.owner.contact.linkedin}
              target="blank"
              title="Navigate to my Linkedin profile"
            >
              <Icon className="w-16 -h-16" index="Linkedin" />
            </NextLink>
            <button
              className="text-zinc-600 hover:text-zinc-400"
              title="Turn on light mode"
              onClick={handleLightModeClick}
            >
              <Icon className="w-16 -h-16" index="LightMode" />
            </button>
          </div>
        </NavigationMenu.List>
        {isConfettiActive && <Confetti width={winWidth} height={winHeight} />}
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
  const [height, setHeight] = useState(0);
  const {
    windowSize: { height: winHeight },
  } = useWindowResize();

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

  const handleDownloadClick = () => {
    downloadCVFile();
  };

  useEffect(() => {
    // Client-specific logic
    /**
     * Necessary to avoid a mismatch error where the server rendering doesn't match the client rendering.
     * This discrepancy is due to the fact that useWindowResize() only works properly on the client side.
     * However, the pages are statically rendered.
     * One solution could have been to force client rendering or SSR.
     * However, the solution of using useEffect() is another approach.
     */

    setHeight(winHeight);
  }, [winHeight]);

  return (
    <section
      className={`${open ? "" : "hidden"} mobile-menu`}
      onClick={(e) => onLayoutClick(e)}
    >
      <div
        onClick={(e) => onFalsyLayoutClick(e)}
        className="mobile-menu-container"
      >
        <menu
          className={`${
            height < 400 ? "mobile-menu-list-narrow-height" : "mobile-menu-list"
          }`}
        >
          <NextLink
            key={"home"}
            className="mobile-menu-list-menu-link"
            onClick={(e) => onMenuClick(e)}
            href=""
          >
            <Typography as="span">Home</Typography>
          </NextLink>
          <div className="mobile-menu-separator" />
          {menus.map((menu, i) => (
            <div key={`mobile-menu-${i}`}>
              <NextLink
                className="mobile-menu-list-menu-link"
                onClick={(e) => onMenuClick(e, menu.href)}
                href={""}
              >
                <Typography as="span">{menu.label}</Typography>
              </NextLink>
              <div className="mobile-menu-separator" />
            </div>
          ))}
        </menu>
        <footer className="mobile-menu-footer">
          <NextLink
            href="#"
            className="flex gap-8 items-baseline"
            onClick={handleDownloadClick}
          >
            <Icon className="w-16 h-16 text-zinc-400" index="Download" />
            <Typography className="text-zinc-400 font-bold">
              Download CV
            </Typography>
          </NextLink>
          <div className="flex gap-24 border-l border-l-zinc-600 ml-16 pl-40">
            <NextLink
              className="text-zinc-400 hover:text-zinc-400"
              href={AppConfig.owner.contact.github}
              target="blank"
            >
              <Icon className="w-20 h-20" index="Github" />
            </NextLink>
            <NextLink
              className="text-zinc-400 hover:text-zinc-400"
              href={AppConfig.owner.contact.linkedin}
              target="blank"
            >
              <Icon className="w-20 h-20" index="Linkedin" />
            </NextLink>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default NavBar;
