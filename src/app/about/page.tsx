import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story of Church Street Studio - from a century-old birthing center to a creative space in Greenville, TX.",
};

const timeline = [
  {
    year: "Pre-2019",
    title: "The Birthing Center",
    description:
      "For years, 2404 Church Street served as a birthing center where more than a hundred babies came into the world. The house had history long before we ever walked through the door.",
  },
  {
    year: "2019",
    title: "We Bought the Place",
    description:
      "It wasn't in bad shape, but it needed new life. We saw the bones of something special - a century-old home with stories in the walls, sitting just blocks from downtown Greenville.",
  },
  {
    year: "2019-2020",
    title: "Ripped Out the Birthing Tub",
    description:
      "First thing on the wish list was pulling out the giant birthing tub. It turned into a bigger project than expected - we'd been using it as decor for way too long. Built out a full bathroom with a heated bidet toilet, keeping it wheelchair friendly.",
  },
  {
    year: "2020-2021",
    title: "Fence, Parking, and the Backyard",
    description:
      "Fenced in the yard so kids and dogs could roam. Poured a back driveway so parking would never be an issue - between front and back, we can fit 7-8 cars. That concrete changed everything.",
  },
  {
    year: "2022",
    title: "Replaced the Back Porch",
    description:
      "Tore out the rotting back porch and built a much larger one with a ramp. It became the natural gathering spot - lean on the rail, tell a story, watch whoever's braving the cornhole boards.",
  },
  {
    year: "2023",
    title: "Rebuilt the Front Porch",
    description:
      "Rebuilt the front porch from the ground up. Fresh coat of paint on the whole place. Added covered seating for those long Texas evenings.",
  },
  {
    year: "2024",
    title: "Opened on Airbnb",
    description:
      "Opened our doors to overnight guests. Remote workers, families, bachelor parties - the space started finding its people.",
  },
  {
    year: "2025",
    title: "Micro-Rentals + Day Use",
    description:
      "Started offering flexible, micro-rental options. Recording sessions, day-use meetings, weekend events. The studio became what it was always meant to be.",
  },
  {
    year: "Now",
    title: "A Place Where Stories Start",
    description:
      "Pretty much all done by hand, with help from family, friends, and the occasional contractor when we got in over our heads. Now it's back to being what it's always been: a place where new stories start.",
  },
];

const amenities = {
  "Work & Tech": [
    "Fast WiFi (great for Zoom & streaming)",
    "2 rolling desks (1 electronic standing desk)",
    "2 office chairs on wheels",
    "75\" smart TV with Netflix, Prime & HBO Max",
    "Keyboard & mouse combo for your laptop",
    "Nintendo Switch with Nintendo Online",
  ],
  "Entertainment & Outdoors": [
    "Covered seating with outdoor TV",
    "Outdoor couch (seats 8) & picnic table (seats 6)",
    "Adjustable-height basketball hoop",
    "Cornhole & beer pong setup",
    "1 adult bike + 1 adult trike (with locks)",
    "Fully fenced backyard for privacy",
  ],
  "Kitchenette & Extras": [
    "Air fryer, Keurig & toaster oven",
    "Basic plates, cups & utensils",
    "Recliner, futon & Murphy beds if the day runs long",
    "Heated bidet - poop like a king",
    "Heat & air - always comfortable",
    "Easy keyless entry & motion lights",
  ],
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            A Creative Space with Small-Town Soul
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Tucked just a few blocks from the square in Greenville, TX, Church Street Studio is more
            than just a place to stay - it's a place to create, gather, and make memories. This
            century-old home was once a bustling birthing center where countless new stories began.
          </p>
        </div>
        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
          <Image
            src="/photos/DJI_0154.jpg"
            alt="Aerial drone view of Church Street Studio and the main house"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* What it's for */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-border bg-surface overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/photos/IMG_7770.jpg"
                alt="Dual workstation with large monitor and ergonomic chairs"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">
                Built for Remote Work That Doesn't Feel Remote
              </h2>
              <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                Church Street Studio makes working away from the office actually feel good. Settle in
                at the standing desk or roll your laptop out to the backyard's shaded table. High-speed
                WiFi and a 75" smart TV let you take video calls or screen-share presentations without
                a hiccup.
              </p>
              <p className="text-foreground/70 text-sm leading-relaxed">
                When you're done, unwind in the hammock, shoot some hoops, or pedal around the
                neighborhood on one of our bikes. It's an easy reset that beats any hotel conference
                room.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-surface overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/photos/IMG_6471.jpg"
                alt="Backyard hammock with covered pavilion and patio"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">
                Events, Gatherings, and a Backyard Made for Texas Evenings
              </h2>
              <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                From small birthday bashes and bachelor parties to casual meet-ups or family reunions,
                the Studio adapts to what you're planning. With a big fenced backyard set up for fun:
                basketball, recreational pickleball, cornhole, beer pong, covered seating, and even an
                outdoor TV.
              </p>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Want to crank up the grill and let the day run long? That's exactly what this place was
                built for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="bg-surface border-y border-border py-24 mb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Amenities</h2>
            <p className="text-muted">
              Designed for work, gatherings, and creative days that run long - Texas style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(amenities).map(([category, items]) => (
              <div key={category} className="p-6 rounded-xl border border-border bg-background">
                <h3 className="text-lg font-bold mb-4">{category}</h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/70">
                      <span className="text-accent mt-0.5">&#8226;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            A Brief History of the Studio
          </h2>
          <p className="text-muted">
            From birthing center to creative space, built by hand with a little help from family and friends.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent border-2 border-background z-10 mt-1.5" />

                {/* Content */}
                <div className={`pl-12 md:pl-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <span className="text-accent font-bold text-sm">{item.year}</span>
                  <h3 className="text-xl font-bold mt-1 mb-2">{item.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative max-w-6xl mx-auto px-6 mb-8">
        <div className="relative rounded-xl overflow-hidden">
          <Image
            src="/photos/DJI_0087.jpg"
            alt="Church Street Studio front porch"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-background/75" />
          <div className="relative z-10 py-20 text-center">
            <h2 className="text-3xl font-bold mb-4">Come See It for Yourself</h2>
            <p className="text-muted text-lg mb-8">
              The photos don't do it justice. Book a session and find out why people keep coming back.
            </p>
            <Link
              href="/book"
              className="inline-block px-8 py-4 bg-accent text-background font-semibold rounded-lg hover:bg-accent-hover transition-colors"
            >
              Book the Studio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
