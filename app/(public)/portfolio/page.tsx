import ProjectCard from '@/components/publicPage/ProjectCard';

const projects = [
  {
    slug: "the-green-house",
    title: "The Green House",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "modern-retreat",
    title: "Modern Retreat",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "courtyard-house",
    title: "Courtyard House",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "urban-residence",
    title: "Urban Residence",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "horizon-villa",
    title: "Horizon Villa",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "coastal-studio",
    title: "Coastal Studio",
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80",
  },
];
const PortfolioPage = () => {
  return (
    <main className="min-h-screen py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-14 flex items-center justify-center">
          <h1 className="text-4xl font-medium text-brand-secondary md:text-5xl">
            Profolio
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              link={`/portfolio/${project.slug}`}
              title={project.title}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </main>
  );
};
export default PortfolioPage;
