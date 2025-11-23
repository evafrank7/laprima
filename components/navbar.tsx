"use client"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import laprimaLogo from "@/public/images/LaPrima-logo-1.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Menu } from "lucide-react";
import { useState } from "react";

const navLinks = ["Shop", "About", "Locations", "Contact"];

export default function Navbar({ cartCount = 0 }: { cartCount?: number }) {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full bg-zinc-700 px-4 py-4">
            <div className="flex items-center">
                {/* Sidebar trigger */}
                <div className="flex items-center md:hidden">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger className="inline-flex items-center justify-center rounded-md border border-white/40 px-2 py-2">
                            <Menu className="h-6 w-6 text-white" />
                        </SheetTrigger>
                        <SheetContent
                            side="left"
                            className="bg-zinc-800 text-white border-r border-white/10"
                        >
                            <SheetHeader>
                                <SheetTitle className="sr-only">Menu</SheetTitle>
                                <div className="flex justify-center py-4">
                                    <Image
                                        src={laprimaLogo}
                                        alt="La Prima Coffee Logo"
                                        width={140}
                                        height={140}
                                    />
                                </div>
                            </SheetHeader>
                            <div className="mt-6 flex flex-col gap-4">
                                {navLinks.map((label) => (
                                    <button
                                        key={label}
                                        className="text-base text-center text-white hover:!text-[#0076bf]"
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* La Prima Logo */}
                <div
                    className={`flex flex-1 items-center justify-center md:justify-start ${open ? "hidden md:flex" : ""
                        }`}
                >
                    <div className="flex-shrink-0">
                        <Image
                            src={laprimaLogo}
                            alt="La Prima Coffee Logo"
                            width={150}
                            height={150}
                            className="cursor-pointer h-auto w-24 md:w-36 lg:w-40"
                        />
                    </div>
                </div>

                {/* desktop nav, cart, and mobile cart */}
                <div className="flex items-center gap-3 ml-auto px-2 md:px-10">
                    <div className="hidden md:flex items-center gap-3">
                        <NavigationMenu>
                            <NavigationMenuList className="flex items-center gap-6 text-white">
                                {navLinks.map((label) => (
                                    <NavigationMenuItem key={label}>
                                        <NavigationMenuLink className="bg-transparent hover:bg-transparent hover:!text-[#0076bf]">
                                            {label}
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>

                        <button
                            type="button"
                            className="relative inline-flex items-center text-white hover:!text-[#0076bf] gap-3"
                            aria-label="Open shopping cart"
                        >
                            <FontAwesomeIcon icon={faShoppingCart} className="h-6 w-6" />
                            <span className="ml-1">{cartCount}</span>
                        </button>
                    </div>

                    {/* Mobile cart only */}
                    <button
                        type="button"
                        className="relative inline-flex items-center text-white gap-2 md:hidden"
                        aria-label="Open shopping cart"
                    >
                        <FontAwesomeIcon icon={faShoppingCart} className="h-6 w-6" />
                        <span className="ml-1 text-sm">{cartCount}</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}