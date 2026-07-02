const testimonials = [
  {
    company: "Silver Lining Career Coach",
    headline: "Founder co-workers who actually get it",
    quote: "Being in Gildre feels like having founder co-workers that actually get it. They've saved me hours of research just by sharing what's worked for them.",
    name: "Caitlin Van Berkel",
    title: "Founder",
    photo: "/reviews/caitlin-van-berkel.webp",
  },
  {
    company: "Ensyx Systems",
    headline: "First membership that truly delivers",
    quote: "This is the first membership where I truly feel like I'm getting what I paid for. The value and time the Gildre team spends with us on our business is remarkable.",
    name: "Iliana Alvarado",
    title: "President",
    photo: "/reviews/iliana-alvarado.webp",
  },
  {
    company: "HUPR",
    headline: "Sponsors, partners & genuine connections",
    quote: "Gildre continues to introduce me to an amazing, growing network of people that helped our company partner with and reach different sponsors. The in-person events are genuine and you get to connect with the real people behind unique companies.",
    name: "Dan Hernandez",
    title: "Co-Founder",
    photo: "/reviews/dan-hernandez.jpg",
  },
  {
    company: "Boop.VIP",
    headline: "Insights across every industry",
    quote: "The resources offered at Gildre are exceptionally beneficial for entrepreneurs and professionals, providing crucial tools and insights from seasoned mentors across countless industries.",
    name: "Horacio Rilo",
    title: "Founder",
    photo: "/reviews/horacio-rilo.webp",
  },
  {
    company: "Cerené",
    headline: "Community for every growth challenge",
    quote: "I wanted to surround myself with others going through similar growth and challenges. Gildre gives me exactly that, a community where I can both give and gain exceptional value.",
    name: "Elise Madrick",
    title: "Founder",
    photo: "/reviews/elise-madrick.webp",
  },
  {
    company: "AGI Beacon",
    headline: "Found her startup community from day one",
    quote: "Gildre was instrumental when I was first starting my company and needed to meet other business owners who understood the same challenges.",
    name: "Connor Fitzgerald",
    title: "Founder",
    photo: "/reviews/connor-fitzgerald.webp",
  },
  {
    company: "SOLVEE",
    headline: "Mentorship that isn't abstract",
    quote: "The structure at Gildre is impressive, it's truly a space where founders challenge each other and mentorship isn't abstract.",
    name: "Christof Mannfeld",
    title: "Founder",
    photo: "/reviews/christof-mannfeld.webp",
  },
  {
    company: "Palombini Coaching",
    headline: "Better ideas at every single encounter",
    quote: "Joining Gildre was the best decision I made since starting my practice in 2016. Having mentors makes things smoother, and the path more enjoyable as well. At each encounter I got better ideas that improved my offering.",
    name: "Carol Palombini",
    title: "Founder",
    photo: "/reviews/carol-palombini.webp",
  },
  {
    company: "Rodo",
    headline: "Measurable growth in new customers",
    quote: "Since we joined Gildre we've started to see measurable consistency in new customers. Inbound interest continues to grow which has helped create momentum.",
    name: "Alejandro Sandoval",
    title: "Founder",
    photo: "/reviews/alejandro-sandoval.webp",
  },
  {
    company: "MoveOn",
    headline: "A global network ready to guide you",
    quote: "Joining Gildre has been a thrilling experience with vibrant and intelligent members across the globe. There are so many resources and advisors ready to lend an ear and guiding hand.",
    name: "Yara Schilling",
    title: "Director of Talent & Development",
    photo: "/reviews/yara-schilling.webp",
  },
  {
    company: "Clipsense.ai",
    headline: "Never walking the SaaS road alone",
    quote: "Gildre connected me with founders who had the SaaS and entrepreneurship experience I needed, so I wasn't walking that road alone.",
    name: "Gavin Buckland",
    title: "Founder",
  },
  {
    company: "Topline",
    headline: "Rare community that consistently adds value",
    quote: "For founders in my network, Gildre is a rare community that consistently adds value, and I highly recommend checking them out!",
    name: "Chris Riklin",
    title: "Co-Founder",
    photo: "/reviews/chris-riklin.webp",
  },
  {
    company: "Kade Keyo",
    headline: "Advice, friends & solutions in one place",
    quote: "Since joining Gildre I've been able to receive great advice, find supportive friends, and solve pressing problems across a network of amazing individuals. If you're looking for an active and engaged community home, you'll find it here.",
    name: "Tanho Attah",
    title: "Co-Founder",
  },
  {
    company: "Remote Vans",
    headline: "High-performing founders sharing insights",
    quote: "Gildre is a thriving community of motivated, high-performing individuals who share knowledge, resources, and insights for those navigating the challenging world of startups.",
    name: "Robyn Hobson",
    title: "Chief Marketing Officer",
  },
  {
    company: "Cardo English",
    headline: "Curious, genuine members always available",
    quote: "The value of this community is the diverse voices on the platform. Each member is curious, genuine, engaging, and always open to a conversation.",
    name: "William Luck",
    title: "Founder",
  },
];

import Image from "next/image";

function initials(name: string) {
  return name.split(" ").slice(0, 2).map((n) => n[0]).join("");
}

const avatarColors = [
  "#5B7FA6","#6B8A6F","#7C6F57","#8A5B6F","#7A6B8A",
  "#6F8A7A","#8A7A5B","#5B6F8A","#8A6B5B","#6F7A8A",
  "#8A8A5B","#5B8A7A","#7A5B8A","#6B7A5B","#8A5B7A",
];

export default function ReviewsSection() {
  return (
    <section id="reviews" style={{ backgroundColor: "#080e1a" }}>
      {/* Heading */}
      <div className="px-6 pt-20 pb-12 text-center">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#C9A96E]">
          Real Founders. Real Results.
        </p>
        <h2
          className="mt-3 text-[2rem] font-bold text-white sm:text-[2.5rem]"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          What Our Members <span style={{ color: "#C9A96E" }}>Are Saying</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-500">
          250+ founders building their next chapter inside Gildre.
        </p>
      </div>

      {/* Grid — gap-px creates hairline gold borders between cells */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        style={{ gap: "1px", backgroundColor: "rgba(201,169,110,0.15)" }}
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="flex flex-col gap-5 p-8"
            style={{ backgroundColor: "#080e1a" }}
          >
            {/* Company */}
            <p
              className="text-[0.65rem] font-bold uppercase tracking-[0.2em]"
              style={{ color: "#C9A96E" }}
            >
              {t.company}
            </p>

            {/* Headline */}
            <h3
              className="text-lg font-bold leading-snug text-white"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              {t.headline}
            </h3>

            {/* Quote */}
            <p className="flex-1 text-sm leading-relaxed text-zinc-400">
              &ldquo;{t.quote}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-2">
              {"photo" in t && t.photo ? (
                <div
                  className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-full"
                  style={{ boxShadow: "0 0 0 2px rgba(201,169,110,0.3)" }}
                >
                  <Image src={t.photo} alt={t.name} fill sizes="44px" className="object-cover" />
                </div>
              ) : (
                <div
                  className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{
                    backgroundColor: avatarColors[i % avatarColors.length],
                    boxShadow: "0 0 0 2px rgba(201,169,110,0.3)",
                  }}
                >
                  {initials(t.name)}
                </div>
              )}
              <div>
                <p className="text-sm font-bold text-white">{t.name}</p>
                <p className="text-xs text-zinc-500">{t.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pb-20" />
    </section>
  );
}
