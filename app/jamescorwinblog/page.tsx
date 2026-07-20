import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "James Corwin: How a Montana Wildlife Artist Built Corwin Galleries into a Thriving Business | Gildre",
  description:
    "Wildlife artist James Corwin on going from $20 miniatures at farmers markets to owning Corwin Galleries — a creative business built on art, grit, and no conventional blueprint.",
  keywords: ["James Corwin", "Corwin Galleries", "wildlife artist", "creative entrepreneur", "Montana founder", "Gildre podcast"],
  openGraph: {
    title: "James Corwin: How a Montana Wildlife Artist Built Corwin Galleries into a Thriving Business",
    description:
      "From composing music to selling miniature paintings at farmers markets to owning galleries — wildlife artist James Corwin on building a business from pure creativity.",
    type: "article",
    images: [{ url: "https://www.gildre.com/images/james-corwin-headshot.webp", width: 512, height: 512, alt: "James Corwin, wildlife artist and founder of Corwin Galleries" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "James Corwin: How a Montana Wildlife Artist Built Corwin Galleries into a Thriving Business",
    description: "From $20 miniatures at farmers markets to owning galleries — James Corwin on building a creative business without a blueprint.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "James Corwin: How a Montana Wildlife Artist Built Corwin Galleries into a Thriving Business",
  description:
    "James Corwin — wildlife painter, gallery owner, and entrepreneur — shares how growing up in Montana, a surprise art scholarship, and a life-changing African safari shaped his path from selling $20 miniatures to running Corwin Galleries.",
  image: "https://www.gildre.com/images/james-corwin-headshot.webp",
  datePublished: "2024-01-15",
  author: {
    "@type": "Organization",
    name: "Gildre",
    url: "https://www.gildre.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Gildre",
    logo: {
      "@type": "ImageObject",
      url: "https://www.gildre.com/images/gildre-logo.png",
    },
  },
  mainEntityOfPage: "https://www.gildre.com/jamescorwinblog",
  about: [
    { "@type": "Person", name: "James Corwin", jobTitle: "Wildlife Artist & Gallery Owner", worksFor: { "@type": "Organization", name: "Corwin Galleries" } },
    { "@type": "Organization", name: "Corwin Galleries", url: "https://www.jamescorwin.com" },
  ],
  keywords: "James Corwin, Corwin Galleries, Montana wildlife artist, wildlife painting, art entrepreneur, art business, Gildre Spotlight, founder story, creative entrepreneur",
  locationCreated: { "@type": "Place", name: "Montana, USA" },
};

export default function JamesCorwinBlog() {
  return (
    <div style={{ backgroundColor: "#0f1524", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-6 pb-16 pt-36"
        style={{ background: "linear-gradient(160deg, #080e1a 0%, #1C2744 55%, #0a1020 100%)" }}
      >
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #C9A96E 0%, transparent 65%)" }}
        />
        <div className="relative mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="rounded-full px-3 py-1 text-[0.6rem] font-bold uppercase tracking-widest"
              style={{ backgroundColor: "rgba(201,169,110,0.15)", color: "#C9A96E" }}
            >
              Gildre Spotlight
            </span>
            <span className="text-[0.65rem]" style={{ color: "rgba(255,255,255,0.35)" }}>Podcast Recap · Art & Entrepreneurship</span>
          </div>
          <h1
            className="text-[clamp(1.9rem,4.5vw,3.25rem)] font-bold leading-[1.1] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            James Corwin: How a Montana Wildlife Artist Turned{" "}
            <span style={{ color: "#C9A96E" }}>Creativity Into a Gallery Empire</span>
          </h1>
          <p className="mt-5 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            From selling $20 miniature paintings at Montana farmers markets to owning Corwin Galleries and mastering Facebook ads — wildlife artist and entrepreneur James Corwin joined the Gildre Spotlight Podcast to share the unconventional business journey behind one of the art world's most compelling founder stories.
          </p>

          {/* Author row */}
          <div className="mt-8 flex flex-wrap items-center gap-6 pb-8" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
                <Image src="/images/gildre-logo.png" alt="Gildre" fill className="object-contain brightness-0 invert" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Gildre</p>
                <p className="text-[0.65rem]" style={{ color: "rgba(255,255,255,0.4)" }}>Gildre Spotlight Podcast</p>
              </div>
            </div>
            <div className="flex gap-5 text-[0.65rem]" style={{ color: "rgba(255,255,255,0.35)" }}>
              <span>10 min read</span>
              <span>·</span>
              <span>Montana · Wildlife Art · Creative Business</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Body ─────────────────────────────────────────────────────── */}
      <article className="mx-auto max-w-3xl px-6 py-16">

        {/* Headshot */}
        <div className="my-2 flex flex-col items-center">
          <div className="overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)", maxWidth: "420px", width: "100%" }}>
            <Image
              src="/images/james-corwin-headshot.webp"
              alt="James Corwin, wildlife artist and founder of Corwin Galleries"
              width={960}
              height={1200}
              className="w-full"
              style={{ display: "block" }}
            />
            <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
              <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>James Corwin — wildlife artist and founder of Corwin Galleries</p>
            </div>
          </div>
        </div>

        <p className="mt-10 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
          Growing up amidst the breathtaking landscapes of Montana, James Corwin found himself constantly lost in the beauty that surrounded him. Today, as the founder of Corwin Galleries and a nationally recognized wildlife painter, that early connection to the natural world still shapes every brushstroke — and every business decision.
        </p>

        <Section title="From Montana's Landscapes to an Unexpected Path" />
        <Body>
          Growing up in Montana, I consider myself lucky these days if I can soak in that beauty even once a year. The memories of weekends spent in nature's embrace, just a short drive from home, remain vivid. Montana's great outdoors — with its uncrowded trails and abundance of wildlife — has always been a source of tranquility and inspiration for me.
        </Body>
        <Body>
          As a kid, I never would have imagined the direction my life would take. There was a time when music filled my world, and I dreamt of composing scores for films. I spent my teenage years notating melodies and harmonies, with aspirations of attending music schools.
        </Body>
        <Body>
          However, life has its twists and turns. In my senior year of high school — quite unexpectedly — an art class spun my path in a new direction. Little did I know that the encouragement from my art teacher to apply for an art scholarship would so decisively shape my future. Winning the scholarship set a condition in stone: pursue an art degree. Thus, my focus shifted from music composition to visual arts.
        </Body>

        <Section title="Crafting a Career, One Miniature Painting at a Time" />
        <Body>
          I've always harbored the entrepreneurial spirit, perhaps inherited from my parents who both ran their own businesses. This independence and drive found a unique outlet during the summer months as I navigated through my college years. I found joy in setting up stalls at local farmers markets and festivals, selling miniature paintings — some as small as a few inches across — each perched on its own little easel.
        </Body>
        <Quote>
          "During the week, I would paint hundreds of them and then put them all out on display, selling each little creation for about $20."
        </Quote>
        <Body>
          This endeavor not only provided a summer income but also sharpened my skills in creating intricate details — a hallmark of the larger, more detailed paintings I do now.
        </Body>

        {/* Gallery photo */}
        <div className="my-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="/images/james-corwin-gallery.webp"
            alt="James Corwin holding a wildlife painting in Corwin Galleries"
            width={800}
            height={900}
            className="w-full object-cover"
            style={{ maxHeight: "560px", objectPosition: "center" }}
          />
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>James with one of his wildlife paintings at Corwin Galleries</p>
          </div>
        </div>

        <Section title="The Zen of Painting" />
        <Body>
          Painting for me has become a meditative process. After a decade, it's become less about conscious thought and more about effortless creation. I dedicate my entire focus to a single piece, working on one painting at a time. This concentrated effort allows me to complete even the most complex paintings efficiently and imbue them with emotion and a narrative essence.
        </Body>
        <Body>
          Choosing subjects for my art is a balance between what inspires me and what resonates with potential buyers. I seek to capture an emotion or a unique perspective in each piece, carefully constructing the story much like a filmmaker would. Yet, I also tend toward pragmatic creativity — painting compelling pieces that I know are marketable, like bisons in a snowy landscape, to sustain my artistic journey.
        </Body>

        <Section title="Building a Business, Building a Legacy" />
        <Body>
          By my mid-twenties, my career had grown beyond my home studio in Montana. As demand for my art increased, so did the need for space and assistance. I expanded my operations, hiring employees and even opening up gallery spaces — my beloved Corwin Galleries. These expansions into the art world not only allowed me to grow as a businessperson but also sparked a dedicated mission to represent other talented artists.
        </Body>
        <Body>
          My artistic focus took a turn towards wildlife after a life-changing safari in Africa. The trip not only inspired a new genre in my art but also introduced me to new audiences through safari clubs and international exhibitions.
        </Body>

        {/* Class photo */}
        <div className="my-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="/images/james-corwin-class.webp"
            alt="James Corwin teaching a painting class"
            width={800}
            height={534}
            className="w-full object-cover"
          />
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>James teaching one of his wildlife painting workshops</p>
          </div>
        </div>

        <Section title="Embracing the Digital World" />
        <Body>
          Grasping the importance of an online presence, I delved into the world of digital marketing. Through self-education and perseverance, I mastered Facebook ads and e-commerce, honing my skills to augment art sales through online platforms — from Amazon to my own website. For any creative entrepreneur, the lesson is clear: your audience is online, and meeting them there is no longer optional.
        </Body>

        <Section title="Insights and Advice for Aspiring Creative Entrepreneurs" />
        <Body>
          To all aspiring artists and creative entrepreneurs out there: success depends on taking chances, investing in growth, and continually learning. Surround yourself with people more knowledgeable than yourself and focus on your strengths. Art is not just a path of expression but also a viable business venture — as long as you're willing to approach it with courage and a forward-thinking mindset.
        </Body>
        <Body>
          For those embarking on this journey, remember to put yourself out there. Visibility is key. Utilize marketing, reach out to bloggers, arrange local events, and engage with your community. Fuel your growth through education and be open to new strategies that may elevate your work.
        </Body>

        <Section title="Conclusion: Creativity Knows No Bounds" />
        <Body>
          The journey from the idyllic landscapes of Montana to the vibrant wildlife of Africa — and from a fledgling artist to a business-savvy gallery owner — has been a remarkable adventure. Beyond the canvas and brush strokes, it is the stories and emotions conveyed that resonate with admirers.
        </Body>
        <Body>
          For all those curious to see where this artistic journey has led, James's work can be explored at{" "}
          <a
            href="https://www.jamescorwin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold transition-colors hover:text-[#C9A96E]"
            style={{ color: "#C9A96E" }}
          >
            jamescorwin.com
          </a>
          . And should any fellow artists need guidance, his art business course is just an inquiry away.
        </Body>
        <Quote>
          "Never get rich doing art?" Well, I beg to differ.
        </Quote>
        <Body>
          Journeying through the realm of art has taught James that creativity knows no bounds — and with determination and a business-minded approach, success is not just a possibility. It's an inevitability.
        </Body>

        {/* CTA block */}
        <div
          className="mt-16 rounded-2xl p-8 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(201,169,110,0.08) 0%, rgba(28,39,68,0.6) 100%)",
            border: "1px solid rgba(201,169,110,0.2)",
          }}
        >
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
            Gildre Community
          </p>
          <h3
            className="mt-3 text-xl font-bold text-white sm:text-2xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Meet Founders Like James at Gildre
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Gildre connects founders across every industry — from tech and finance to creative businesses — with the peers, mentors, and resources to build something that lasts.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://gildre.circle.so/checkout/gildre-silver-membership"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-7 py-3 text-sm font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
            >
              Join Gildre →
            </a>
            <a
              href="https://linktr.ee/starttoscale"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-7 py-3 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              Listen to the Full Episode
            </a>
          </div>
        </div>

        {/* External links */}
        <div className="mt-10 flex flex-wrap gap-4 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
          <a
            href="https://www.jamescorwin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C9A96E] transition-colors"
          >
            Explore James's artwork at jamescorwin.com →
          </a>
          <a
            href="https://www.corwingalleries.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C9A96E] transition-colors"
          >
            Visit Corwin Galleries →
          </a>
        </div>

        {/* Back link */}
        <div className="mt-12 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <Link href="/content" className="text-sm transition-colors hover:text-[#C9A96E]" style={{ color: "rgba(255,255,255,0.4)" }}>
            ← Back to Founder Content
          </Link>
        </div>
      </article>

      {/* ── Footer ───────────────────────────────────────────────────── */}
      <div
        className="px-6 py-8 text-center text-[0.7rem] text-zinc-600"
        style={{ backgroundColor: "#080e1a", borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <p>
          &copy; {new Date().getFullYear()} Gildre, LLC. All rights reserved.{" "}
          <a href="/privacy" className="underline underline-offset-2 hover:text-zinc-400 transition-colors">
            Privacy Policy
          </a>
          {" · "}
          <a href="/" className="underline underline-offset-2 hover:text-zinc-400 transition-colors">
            Back to Gildre.com
          </a>
        </p>
      </div>
    </div>
  );
}

function Section({ title }: { title: string }) {
  return (
    <h2
      className="mt-12 mb-4 text-xl font-bold text-white sm:text-2xl"
      style={{ fontFamily: "var(--font-fraunces)" }}
    >
      {title}
    </h2>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
      {children}
    </p>
  );
}

function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote
      className="my-8 rounded-xl px-7 py-6 text-base italic leading-relaxed"
      style={{
        borderLeft: "3px solid #C9A96E",
        backgroundColor: "rgba(201,169,110,0.06)",
        color: "rgba(255,255,255,0.75)",
      }}
    >
      {children}
    </blockquote>
  );
}
