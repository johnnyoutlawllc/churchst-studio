import Link from "next/link";
import Image from "next/image";

const services = [
  {
    name: "Remote Work",
    capacity: "1-2 people",
    price: "$41",
    duration: "4 hours",
    description:
      "Standing desks, fast WiFi, 20\" monitor, and a 75\" TV for presentations. Work hard, then unwind in the hammock.",
    photo: "/photos/IMG_7770.jpg",
    photoAlt: "Dual workstation setup with large monitor and ergonomic chairs",
  },
  {
    name: "Small Events",
    capacity: "3-5 people",
    price: "$75",
    duration: "4 hours",
    description:
      "Birthday parties, meetups, bachelor parties, creative sessions. Full house and backyard access.",
    photo: "/photos/IMG_3399.jpg",
    photoAlt: "Covered patio with hexagon picnic table and string lights",
  },
  {
    name: "Large Events",
    capacity: "5+ people",
    price: "$100",
    duration: "4 hours",
    description:
      "Bigger gatherings, family reunions, watch parties. Fire up the grill, set up the yard, and let it run.",
    photo: "/photos/IMG_7765.jpg",
    photoAlt: "Open living space with entertainment setup and track lighting",
  },
  {
    name: "Overnight Stay",
    capacity: "Up to 6 guests",
    price: "From $89",
    duration: "per night",
    description:
      "2 queen beds + 1 twin Murphy bed. Full kitchenette, washer/dryer, fenced yard for your pets.",
    photo: "/photos/IMG_1074.jpg",
    photoAlt: "Cozy bedroom with queen bed and modern decor",
  },
];

const testimonials = [
  {
    quote:
      "We really enjoyed our stay at Johnny's place. The home was clean and cozy, and the backyard was a huge hit with our family. We loved the heated outdoor seating area, the fire pit, and the easy-to-use propane grill. The kids had so much fun with the ping pong table and the outdoor TV kept the little ones happily entertained. Johnny was kind and easy to communicate with, and he even brought marshmallows for the kids to roast, which was such a sweet touch.",
    name: "Amber",
    location: "Cleburne, TX",
    date: "January 2026",
    stars: 4,
  },
  {
    quote:
      "This place is a gem. I love the outdoor area to lounge and watch football while I was in. Daughter is a guitar player and she loves music so she spent her time doing that inside. Bathroom is awesome. Man cave vibes. I loved it.",
    name: "Roman",
    location: "Terrell, TX",
    date: "November 2025",
    stars: 5,
  },
  {
    quote:
      "This is a beautiful place with a wonderful bathroom. The back yard is a definite must for entertaining. John and Maria responded very quickly whenever I had questions. Definitely would stay here again when in Greenville.",
    name: "Maura",
    location: "West Saint Paul, MN",
    date: "November 2025",
    stars: 5,
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
        {/* Background photo */}
        <Image
          src="/photos/IMG_7747.jpg"
          alt="Church Street Studio interior - open living space with workspace, entertainment area, and cozy seating"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/80" />

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
                className="group rounded-xl border border-border bg-surface hover:border-accent/30 hover:bg-surface-hover transition-all overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.photo}
                    alt={service.photoAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
                </div>
                <div className="p-8 pt-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-semibold">{service.name}</h3>
                      <p className="text-sm text-muted">{service.capacity}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-accent">{service.price}</p>
                      <p className="text-sm text-muted">/ {service.duration}</p>
                    </div>
                  </div>
                  <p className="text-foreground/70 text-sm leading-relaxed mt-3">
                    {service.description}
                  </p>
                </div>
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
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-4xl font-bold text-accent">4.96</span>
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Guest Favorite on Airbnb
            </h2>
            <p className="text-muted">69 reviews from real guests</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-8 rounded-xl border border-border bg-background"
              >
                <div className="flex text-accent mb-4">
                  {[...Array(t.stars)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-muted text-xs">{t.location} - {t.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            The Space
          </h2>
          <p className="text-muted text-lg text-center mb-12 max-w-2xl mx-auto">
            770 square feet of thoughtfully designed space, plus a backyard built for good times.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { src: "/photos/DJI_0087.jpg", alt: "Studio exterior - front porch view", span: "md:col-span-2 md:row-span-2" },
              { src: "/photos/IMG_7748.jpg", alt: "Interior workspace with large TV and desk setup", span: "" },
              { src: "/photos/IMG_7756.jpg", alt: "Breakfast nook with booth seating", span: "" },
              { src: "/photos/IMG_6471.jpg", alt: "Backyard hammock and covered pavilion", span: "" },
              { src: "/photos/IMG_8234.jpg", alt: "Outdoor ping pong table", span: "" },
              { src: "/photos/IMG_2952.jpg", alt: "Fire pit seating area in the backyard", span: "" },
              { src: "/photos/IMG_3400.jpg", alt: "Outdoor sectional lounge under covered patio", span: "" },
              { src: "/photos/IMG_3902.jpg", alt: "Basketball court in the backyard", span: "md:col-span-2" },
            ].map((photo) => (
              <div
                key={photo.src}
                className={`relative overflow-hidden rounded-lg ${photo.span} ${photo.span.includes("row-span-2") ? "h-64 md:h-full" : "h-48 md:h-56"}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/photos/04-2025 Church St (7).jpg"
          alt="Aerial view of Church Street Studio property"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
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
