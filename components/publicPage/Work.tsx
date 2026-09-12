"use client";

import { MoveRight } from 'lucide-react';
import Link from 'next/link';

import { Button } from '../ui/button';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "The Green House",
    link: "/portfolio/the-green-house",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Modern Retreat",
    link: "/portfolio/modern-retreat",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Courtyard House",
    link: "/portfolio/courtyard-house",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Urban Residence",
    link: "/portfolio/urban-residence",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Horizon Villa",
    link: "/portfolio/horizon-villa",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Coastal Studio",
    link: "/portfolio/coastal-studio",
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=900&q=80",
  },
];

const Work = () => {
  return (
    <section id="projects" className="w-full bg-[#E8DEB2]/20 py-10 md:px-0 px-5">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-center justify-center">
          <h2 className="mt-3 font-medium text-4xl text-brand-secondary md:text-5xl">
            My Work
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="relative">
              <ProjectCard {...project} />
              <div className="absolute bottom-0 left-0 w-full border-l border-r border-b border-brand-secondary bg-black/40 text-white py-2 text-center md:hidden">
                {project.title}
              </div>
            </div>
          ))}
        </div>

        <Link href="/portfolio" className="mt-16 flex justify-center">
          <Button
            variant="outline"
            className="rounded-full flex group items-center justify-center gap-2 border-brand-secondary px-7 py-6 text-brand-secondary hover:bg-brand-secondary hover:text-brand-primary"
          >
            View Portfolio
            <MoveRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Work;
