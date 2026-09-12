import Link from "next/link";

interface ProjectCardProps {
  title: string;
  image: string;
  link?: string;
  className?: string;
}

const ProjectCard = ({
  title,
  image,
  link,
  className = "",
}: ProjectCardProps) => {
  return (
    <Link href={link ?? ""} className={`group ${className}`}>
      <div className="relative aspect-5/4 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 transition-colors duration-500 group-hover:bg-black/35" />

        <div className="absolute bottom-0 left-0 w-full border-l border-r border-b border-brand-secondary bg-black/40 text-white py-2 text-center md:hidden">
          {title}
        </div>

        <div className="md:absolute hidden inset-0 md:flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
          <h3 className="translate-y-3 text-3xl text-brand-primary transition-transform duration-500 group-hover:translate-y-0 md:text-4xl">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
