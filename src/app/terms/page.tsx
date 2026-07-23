import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full flex flex-col bg-[#FAF8F3]">
        <section className="pt-40 pb-20 px-6 md:px-12 bg-slate-950">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="font-serif text-4xl md:text-5xl mb-8 leading-tight text-[#151515]">Terms & Conditions</h1>
          </div>
        </section>
        <section className="py-20 px-6 md:px-12">
          <div className="container mx-auto max-w-4xl prose prose-lg prose-gray font-light text-gray-600">
            <p>Effective Date: January 1, 2026</p>
            <p>Welcome to The Reserve by Kolte Patil. By accessing this website, you agree to be bound by these Terms and Conditions of Use.</p>
            <h3>Disclaimer</h3>
            <p>The materials on this website are provided on an 'as is' basis. Kolte Patil Developers makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.</p>
            <p>All floor plans, layouts, and specifications are indicative and subject to change by the developer without prior notice.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
