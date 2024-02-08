import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import NavItems from "./NavItems"
  
const MobileNav = () => {
  return (
    <nav className="md:hidden">
        <Sheet>
            <SheetTrigger>
                <Image src="/assets/icons/menu.svg" width={24} height={24} className="cursor-pointer" alt="Menu"/>
            </SheetTrigger>
            <SheetContent className="">
                <NavItems />
            </SheetContent>
        </Sheet>
    </nav>
  )
}

export default MobileNav