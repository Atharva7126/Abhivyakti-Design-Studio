import Link from "next/link";

const BaseNavbar = () => {
  return (
    <nav className="md:fixed hidden left-0 right-0 top-0 z-50 md:flex w-full items-center justify-between bg-brand-primary px-6 py-5 md:px-20">
      <Link
        href="/"
        className="text-lg font-semibold tracking-tight text-slate-900 transition-colors"
      >
        Ar. Aboli Neeta Milind Raut
      </Link>
      <div className="flex items-center gap-6 text-sm font-medium text-slate-600">
        <Link href="/" className="transition-colors hover:text-amber-700">
          Home
        </Link>
        <Link
          href="/portfolio"
          className="transition-colors hover:text-amber-700"
        >
          Portfolio
        </Link>
        <Link href="/#about" className="transition-colors hover:text-amber-700">
          About
        </Link>
        <Link
          href="/#contact"
          className="transition-colors hover:text-amber-700"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default BaseNavbar;
