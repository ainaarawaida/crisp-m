import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="border-t">
      <div className="wrapper flex items-center flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="https://lppsa.gov.my">
          <Image src="/assets/logo-lppsa.png" width={100} height={128} alt="LPPSA Logo" />
        </Link>
        <div className="text-[10px] font-bold md:text-sm">LEMBAGA PEMBIAYAAN PERUMAHAN SEKTOR AWAM</div>
        <div className="text-[8px] text-mz-secondary md:text-sm">&copy; {year}</div>
      </div>
    </footer>
  )
}

export default Footer