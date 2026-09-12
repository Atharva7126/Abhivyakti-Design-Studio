"use client"
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import ParallaxImage from './ParallaxImage';

const Contact = () => {
  return (
    <section id="contact" className="w-full bg-brand-primary px-6 py-5 md:py-24 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">
        <ParallaxImage
          src="/architectural-interior.jpg"
          alt="Architectural interior"
          yOffset={200}
        />

        <div className="flex flex-col justify-center">
          <div className="mb-10">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Get in touch
            </p>

            <h2 className="text-4xl text-brand-secondary font-medium tracking-tight md:text-5xl lg:text-6xl">
              Contact Me
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground">
              Have a project in mind or want to discuss an idea? I&rsquo;d love to
              hear from you. Fill out the form and I&rsquo;ll get back to you soon.
            </p>
          </div>

          <form onSubmit={() => {}} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium">
                  First Name*
                </label>

                <Input
                  id="firstName"
                  required
                  name="firstName"
                  placeholder="First name"
                  className="h-12 rounded-none border-foreground/20 bg-transparent"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium">
                  Last Name*
                </label>

                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Last name"
                  required
                  className="h-12 rounded-none border-foreground/20 bg-transparent"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email*
              </label>

              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="h-12 rounded-none border-foreground/20 bg-transparent"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>

              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                className="min-h-40 resize-none rounded-none border-foreground/20 bg-transparent"
              />
            </div>

            <Button
              type="submit"
              className="h-12 bg-brand-secondary hover:bg-brand-secondary/90 rounded-none px-8 text-sm uppercase tracking-widest"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
