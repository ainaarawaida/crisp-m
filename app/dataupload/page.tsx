
'use client';

import Header from "@/components/shadcn/header";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import moment from 'moment';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";
import { ScrollArea } from "@/components/shadcn/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/shadcn/ui/tabs";
import { useEffect , useState } from 'react';



export default function Page() {
  const [data, setData] = useState(null);
 
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASEPATH_URL}/api/data/all`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log("data", data)
      })
  }, [])
 
  
  return (
    <>
      <Header />
    
      <ScrollArea className="h-full pt-12">
    
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
       
        <Tabs defaultValue="overview" className="space-y-4">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              Data Mart Listing 👋
            </h2>
            <div className="hidden md:flex items-center space-x-2">
              {/* <CalendarDateRangePicker /> */}
              <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-[260px] justify-start text-left font-normal" id="date" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r2u:" data-state="closed">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                </svg>
                &nbsp;&nbsp;
                {moment().format("MMMM YYYY")}</button>
              <Button>Current Month</Button>
            </div>
          </div>
         
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5 ">
              
              <Link 
                href={"/dataupload/active_borrowers_accounts"}>
                <Card className="bg-slate-400 cursor-pointer h-40">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">Active Borrowers Accounts</div>
                    <p className="text-xs text-muted-foreground">
                    
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link 
                  href={"/dataupload/accepted"}>
                <Card className="bg-slate-400 cursor-pointer h-40">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">Approved and Accepted</div>
                    <p className="text-xs text-muted-foreground">
                      
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link 
                href={"/dataupload/assets"}>
                <Card className="bg-slate-400 cursor-pointer h-40">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium"></CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <path d="M2 10h20" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">Assets</div>
                    <p className="text-xs text-muted-foreground">
                      
                    </p>
                  </CardContent>
                </Card>
              </Link>


              <Link 
                 href={"/dataupload/collection"}>
                <Card className="bg-slate-400 cursor-pointer h-40">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">Collection</div>
                    <p className="text-xs text-muted-foreground">
                    
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link 
                 href={"/dataupload/disbursement"}>
                  <Card className="bg-slate-400 cursor-pointer h-40">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                       
                      </CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">Disbursement</div>
                      <p className="text-xs text-muted-foreground">
                      
                      </p>
                    </CardContent>
                  </Card>
              </Link>

              <Link 
                 href={"/dataupload/expences"}>
                  <Card className="bg-slate-400 cursor-pointer h-40">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                       
                      </CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">Expences</div>
                      <p className="text-xs text-muted-foreground">
                      
                      </p>
                    </CardContent>
                  </Card>
              </Link>


              <Link 
                 href={"/dataupload/financial_ratios"}>
                  <Card className="bg-slate-400 cursor-pointer h-40">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                       
                      </CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">Financial Ratios</div>
                      <p className="text-xs text-muted-foreground">
                      
                      </p>
                    </CardContent>
                  </Card>
              </Link>

              <Link 
                 href={"/dataupload/impairment"}>
                  <Card className="bg-slate-400 cursor-pointer h-40">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                       
                      </CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">Impairment</div>
                      <p className="text-xs text-muted-foreground">
                      
                      </p>
                    </CardContent>
                  </Card>
              </Link>

              <Link 
                 href={"/dataupload/liabilities"}>
                  <Card className="bg-slate-400 cursor-pointer h-40">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                       
                      </CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">Liabilities</div>
                      <p className="text-xs text-muted-foreground">
                      
                      </p>
                    </CardContent>
                  </Card>
              </Link>

              <Link 
                 href={"/dataupload/revenue"}>
                  <Card className="bg-slate-400 cursor-pointer h-40">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                       
                      </CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">Revenue</div>
                      <p className="text-xs text-muted-foreground">
                      
                      </p>
                    </CardContent>
                  </Card>
              </Link>

              <Link 
                 href={"/dataupload/surplus"}>
                  <Card className="bg-slate-400 cursor-pointer h-40">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                       
                      </CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">Surplus</div>
                      <p className="text-xs text-muted-foreground">
                      
                      </p>
                    </CardContent>
                  </Card>
              </Link>

              <Link 
                 href={"/dataupload/taxation"}>
                  <Card className="bg-slate-400 cursor-pointer h-40">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                       
                      </CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">Taxation</div>
                      <p className="text-xs text-muted-foreground">
                      
                      </p>
                    </CardContent>
                  </Card>
              </Link>


            </div>
          
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
    </>
  );
}


