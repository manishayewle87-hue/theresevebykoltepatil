/* eslint-disable react/no-unescaped-entities */

export const metadata = {
  title: "The Developer | Kolte Patil",
  description: "Learn about the legacy and trust behind Kolte Patil Developers.",
};

export default function DeveloperPage() {
  return (
    <>      <main className="flex-1 w-full flex flex-col bg-[#FAF8F3]">
        <section className="pt-40 pb-20 px-6 md:px-12 bg-slate-950">
          <div className="container mx-auto text-center max-w-4xl">
            <span className="text-[#B28A4A] tracking-widest uppercase text-xs font-semibold mb-6 block">The Legacy</span>
            <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight text-[#151515]">
              Decades of <span className="italic font-light text-gray-500">Excellence</span>
            </h1>
            <p className="text-gray-600 font-light text-lg">
              Kolte Patil Developers Ltd. has been at the forefront of creating landmark real estate projects for over three decades. 
              Guided by a simple yet profound philosophy—'Creation, not construction'—we have shaped the skyline of Pune, Bengaluru, and Mumbai.
            </p>
          </div>
        </section>
        
        <section className="py-20">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="border border-gray-200 p-12 bg-slate-950 shadow-sm">
                <div className="font-serif text-5xl text-[#B28A4A] mb-4">30+</div>
                <div className="text-sm tracking-widest uppercase text-gray-500">Years of Trust</div>
              </div>
              <div className="border border-gray-200 p-12 bg-slate-950 shadow-sm">
                <div className="font-serif text-5xl text-[#B28A4A] mb-4">50+</div>
                <div className="text-sm tracking-widest uppercase text-gray-500">Landmark Projects</div>
              </div>
              <div className="border border-gray-200 p-12 bg-slate-950 shadow-sm">
                <div className="font-serif text-5xl text-[#B28A4A] mb-4">20M+</div>
                <div className="text-sm tracking-widest uppercase text-gray-500">Sq.Ft Developed</div>
              </div>
            </div>
          </div>
        </section>
      </main>    </>
  );
}
