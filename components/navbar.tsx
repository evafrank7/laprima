import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import laprimaLogo from "@/public/images/LaPrima-logo-1.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function Home({ cartCount = 0 }: { cartCount?: number }) {
    return (
        <div className="w-full flex items-center justify-between px-10 py-4 bg-zinc-700">
            <div>
                <Image
                    src={laprimaLogo}
                    alt="La Prima Coffee Logo"
                    width={170}
                    height={170}
                    className="cursor-pointer"
                />
            </div>

            <div className="flex items-center gap-8">
                <NavigationMenu>
                    <NavigationMenuList className="flex items-center gap-6 text-white">
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent shadow-none">
                                Shop
                            </NavigationMenuTrigger>

                            <NavigationMenuContent className="bg-transparent shadow-none border-none">
                                <NavigationMenuLink className="bg-transparent hover:bg-transparent">Link</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink className="bg-transparent hover:bg-transparent hover:text-blue-600">About</NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink className="bg-transparent hover:bg-transparent hover:text-blue-600">Locations</NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink className="bg-transparent hover:bg-transparent hover:text-blue-600">Contact</NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <button
                    type="button"
                    className="relative inline-flex items-center text-white hover:text-blue-600"
                    aria-label="Open shopping cart"
                // Make cart clickable here, as well as implement counting of items?
                >
                    <FontAwesomeIcon icon={faShoppingCart} className="h-6 w-6" />
                    <span className="ml-1">{cartCount}</span>
                </button>
            </div>
        </div>
    );
}