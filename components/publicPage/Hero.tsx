import { MoveDown, MoveRight } from 'lucide-react';
import Link from 'next/link';

import ParallaxImageY, { ParallaxImageZoomOut } from './ParallaxImage';

const HeroSection = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] pt-10 md:py-16 md:px-12 lg:px-16 px-5">
      <div className="mx-auto flex min-h-[calc(100vh-144px)] max-w-7xl flex-col lg:flex-row">
        <div className="flex w-full text-center md:text-start flex-col justify-center pt-16 md:py-16 lg:w-1/2 lg:pr-16">
          <span className="mb-6 text-xs md:text-sm font-semibold tracking-[0.2em] md:tracking-[0.3em] text-amber-700">
            ARCHITECT & INTERIOR DESIGNER
          </span>

          <h1 className="max-w-xl font-serif text-4xl md:text-5xl leading-[1.05] tracking-tight text-brand-secondary sm:text-6xl lg:text-7xl">
            Spaces that inspire a better tomorrow
          </h1>

          <p className="mt-8 max-w-md text-base leading-7 text-brand-secondary/70">
            Thoughtful architecture and timeless interiors designed to
            create spaces that feel as good as they look
          </p>

          <div className="mt-10">
            <Link
              href="#projects"
              className="group inline-flex items-center gap-4 border-b border-amber-700 pb-2 text-sm font-semibold tracking-[0.2em] text-amber-700 transition-colors hover:text-brand-secondary"
            >
              EXPLORE MY WORK
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <MoveRight className="stroke-[1.5]" />
              </span>
            </Link>
          </div>

          <div className="mt-12 space-y-3 hidden md:block">
            <div className="h-18 w-0.5 bg-brand-secondary"></div>
            <span className="tracking-[0.3em] font-semibold text-brand-secondary">SCROLL</span>
            <MoveDown className="-ml-2.75 text-brand-secondary h-11 stroke-[1.5]"/>
          </div>
        </div>

        <div className="min-h-125 md:block flex items-center justify-center w-full lg:min-h-0 lg:w-1/2">
          <ParallaxImageY
            src="/architect-house-hero.jpg"
            alt="Modern architectural residence surrounded by nature"
            yOffset={250}
            className="w-190 min-h-170 hidden md:block"
          />
          <ParallaxImageZoomOut 
            src="/architect-house-hero.jpg"
            alt="Modern architectural residence surrounded by nature"
            zoomOffset={300}
            className='md:hidden block min-w-full min-h-85'
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
