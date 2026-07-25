export default function ActivateEmail() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B2B1B] text-white">
      <div className="max-w-md p-8 bg-white/5 rounded-2xl border border-white/10 text-center">
        <h1 className="text-2xl font-serif text-[#d4af37] mb-4">Email System Activation</h1>
        <p className="text-sm text-white/70 mb-8 leading-relaxed">
          Because we are using a zero-configuration enterprise email router, you must click the button below 
          to perform a standard HTML POST request. This will trigger the activation email to <strong>propsmartrealty@gmail.com</strong>.
        </p>
        <form action="https://formsubmit.co/propsmartrealty@gmail.com" method="POST">
          <input type="hidden" name="name" value="Initial Activation Test" />
          <input type="hidden" name="_captcha" value="false" />
          <button 
            type="submit"
            className="w-full py-4 bg-[#d4af37] text-black font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-white transition-colors"
          >
            Activate Email Now
          </button>
        </form>
      </div>
    </div>
  );
}
