import { MoveLeft, MoveRight } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const projects = [
  {
    slug: "the-green-house",
    title: "The Green House",
    location: "Pune, Maharashtra",
    category: "Residential",
    year: "2026",
    description:
      "A contemporary residence designed around natural light, open spaces and a strong connection with its surroundings.",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    slug: "modern-retreat",
    title: "Modern Retreat",
    location: "Lonavala, Maharashtra",
    category: "Residential",
    year: "2026",
    description:
      "A peaceful retreat that brings together contemporary architecture, natural materials and the surrounding landscape.",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    slug: "courtyard-house",
    title: "Courtyard House",
    location: "Mumbai, Maharashtra",
    category: "Residential",
    year: "2025",
    description:
      "A home centered around a private courtyard, creating a balance between openness, privacy and natural light.",
    images: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    slug: "urban-residence",
    title: "Urban Residence",
    location: "Pune, Maharashtra",
    category: "Interior",
    year: "2025",
    description:
      "A modern urban residence designed with clean lines, warm materials and carefully considered interiors.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    slug: "horizon-villa",
    title: "Horizon Villa",
    location: "Alibaug, Maharashtra",
    category: "Residential",
    year: "2025",
    description:
      "A contemporary villa designed to frame expansive views while maintaining a strong relationship with the landscape.",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    slug: "coastal-studio",
    title: "Coastal Studio",
    location: "Goa",
    category: "Interior",
    year: "2024",
    description:
      "A relaxed coastal interior that combines natural textures, simple forms and a connection to the surrounding environment.",
    images: [
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
    ],
  },
];

interface PortfolioProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const PortfolioProjectPage = async ({
  params,
}: PortfolioProjectPageProps) => {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  const projectIndex = projects.findIndex((project) => project.slug === slug);
  const previousProject = projects[projectIndex - 1];
  const nextProject = projects[projectIndex + 1];

  return (
    <main className="min-h-screen bg-[#fffcea]">
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-12 md:px-12 md:pt-20">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
              {project.category}
            </p>

            <h3 className="max-w-3xl text-5xl font-medium leading-tight text-brand-secondary md:text-6xl lg:text-7xl">
              {project.title}
            </h3>
          </div>

          <div className="flex gap-10 text-sm text-brand-secondary/70">
            <div>
              <p className="mb-1 text-xs uppercase tracking-widest text-amber-700">
                Location
              </p>
              <p>{project.location}</p>
            </div>

            <div>
              <p className="mb-1 text-xs uppercase tracking-widest text-amber-700">
                Year
              </p>
              <p>{project.year}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="aspect-video overflow-hidden">
          <img
            src={project.images[0]}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
              About the Project
            </p>
          </div>

          <p className="max-w-3xl text-2xl leading-relaxed text-brand-secondary md:col-span-2 md:text-3xl">
            {project.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {project.images.slice(1).map((image, index) => (
            <div
              key={`${project.slug}-${index}`}
              className="aspect-4/3 overflow-hidden"
            >
              <img
                src={image}
                alt={`${project.title} ${index + 2}`}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>

        <div className="mt-24 flex items-center justify-between border-t border-brand-secondary/15 pt-8">
          {previousProject ? (
            <Link
              href={`/portfolio/${previousProject.slug}`}
              className="group flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-secondary"
            >
              <MoveLeft className="transition-transform duration-300 group-hover:-translate-x-2" />
              <span>Previous Project</span>
            </Link>
          ) : (
            <span />
          )}

          {nextProject && (
            <Link
              href={`/portfolio/${nextProject.slug}`}
              className="group flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-secondary"
            >
              <span>Next Project</span>
              <MoveRight className="transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          )}
        </div>
      </section>
    </main>
  );
};

export default PortfolioProjectPage;
