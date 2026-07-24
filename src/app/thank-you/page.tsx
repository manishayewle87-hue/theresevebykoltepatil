import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function ThankYouPage() {
  return (
    <>      <main className="flex-1 w-full flex flex-col bg-[#FAF8F3]">
        <section className="pt-40 pb-20 px-6 md:px-12 min-h-[80vh] flex items-center justify-center">
          <div className="container mx-auto text-center flex flex-col items-center">
            <CheckCircle className="w-16 h-16 text-[#B28A4A] mb-8" />
            <h1 className="font-serif text-5xl md:text-6xl mb-6 leading-tight text-[#151515]">
              Thank You
            </h1>
            <p className="max-w-xl mx-auto text-gray-600 font-light text-lg mb-10">
              We have successfully received your enquiry. Our luxury property advisor will contact you shortly to schedule your private viewing of The Reserve.
            </p>
            <Link href="/">
              <Button variant="default" className="rounded-none uppercase tracking-widest text-xs px-10">
                Return to Homepage
              </Button>
            </Link>
          </div>
        </section>
      </main>    </>
  );
}
