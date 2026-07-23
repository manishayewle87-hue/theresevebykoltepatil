import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Construction Updates | The Reserve",
  description: "Track the progress of your future home with our monthly construction updates.",
};

export default function UpdatesPage() {
  const updates = [
    { date: "October 2026", status: "Tower A Foundation Complete. Tower B excavation in progress.", image: "https://images.unsplash.com/photo-1541888082470-fa415bbd5c58?q=80&w=2000&auto=format&fit=crop" },
    { date: "September 2026", status: "Site clearing and boundary wall construction completed.", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop" }
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1 w-full flex flex-col bg-[#151515] text-white">
        <section className="pt-40 pb-20 px-6 md:px-12">
          <div className="container mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">Construction Updates</h1>
            <p className="max-w-2xl mx-auto text-gray-400 font-light text-lg">
              Transparency at every step. Track the progress of The Reserve as we bring this masterpiece to life.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl">
            {updates.map((update, i) => (
              <div key={i} className="mb-20 last:mb-0">
                <span className="text-[#B28A4A] tracking-widest uppercase text-xs font-semibold mb-4 block">{update.date}</span>
                <p className="text-xl font-light mb-8">{update.status}</p>
                <div className="w-full h-[400px] bg-gray-800 relative">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${update.image})` }}></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
