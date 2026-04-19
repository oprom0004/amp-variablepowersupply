import Link from "next/link";

export default function NotFound() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl font-black uppercase tracking-tight">404 - Page Not Found</h1>
      <p className="mt-4 text-sm text-[#1A1A1A]/70">The requested catalog page does not exist.</p>
      <Link href="/" className="mt-8 inline-flex bg-[#1A1A1A] text-white px-6 py-3 text-xs font-black uppercase tracking-[0.2em]">
        Return to Home
      </Link>
    </section>
  );
}