import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book",
  description:
    "Book Church Street Studio for remote work, events, or overnight stays in Greenville, TX.",
};

const services = [
  {
    id: "remote-work",
    name: "Remote Work",
    capacity: "1-2 people",
    options: [
      { duration: "4 hours", price: 41, originalPrice: 50 },
      { duration: "9 hours (full day)", price: 85 },
    ],
    description:
      "Rolling desks, fast WiFi, 20\" monitor, 75\" smart TV. Settle in and get to work.",
  },
  {
    id: "small-event",
    name: "Small Event",
    capacity: "3-5 people",
    options: [
      { duration: "4 hours", price: 75 },
      { duration: "8 hours", price: 125 },
    ],
    description:
      "Full house and backyard access. Birthday parties, meetups, creative sessions.",
  },
  {
    id: "large-event",
    name: "Large Event",
    capacity: "5+ people",
    options: [
      { duration: "4 hours", price: 100 },
      { duration: "8 hours", price: 150 },
    ],
    description:
      "Bigger groups, family reunions, watch parties. Backyard BBQ, games, covered seating.",
  },
  {
    id: "overnight",
    name: "Overnight Stay",
    capacity: "Up to 6 guests",
    options: [
      { duration: "per night", price: 89 },
      { duration: "weekend (Fri-Sun)", price: 239 },
    ],
    description:
      "2 queen beds, 1 twin Murphy bed. Kitchenette, washer/dryer, fenced yard. Pet friendly.",
  },
];

export default function BookPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book the Studio</h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Pick a service below. Calendar and checkout coming soon - for now, select what you need and we'll get back to you.
          </p>
        </div>

        {/* Service Cards */}
        <div className="space-y-6 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-8 rounded-xl border border-border bg-surface hover:border-accent/30 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-1">{service.name}</h2>
                  <p className="text-sm text-accent mb-3">{service.capacity}</p>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-col gap-3 md:min-w-[200px]">
                  {service.options.map((opt) => (
                    <div
                      key={opt.duration}
                      className="flex items-center justify-between gap-4 px-4 py-3 rounded-lg border border-border bg-background"
                    >
                      <span className="text-sm text-muted">{opt.duration}</span>
                      <div className="flex items-center gap-2">
                        {opt.originalPrice && (
                          <span className="text-sm text-muted line-through">
                            ${opt.originalPrice}
                          </span>
                        )}
                        <span className="text-lg font-bold text-accent">
                          ${opt.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Calendar Placeholder */}
        <div className="rounded-xl border border-border bg-surface p-12 text-center mb-16">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
            <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-3">Calendar Coming Soon</h3>
          <p className="text-muted max-w-md mx-auto mb-8">
            Real-time availability and instant booking with Stripe checkout is in the works. For now, reach out directly to reserve your spot.
          </p>
          <a
            href="mailto:churchstreetstudiotx@gmail.com?subject=Booking Inquiry"
            className="inline-block px-8 py-4 bg-accent text-background font-semibold rounded-lg hover:bg-accent-hover transition-colors"
          >
            Email to Book
          </a>
        </div>

        {/* Long-term stays note */}
        <div className="rounded-xl border border-accent/20 bg-accent/5 p-8">
          <h3 className="text-xl font-bold mb-2">Long-term Stays</h3>
          <p className="text-foreground/70 text-sm leading-relaxed">
            Planning to stay more than one night? We offer discounted rates for multi-night bookings.
            Reach out at{" "}
            <a
              href="mailto:churchstreetstudiotx@gmail.com"
              className="text-accent hover:text-accent-hover transition-colors"
            >
              churchstreetstudiotx@gmail.com
            </a>{" "}
            and we'll work something out.
          </p>
        </div>
      </div>
    </div>
  );
}
