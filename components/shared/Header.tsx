import Image from "next/image"
import Link from "next/link"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="w-full border-b">
        <div className="wrapper flex items-center justify-between">
            <Link href="/" className="w-36">
                <Image src="/assets/logo-lppsa.png" width={260} height={128} alt="LPPSA Logo" />
            </Link>

            <nav className="md:flex-between hidden w-full max-w-xs">
                <NavItems />
            </nav>

            <div className="flex justify-end gap-3">
                <MobileNav />
            </div>
        </div>
    </header>
  )
}

export default Header