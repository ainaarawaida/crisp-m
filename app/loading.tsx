import { Skeleton } from "@/components/shadcn/ui/skeleton"
import Image from "next/image";
export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="p-12 flex justify-center items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
          <Image src={`${process.env.NEXT_PUBLIC_BASEPATH_URL}/assets/images/Loading_icon.gif`} 
          alt="" height="300" width="300"/>
          </div>
        </div>
      )
  }