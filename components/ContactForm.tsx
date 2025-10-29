import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await new Promise(r => setTimeout(r, 800)); // fake send
      setStatus('success');
      (e.target as HTMLFormElement).reset();
      toast.success('Thanks! We will reach out shortly.');
    } catch {
      setStatus('error');
      toast.error('Something went wrong.');
    } finally {
      setStatus('idle');
    }
  };

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <input required name="name" placeholder="Full name" className="rounded-xl border border-black/10 bg-white/70 p-3 outline-none" />
      <input required type="email" name="email" placeholder="Email" className="rounded-xl border border-black/10 bg-white/70 p-3 outline-none" />
      <input name="phone" placeholder="Phone" className="rounded-xl border border-black/10 bg-white/70 p-3 outline-none" />
      <input name="location" placeholder="Project location" className="rounded-xl border border-black/10 bg-white/70 p-3 outline-none" />
      <textarea required name="message" placeholder="Tell us about your project..." className="md:col-span-2 h-32 rounded-xl border border-black/10 bg-white/70 p-3 outline-none" />
      <div className="md:col-span-2">
        <button disabled={status==='sending'} className="rounded-xl bg-forest px-6 py-3 font-semibold text-white hover:opacity-90 disabled:opacity-50">
          {status==='sending' ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
}
