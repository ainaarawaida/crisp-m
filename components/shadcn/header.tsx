



import Link from 'next/link';
import { MobileSidebar } from "@/components/shadcn/layout/mobile-sidebar";
import ThemeToggle from "@/components/shadcn/layout/ThemeToggle/theme-toggle";
import { cn } from "@/lib/utils";
import { UserNav } from "@/components/shadcn/layout/user-nav";
import { NavigationMenuDemo } from "@/components/shadcn/layout/pub-nav";
import * as React from "react"
import {AuthButton} from '@/components/shadcn/authButton';
import Image from "next/image";

const Header =  () => {
  
  return (
    <div className="fixed top-0 left-0 right-0 supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur z-20">
    <nav className="h-14 flex items-center justify-between px-4">
      <div className="hidden lg:flex flex-row items-center">
        <div className="basis-1/2">
          
          <Link
            href={"/"}
          >
            <Image src={`${process.env.NEXT_PUBLIC_BASEPATH_URL}/assets/logo-lppsa.png`} alt="" height="100" width="100"/>
          </Link>

        </div>
        <div className="basis-1/2 pl-10">
          <NavigationMenuDemo />
        </div>
      
      
      </div>
      <div className={cn("block lg:!hidden")}>
        <MobileSidebar />
      </div>

      <div className="flex items-center gap-2">
      <AuthButton />
        
         

           
        <UserNav />
        <ThemeToggle />
      </div>
    </nav>
  </div>
  );
};

export default Header;



