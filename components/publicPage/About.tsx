import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="w-full overflow-hidden bg-brand-secondary px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-24 lg:px-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 sm:gap-12 md:grid-cols-2 lg:gap-20">
        <div className="relative h-88 w-full overflow-hidden sm:h-112 md:h-114 lg:h-160">
          <Image
            src="/architect.jpg"
            alt="Architect"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex min-w-0 flex-col gap-6 sm:gap-8">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-primary/80">
            About
          </p>

          <h2 className="max-w-xl text-3xl font-medium leading-tight tracking-tight text-brand-primary sm:text-4xl md:text-5xl lg:text-6xl">
            Designing spaces that feel as good as they look
          </h2>

          <p className="max-w-lg text-sm leading-7 text-[#E3EDE6] sm:text-base md:text-lg">
            We believe architecture is more than creating beautiful spaces.
            It is about understanding how people live, work, and experience
            their surroundings. Every project is thoughtfully designed with a
            balance of form, function, material, and light
          </p>

          <div className="flex flex-wrap gap-x-8 gap-y-5 border-t border-brand-primary/20 pt-6 text-white sm:gap-x-12">
            <div>
              <p className="text-3xl font-medium">12+</p>
              <p className="mt-1 text-sm">
                Years Experience
              </p>
            </div>

            <div>
              <p className="text-3xl font-medium">45+</p>
              <p className="mt-1 text-sm">
                Projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;