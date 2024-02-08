import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function Home() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <section className="flex-1 md:min-h-80 bg-hero-img bg-no-repeat bg-cover bg-center py-5 md:py-10 flex flex-col place-content-end">
        <div className="wrapper text-center">
          <h1 className="md:text-4xl text-lg">Welcom to</h1>
          <h1 className="md:text-5xl text-xl font-bold">Strategic Management Dashboard</h1>
        </div>
      </section>
      <section className="flex-1 min-h-[500px]">

      </section>
      <Footer />
    </div>
  );
}
