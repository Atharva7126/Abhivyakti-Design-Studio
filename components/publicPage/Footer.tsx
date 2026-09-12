import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-brand-secondary px-6 py-12 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 border-t border-brand-primary/40 pt-10 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4 text-brand-text">
            <h2 className="text-4xl font-medium tracking-tight">
              Ar. Aboli Raut
            </h2>

            <p className="max-w-sm text-sm leading-6">
              Pune, Maharashtra, India
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-opacity p-1.5 rounded-full bg-brand-text hover:opacity-60"
            >
              <Image 
                src="/instagram.svg"
                alt="insta logo"
                width={24}
                height={24}
              />
            </Link>

            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-opacity p-1.5 rounded-full bg-brand-text hover:opacity-60"
            >
              <Image 
                src="/linkedin.svg"
                alt="linkedin logo"
                width={24}
                height={24}
              />
            </Link>

            <Link
              href="mailto:aboliraut10@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mail"
              className="transition-opacity p-1.5 rounded-full bg-brand-text hover:opacity-60"
            >
              <Image 
                src="/gmail.svg"
                alt="gmail logo"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-2 border-t border-brand-primary/40 pt-6 text-xs text-white sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Ar. Aboli Raut. All rights reserved.</p>

          <p>Architecture & Interior Design</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;