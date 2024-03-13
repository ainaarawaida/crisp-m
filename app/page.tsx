'use client';

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Image from "next/image";
import { useEffect , useState } from 'react';
import Loading from "./loading";

export default function Home() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<any>(false);
  const [error, setError] = useState<any>(null);
 
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASEPATH_URL}/api/data/all`);
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error:any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchData();

  }, [])


  return (
    <div>
    {isLoading ? (
      <Loading />
    ) : error ? (
      <p>Error: {error}</p>
    ) : data ? (
      <div className="flex h-screen flex-col">
        <Header />
        <section className="flex-1 md:min-h-80 bg-hero-img bg-no-repeat bg-cover bg-center bg-opacity-0 py-5 md:py-10 flex flex-col place-content-end">
          <div className="wrapper text-center bg-white bg-opacity-50">
            <h1 className="md:text-4xl text-lg text-mz-secondary">Welcom to</h1>
            <h1 className="md:text-5xl text-xl font-bold text-mz-primary">Strategic Management Dashboard</h1>
          </div>
        </section>
        <div className="wrapper">
          <section className=" bg-white bg-opacity-50 rounded-md p-5 shadow-sm">
            <h1 className="md:text-2xl text-lg font-bold mb-5 text-mz-secondary">LPPSA at a Glance</h1>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-4 text-mz-secondary text-center md:text-left">
              <div className="bg-white rounded-md p-5 shadow-sm flex md:flex-row flex-col gap-2 items-center">
                <div>
                <Image src="/assets/icons/icons8-broker.png" width={40} height={40} alt="Menu"/>
                </div>
                <div>
                  <div className="text-xs">Total Active Accounts</div>
                  <div className="text-2xl font-bold">{data?.active_borrowers_accounts?.[0]?.number_of_active_accounts?.toLocaleString('en-US')}</div>
                </div>
              </div>
              <div className="bg-white rounded-md p-5 shadow-sm flex md:flex-row flex-col gap-4 items-center">
              <div>
              <Image src="/assets/icons/icons8-bank-approved.png" width={40} height={40} alt="Menu"/>
              </div>
              <div>
                <div className="text-xs">Approved Account</div>
                <div className="text-2xl font-bold">{data?.accepted?.[0]?.number_of_accounts.toLocaleString('en-US')}</div>
              </div>
            </div>
            <div className="bg-white rounded-md p-5 shadow-sm flex md:flex-row flex-col gap-4 items-center">
              <div>
              <Image src="/assets/icons/icons8-profit.png" width={40} height={40} alt="Menu"/>
              </div>
              <div>
                <div className="text-xs">Revenue</div>
                <div className="text-2xl font-bold">{data?.revenue?.[0]?.revenue.toLocaleString('en-US')}</div>
              </div>
            </div>
            <div className="bg-white rounded-md p-5 shadow-sm flex md:flex-row flex-col gap-4 items-center">
              <div>
              <Image src="/assets/icons/icons8-initiate-money-transfer.png" width={40} height={40} alt="Menu"/>
              </div>
              <div>
                <div className="text-xs">Expenses</div>
                <div className="text-2xl font-bold">{data?.expences?.[0]?.expences.toLocaleString('en-US')}</div>
              </div>
            </div>
            <div className="bg-white rounded-md p-5 shadow-sm flex md:flex-row flex-col gap-4 items-center">
              <div>
              <Image src="/assets/icons/icons8-money-yours.png" width={40} height={40} alt="Menu"/>
              </div>
              <div>
                <div className="text-xs">Surplus Before Tax</div>
                <div className="text-2xl font-bold">{data?.surplus?.[0]?.surplus.toLocaleString('en-US')}</div>
              </div>
            </div>
            <div className="bg-white rounded-md p-5 shadow-sm flex md:flex-row flex-col gap-4 items-center">
              <div>
              <Image src="/assets/icons/icons8-asset.png" width={40} height={40} alt="Menu"/>
              </div>
              <div>
                <div className="text-xs">Total Assets</div>
                <div className="text-2xl font-bold">{data?.assets?.[0]?.total_assets.toLocaleString('en-US')}</div>
              </div>
            </div>
            <div className="bg-white rounded-md p-5 shadow-sm flex md:flex-row flex-col gap-4 items-center">
              <div>
              <Image src="/assets/icons/icons8-stack-of-money.png" width={40} height={40} alt="Menu"/>
              </div>
              <div>
                <div className="text-xs">Disbursement</div>
                <div className="text-2xl font-bold">{data?.disbursement?.[0]?.total_disbursement.toLocaleString('en-US')}</div>
              </div>
            </div>
            <div className="bg-white rounded-md p-5 shadow-sm flex md:flex-row flex-col gap-4 items-center">
              <div>
              <Image src="/assets/icons/icons8-request-money.png" width={40} height={40} alt="Menu"/>
              </div>
              <div>
                <div className="text-xs">Collection (Non-Cagamas)</div>
                <div className="text-2xl font-bold">{data?.collection?.[0]?.non_cagamas.toLocaleString('en-US')}</div>
              </div>
            </div>
            <div className="bg-white rounded-md p-5 shadow-sm flex md:flex-row flex-col gap-4 items-center md:col-start-2">
              <div>
              <Image src="/assets/icons/icons8-percentage-growth.png" width={40} height={40} alt="Menu"/>
              </div>
              <div>
                <div className="text-xs">Cost-to-Income Ratio</div>
                <div className="text-2xl font-bold">100%</div>
              </div>
            </div>
            <div className="bg-white rounded-md p-5 shadow-sm flex md:flex-row flex-col gap-4 items-center">
              <div>
              <Image src="/assets/icons/icons8-percentage-growth.png" width={40} height={40} alt="Menu"/>
              </div>
              <div>
                <div className="text-xs">Sustainability Ratio</div>
                <div className="text-2xl font-bold">100%</div>
              </div>
            </div>
            </div>
          </section>
        </div>

        <div className="wrapper">
          <div className="grid md:grid-cols-5 gap-4 text-center">
            <div className="bg-yellow-200 p-5">
              <h1 className="text-lg font-bold">Dashboard 1</h1>
            </div>
            <div className="bg-cyan-200 p-5">
              <h1 className="text-lg font-bold">Dashboard 2</h1>
            </div>
            <div className="bg-teal-300 p-5">
              <h1 className="text-lg font-bold">Dashboard 3</h1>
            </div>
            <div className="bg-teal-500 p-5">
              <h1 className="text-lg font-bold text-white">Dashboard 4</h1>
            </div>
            <div className="bg-slate-600 p-5">
              <h1 className="text-lg font-bold text-white">Dashboard 5</h1>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    ) : (
      <Loading />
      // <p>No data available.</p>
    )}
  </div>

  );
}
