"use client"

import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { NavbarLinks, socialLinks } from "@/data"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import Image from "next/image"
import { Button } from "./ui/button"
import { Separator } from "@/components/ui/separator"
import { ChevronDownIcon } from "lucide-react"

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  // track open state per dropdown (keyed by item.title)
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({})

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-20 w-full h-20 flex items-center justify-between px-6 md:px-12 gap-2.5 shadow-md bg-white`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image src="/images/logo.png" alt="logo" width={60} height={60} />
        <span className="md:hidden lg:block text-base font-semibold text-blue-100">NPF Pensions Limited</span>
      </Link>

      {/* Desktop Menu/Navbar */}
      <div className="flex max-md:hidden lg:w-[818px] h-[50px] justify-center items-center lg:gap-2.5">
        {
          NavbarLinks.map((item) => {
            const isActive = item.href === pathname;
            const hasActiveChild = !!item.children && item.children.some(child => child.href === pathname)
            return (
              item.children ? (
                <DropdownMenu
                  key={item.title}
                  open={!!openMenus[item.title]}
                  onOpenChange={(val) =>
                    setOpenMenus((prev) => ({ ...prev, [item.title]: val }))
                  }
                >
                  <DropdownMenuTrigger
                    className={`flex justify-center items-center md:text-sm lg:text-base font-semibold p-4 rounded-md bg-transparent focus-visible:outline-none focus-visible:ring-0 hover:text-white hover:bg-yellow-100 data-[state=open]:bg-yellow-100 data-[state=open]:text-white ${(hasActiveChild || openMenus[item.title]) ? "bg-yellow-100 text-white" : "text-black-100"
                      }`}
                      key={item.title}
                  >
                    {item.title}
                    <ChevronDownIcon />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="xl:mt-3 bg-white-100">
                    <ul className="flex w-screen gap-3 h-60 justify-center items-center ">
                      {item.children.map((child) => (
                        <DropdownItem
                          key={child.title}
                          title={child.title}
                          icon={child.icon}
                          onClick={() => {
                            router.push(child.href)
                            setOpenMenus((prev) => ({ ...prev, [item.title]: false }))
                          }}
                        />
                      ))}
                    </ul>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  href={item.href as string}
                  key={item.title}
                  className={`bg-transparent md:text-sm lg:text-base font-semibold p-4 rounded-md text-black-100 hover:text-white hover:bg-yellow-100 ${isActive ? "bg-yellow-100 text-white" : ""
                    }`}
                >
                  {item.title}
                </Link>
              )
            )
          })}
      </div>


      {/* Mobile Menu/Navbar */}
      <div className="hidden max-md:block">
        <Sheet>
          <SheetTrigger>
            <Image
              src="/icons/hamburger.svg"
              width={30}
              height={30}
              alt="menu"
              className="cursor-pointer"
            />
          </SheetTrigger>

          <SheetContent side="right" className="flex flex-col gap-4 w-full border-none bg-white">
            <SheetHeader>
              <VisuallyHidden>
                <SheetTitle>Mobile Menu</SheetTitle>
              </VisuallyHidden>
              <div className="flex">
                <SheetClose asChild>
                  <Link href="/" className="flex items-center gap-2">
                    <Image src="/images/logo.png" alt="logo" width={60} height={60} />
                    <span className="md:hidden lg:block text-base font-semibold text-blue-100">NPF Pensions Limited</span>
                  </Link>
                </SheetClose>
              </div>
            </SheetHeader>

            <div className="flex flex-col p-2">
              <nav className="flex flex-col gap-3">
                <NavigationMenu orientation="vertical" viewport={false} className="flex flex-col justify-start items-start w-full h-full">
                  <NavigationMenuList className="flex flex-col gap-4 items-start w-[95vw]">
                    {NavbarLinks.map((item) => {
                      const isActive = item.href === pathname;
                      const hasActiveChild = !!item.children && item.children.some(child => child.href === pathname);
                      return (
                        <NavigationMenuItem key={item.title} className="w-full">
                          {item.children ? (
                            <>
                              <NavigationMenuTrigger key={item.title} className={`w-full flex justify-start items-center p-4 py-6.5 text-left md:text-sm lg:text-base font-semibold rounded-md bg-transparent focus-visible:outline-none focus-visible:ring-0 hover:text-white hover:bg-yellow-100 data-[state=open]:bg-yellow-100 data-[state=open]:hover:bg-yellow-100 data-[state=open]:focus:bg-yellow-100 ${(hasActiveChild || openMenus[item.title]) ? "bg-yellow-100 text-white" : "text-black-100"
                                }`}>{item.title}</NavigationMenuTrigger>
                              <NavigationMenuContent>
                                <ul className="flex flex-col gap-2">
                                  {item.children.map((child) => (
                                    <ListItem
                                      key={child.href}
                                      title={child.title}
                                      icon={child.icon}
                                      href={child.href}
                                    />
                                  ))}
                                </ul>
                              </NavigationMenuContent>
                            </>
                          ) : (
                            <NavigationMenuLink asChild>
                              <SheetClose asChild>
                                <Link
                                  href={item.href as string}
                                  className={`w-full text-left md:text-sm lg:text-base font-semibold rounded-md text-black-100 hover:text-white hover:bg-yellow-100 p-4 ${isActive ? "bg-yellow-100 text-white" : ""}`}
                                >
                                  {item.title}
                                </Link>
                              </SheetClose>
                            </NavigationMenuLink>
                          )}
                        </NavigationMenuItem>
                      )
                    })}
                  </NavigationMenuList>
                </NavigationMenu>
              </nav>
            </div>
            <Separator />

            <div className="flex flex-row justify-evenly gap-2 px-5">
              {socialLinks.map((item) => (
                <SheetClose asChild>
                <Link
                  key={item.alt}
                  href={item.href}
                  target="_blank"
                  className="group flex items-center"
                  style={{ ["--icon-hover-color" as any]: item.color }}
                >
                  <div
                    aria-hidden
                    className="w-6 h-6 transition-colors duration-200 bg-grey-100 group-hover:bg-[var(--icon-hover-color)]"
                    style={
                      {
                        WebkitMaskImage: `url(${item.icon})`,
                        maskImage: `url(${item.icon})`,
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                      } as React.CSSProperties
                    }
                  />
                </Link>          
                </SheetClose>
              ))}
            </div>

            <Separator />

            <SheetFooter>
              <Button asChild className="group md:w-52 h-14 bg-white-100 text-blue-100 border border-blue-100 hover:bg-blue-100 hover:text-white-100 transition-colors duration-200">
                <a href="https://online.npfpensions.com.ng/NPFSelfServices/Login.aspx#!" target="_blank" className="text-base font-semibold flex items-center gap-2">
                  <Image src="/icons/login.svg" width={20} height={20} alt="Log in" className="transition duration-200 group-hover:invert group-hover:brightness-0 group-hover:contrast-200" />
                  Log In
                </a>
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      <Button asChild className="group md:w-30 h-12 xl:w-40 max-md:hidden bg-white-100 text-blue-100 border border-blue-100 hover:bg-blue-100 hover:text-white-100 transition-colors duration-200">
        <a href="https://online.npfpensions.com.ng/NPFSelfServices/Login.aspx#!" target="_blank" className="text-base font-semibold flex items-center gap-2">
          <Image src="/icons/login.svg" width={20} height={20} alt="Log in" className="transition duration-200 group-hover:invert group-hover:brightness-0 group-hover:contrast-200" />
          Log In
        </a>
      </Button>
    </nav>
  )
}

export default Navbar

function ListItem({
  title,
  icon,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string, icon: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <SheetClose asChild>
          <Link href={href} className="flex flex-row justify-start items-center gap-2.5 rounded-[10px] bg-white border-2 border-green-100">
            <Image src={icon} alt={title as string} width={30} height={30} />
            <p className="text-sm leading-none font-medium text-black-100">{title}</p>
          </Link>
        </SheetClose>
      </NavigationMenuLink>
    </li>
  )
}

function DropdownItem({
  title,
  icon,
  onClick,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { onClick: () => void, icon: string }) {
  return (
    <li {...props} className="group">
      <div onClick={onClick} className="flex flex-col items-center justify-center cursor-pointer w-[260px] h-[180px] gap-2.5 rounded-[10px] bg-white border-2 border-green-100 group-hover:bg-yellow-100 group-hover:border-none">
        <Image src={icon} alt={title as string} width={80} height={80} className="transition duration-200 group-hover:invert group-hover:brightness-0 group-hover:contrast-200" />
        <p className="text-base font-semibold text-black-100 group-hover:text-white text-center">{title}</p>
      </div>
    </li>
  )
}