import Link from "next/link";

const services = [
  {
    name: "Remote Work",
    capacity: "1-2 people",
    price: "$41",
    duration: "4 hours",
    description:
      "Standing desks, fast WiFi, 20\" monitor, and a 75\" TV for presentations. Work hard, then unwind in the hammock.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
  },
  {
    name: "Small Events",
    capacity: "3-5 people",
    price: "$75",
    duration: "4 hours",
    description:
      "Birthday parties, meetups, bachelor parties, creative sessions. Full house and backyard access.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    name: "Large Events",
    capacity: "5+ people",
    price: "$100",
    duration: "4 hours",
    description:
      "Bigger gatherings, family reunions, watch parties. Fire up the grill, set up the yard, and let it run.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
  {
    name: "Overnight Stay",
    capacity: "Up to 6 guests",
    price: "From $89",
    duration: "per night",
    description:
      "2 queen beds + 1 twin Murphy bed. Full kitchenette, washer/dryer, fenced yard for your pets.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote:
      "It was easy to find and the place was clean and well kept. We stayed there as a stop after our wedding and it met all expectations. Would stay again if need be. Thanks for the wonderful accommodations!",
    name: "Jennifer",
    date: "June 2025",
  },
  {
    quote:
      "I recently stayed in this BNB for an out of town trip and all I can say is that the stay was so golden and peaceful. The house is located in a nice small neighborhood, so there wasn't any problems with outside noise nor was the BNB hard to find.",
    name: "Braeden",
    date: "April 2025",
  },
  {
    quote:
      "My kids and I really enjoyed our stay. Tons of activities set up for you to have a great time and never become bored. We enjoyed music, watched movies, played games, had a fire, played basketball, road bikes, cooked, bbq, ping pong, darts and played frisbee!",
    name: "Chase",
    date: "April 2025",
  },
];

const highlights = [
  { label: "Greenville, TX", detail: "Blocks from downtown" },
  { label: "770 sq ft", detail: "Entire space is yours" },
  { label: "Pet Friendly", detail: "Fenced backyard" },
  { label: "7-8 Cars", detail: "Front + back parking" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        {/* Background - placeholder gradient until real photos are added */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--accent)_0%,_transparent_50%)] opacity-10" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-6">
            Church Street Studio
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
            Find Your Flow
          </h1>
          <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto mb-4">
            A creative space with small-town soul in Greenville, TX.
          </p>
          <p className="text-lg text-muted/70 mb-10">
            Remote work. Events. Overnight stays. Starting at $41.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="px-8 py-4 bg-accent text-background font-semibold rounded-lg text-lg hover:bg-accent-hover transition-colors"
            >
              Book Now
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border border-border text-foreground font-semibold rounded-lg text-lg hover:bg-surface-hover transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Highlights bar */}
      <section className="border-y border-border bg-surface">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map((h) => (
            <div key={h.label} className="text-center">
              <p className="text-lg font-semibold text-foreground">{h.label}</p>
              <p className="text-sm text-muted">{h.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Do You Want to Use the Space?
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Whether you need a quiet place to grind or a backyard to throw down, we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.name}
                className="group p-8 rounded-xl border border-border bg-surface hover:border-accent/30 hover:bg-surface-hover transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent">
                    {service.icon}
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-accent">{service.price}</p>
                    <p className="text-sm text-muted">/ {service.duration}</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-1">{service.name}</h3>
                <p className="text-sm text-muted mb-3">{service.capacity}</p>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/book"
              className="inline-block px-8 py-4 bg-accent text-background font-semibold rounded-lg hover:bg-accent-hover transition-colors"
            >
              Check Availability
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Made with Love in Greenville
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-8 rounded-xl border border-border bg-background"
              >
                <div className="text-accent text-4xl mb-4">&ldquo;</div>
                <p className="text-foreground/80 text-sm leading-relaxed mb-6">
                  {t.quote}
                </p>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-muted text-xs">{t.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Book?
          </h2>
          <p className="text-muted text-lg mb-10">
            Pick your service, choose a date, and the space is yours. No middleman, no markup.
          </p>
          <Link
            href="/book"
            className="inline-block px-10 py-5 bg-accent text-background font-semibold rounded-lg text-lg hover:bg-accent-hover transition-colors"
          >
            Book Your Session
          </Link>
        </div>
      </section>
    </>
  );
}
