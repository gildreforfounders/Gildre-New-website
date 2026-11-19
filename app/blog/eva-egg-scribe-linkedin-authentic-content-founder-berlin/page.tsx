import type { Metadata } from "next";
import Image from "next/image";

const SLUG = "eva-egg-scribe-linkedin-authentic-content-founder-berlin";
const CANONICAL = `https://www.gildre.com/blog/${SLUG}`;
const PUBLISHED = "2026-11-19";

export const metadata: Metadata = {
  alternates: { canonical: CANONICAL },
  title: "Eva Egg: Why Authentic Content Wins on LinkedIn and How Scribe Is Making It Easier | Gildre",
  description:
    "Eva Egg started posting baking recipes on Instagram at 15, built a marketing agency out of that early creator knowledge, and co-founded Scribe to help professionals post authentic LinkedIn content that actually performs. Here is what she learned along the way.",
  keywords: [
    "Eva Egg Scribe",
    "LinkedIn authentic content",
    "founder content strategy",
    "breathwork founder resilience",
    "Berlin startup founder",
    "community led growth startup",
    "Gildre founder community",
    "how to grow on LinkedIn",
    "authentic personal brand LinkedIn",
  ],
  openGraph: {
    title: "Eva Egg: Why Authentic Content Wins on LinkedIn and How Scribe Is Making It Easier",
    description:
      "Eva Egg started as a creator at 15, built a marketing agency, and co-founded Scribe to fix a broken pattern: 1% of LinkedIn users post, 99% consume, and most of what gets posted is templated noise. Here is her story.",
    url: CANONICAL,
    siteName: "Gildre",
    type: "article",
    publishedTime: PUBLISHED,
    images: [
      {
        url: "https://www.gildre.com/images/blog/eva-egg-portrait.jpeg",
        width: 538,
        height: 672,
        alt: "Eva Egg, co-founder of Scribe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eva Egg: Why Authentic Content Wins on LinkedIn and How Scribe Is Making It Easier",
    description:
      "From baking recipes at 15 to co-founding a LinkedIn content startup in Berlin. Eva Egg on authentic content, breathwork, and building Scribe.",
  },
};

const faqItems = [
  {
    q: "Who is Eva Egg?",
    a: "Eva Egg is a Berlin-based serial entrepreneur and co-founder of Scribe, a LinkedIn content platform that helps professionals create authentic content using AI. She started her entrepreneurial journey as a creator on Instagram at age 15, built a marketing agency from that experience, and has since founded multiple companies including Notice and Connectat Agency. She is also a certified breathwork teacher.",
  },
  {
    q: "What is Scribe and how does it work?",
    a: "Scribe is an AI-powered platform that helps professionals create authentic LinkedIn content. Users can submit voice memos, upload podcast recordings, or drop in raw thoughts. Scribe analyzes the LinkedIn algorithm, the user's profile, and their unique knowledge to turn that input into content that performs, without replacing the person's voice or making everything sound templated. The goal is co-creation, not ghostwriting.",
  },
  {
    q: "How did Eva Egg go from 0 to 10k MRR with Scribe?",
    a: "Scribe reached 10k MRR in two days after launching. The strategy was community-led: they built an MVP, gave it to 10 people, let those 10 bring in 10 more, iterated with the beta community, and launched only when they had an active user base already talking about the product. By launch day, the community had been built in advance. They used a WhatsApp group with users as their primary go-to-market channel.",
  },
  {
    q: "What is Eva Egg's morning routine?",
    a: "Eva starts with Qigong, a practice she describes as working with energy. She spends about 30 minutes clearing old energy and setting an intention for the day. She also practices breathwork and cold plunging. Her ideal day includes a slow morning, a 6-hour block of uninterrupted deep work, and a few team sessions in the afternoon. She avoids early call stacks when possible.",
  },
  {
    q: "What is the difference between breathwork and meditation?",
    a: "Eva teaches breathwork and describes it as an easier entry point than traditional seated meditation, especially for people who struggle with racing thoughts. In breathwork, the breath guides you into a state automatically, whereas meditation requires you to quiet the mind through willpower alone. She compares Wim Hof breathing (energizing, creates heat) with calming breathwork (reduces stress, creates security) and uses both depending on what she needs in a given moment.",
  },
  {
    q: "How does Eva Egg run her team at Scribe?",
    a: "Scribe has about 30 people but runs with a flat structure and no mid-level management. The team holds three recurring meetings: Mondays are data-driven (every department fills in numbers in a shared Notion doc before the call), Wednesdays are open mic (anyone can claim the meeting to present a problem and get group brainstorming), and Fridays are cultural (memes, games, a tradition called Make a Meme). There are no formal OKRs. Instead, the team works from a 10-million-euro endpoint and reverse-engineers monthly hypotheses from that goal.",
  },
  {
    q: "What advice does Eva Egg give early-stage founders?",
    a: "Two things. First, know your why at a psychological level. Understand what motivates you and whether that motivation will hold under pressure. Second, do not fall in love with your solution. Be brutally honest with yourself about the problem you are solving. If the solution feels obvious, you probably have not gone deep enough into the problem. Eva also emphasizes not bullshitting yourself: validate that you are actually solving something before you scale anything.",
  },
  {
    q: "Why does Eva Egg believe generic LinkedIn content will stop working?",
    a: "Because AI makes generic content trivially cheap to produce, which means the signal-to-noise ratio will collapse. Eva's view is that in a world where anyone can generate templated posts in seconds, the only thing that stands out is genuine opinion, lived experience, and intellectual honesty. Scribe is built on this premise: it helps people surface and express what they actually think, rather than imitate what appears to be working for everyone else.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Eva Egg: Why Authentic Content Wins on LinkedIn and How Scribe Is Making It Easier",
  description:
    "Eva Egg started posting baking recipes on Instagram at 15, built a marketing agency out of that creator knowledge, and co-founded Scribe to help professionals post authentic LinkedIn content that actually performs.",
  image: "https://www.gildre.com/images/blog/eva-egg-portrait.jpeg",
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { "@type": "Person", name: "Eva Egg", url: "https://www.scribe.com" },
  publisher: {
    "@type": "Organization",
    name: "Gildre",
    logo: { "@type": "ImageObject", url: "https://www.gildre.com/images/gildre-logo.png" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function BlogPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div style={{ backgroundColor: "#0f1524", minHeight: "100vh" }}>

        {/* Hero */}
        <section
          className="relative overflow-hidden px-6 pb-16 pt-32"
          style={{ background: "linear-gradient(160deg, #080e1a 0%, #1C2744 55%, #0a1020 100%)" }}
        >
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-10"
            style={{ background: "radial-gradient(ellipse, #C9A96E 0%, transparent 65%)" }}
          />
          <div className="relative mx-auto max-w-3xl">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span
                className="rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-widest"
                style={{ backgroundColor: "rgba(201,169,110,0.12)", color: "#C9A96E", border: "1px solid rgba(201,169,110,0.25)" }}
              >
                Founder Story
              </span>
              <span
                className="rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-widest"
                style={{ backgroundColor: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.45)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                Content Strategy
              </span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                {new Date(PUBLISHED).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} · Start to Scale Podcast
              </span>
            </div>
            <h1
              className="text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.1] text-white"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Eva Egg: Why Authentic Content Wins on LinkedIn and How Scribe Is Making It Easier
            </h1>
            <p className="mt-6 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              She started sharing baking recipes on Instagram at 15 before the word creator existed. She built a marketing agency from what she learned. Then she co-founded Scribe, a platform built on a single observation: only 1% of LinkedIn users post, and most of what gets posted is noise. Here is how she is trying to change that.
            </p>

            {/* GEO Quick Answer */}
            <div
              className="mt-8 rounded-2xl p-6"
              style={{ backgroundColor: "rgba(201,169,110,0.07)", border: "1px solid rgba(201,169,110,0.2)" }}
            >
              <p className="text-[0.65rem] font-semibold uppercase tracking-widest" style={{ color: "#C9A96E" }}>
                Quick Answer
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white">
                Eva Egg is a Berlin-based serial entrepreneur and co-founder of Scribe, an AI-powered LinkedIn content tool. Scribe helps professionals create authentic, algorithm-aware content by processing voice memos, podcast recordings, and raw notes rather than applying generic templates. Eva reached 10k MRR in two days through a community-led beta launch, runs her 30-person team with a flat structure and hypothesis-based goals, and built her entire worldview on one principle: in a world where AI can generate any content, authentic perspective is the only thing that cannot be replicated.
              </p>
            </div>

            {/* Author card */}
            <div
              className="mt-10 flex items-center gap-4 rounded-2xl p-5"
              style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,169,110,0.15)" }}
            >
              <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full" style={{ border: "2px solid rgba(201,169,110,0.3)" }}>
                <Image
                  src="/images/blog/eva-egg-portrait.jpeg"
                  alt="Eva Egg"
                  fill
                  className="object-cover object-top"
                  sizes="64px"
                />
              </div>
              <div>
                <p className="font-bold text-white">Eva Egg</p>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Co-founder, Scribe · Multi-time founder · Breathwork teacher · Berlin, Germany
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hero photo */}
        <div className="mx-auto max-w-3xl px-6 -mt-4">
          <div className="overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
            <Image
              src="/images/blog/eva-egg-portrait.jpeg"
              alt="Eva Egg, co-founder of Scribe"
              width={538}
              height={672}
              className="w-full object-cover object-top"
              style={{ maxHeight: "500px" }}
              priority
            />
          </div>
        </div>

        {/* Body */}
        <article className="mx-auto max-w-3xl px-6 py-16">

          {/* Intro */}
          <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            Eva Egg did not set out to build a startup. She was 15, in Germany, baking things she liked and posting the recipes on Instagram because it seemed like a natural thing to do. No one called what she was doing content creation, because that term did not really exist yet. She gained followers. Brands reached out. And somewhere in the gap between sharing what she loved and realizing it had an audience, she learned something most marketing professionals spend years trying to figure out: what actually makes people stop and pay attention.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            By 18, she had stepped back from the creator world because it had started to consume her. But the knowledge stayed. She carried it into a marketing agency, then a jewelry brand started on a Clubhouse call, then several more companies, and now Scribe, a platform she co-founded in Berlin to help professionals post authentic LinkedIn content. The irony she lives with is that her whole career has been built on understanding attention, while her starting lesson was what happens when you get too much of it too young.
          </p>

          {/* Section 1: Breathwork and founder resilience */}
          <h2
            className="mt-14 text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Breathwork, Qigong, and the 90% of yourself you are not using
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            Eva is a certified breathwork teacher. She does Qigong every morning for about 30 minutes. These are not habits she picked up casually. They are part of a deliberate framework she built after a difficult exit from a previous company where she realized her ego had become too attached to the outcome, and that this attachment was causing her to make worse decisions.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            Her view on consciousness is straightforward: only about 10% of what you do is driven by conscious thought. The other 90% is operating from your unconscious mind. If you do not understand what is running underneath, you do not actually understand your decisions. Breathwork is her tool for going one level deeper.
          </p>
          <blockquote
            className="my-10 rounded-2xl p-8"
            style={{ backgroundColor: "rgba(201,169,110,0.07)", borderLeft: "3px solid #C9A96E" }}
          >
            <p className="text-base leading-relaxed text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
              "Breathwork is easier because a lot of people find meditation really hard. With breathwork you get guided into a state where you cannot not feel it. You are basically getting high. So for people who really have difficulty with meditation, this is the easier beginning."
            </p>
            <p className="mt-3 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              Eva Egg
            </p>
          </blockquote>
          <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            Qigong specifically helps her manage energy between calls. When she is heading into a sales conversation or a difficult meeting, she uses it to clear the residue from whatever came before. She describes this as building an energy shield: a way to stay present in the next interaction instead of carrying the emotional charge of the last one. She also does ice baths, which she treats as a mindset practice more than a physical one. The body can handle five minutes in cold water. The only real variable is what your brain believes.
          </p>

          {/* Section 2: Creator to founder */}
          <h2
            className="mt-14 text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Starting at 15, stopping at 18, and what stayed
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            When Eva started posting on Instagram, there was no algorithm in the way most people understand it today. If you posted something, everyone on the platform saw it. Because fewer people were creating and fewer accounts existed, it was possible to gain 30,000 followers in three or four weeks just by showing up consistently with something real. She did exactly that, posting baking content and sports routines before she had any intention of building a business from it.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            By 18 she stopped. The experience of living for the picture, of organizing her life around what would photograph well, had started to cost her more than it gave back. She calls it "completely going into the creator world at a super young age," and she is clear-eyed about the tradeoff: she learned how content works and what kind of power you have when you share your life, but she also learned what it costs when that becomes the organizing principle of your day.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            What she kept from those years was not the following or the brand partnerships. It was the understanding that authentic, unpolished content outperforms produced content when the platform is not yet saturated. She would use this insight to build a marketing agency, then much later, Scribe.
          </p>

          {/* Cafe photo */}
          <div className="my-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
            <Image
              src="/images/blog/eva-egg-cafe.jpeg"
              alt="Eva Egg"
              width={903}
              height={1130}
              className="w-full object-cover object-top"
              style={{ maxHeight: "480px" }}
            />
          </div>

          {/* Section 3: First company, Clubhouse, the jewelry brand */}
          <h2
            className="text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            How a Clubhouse room became her first company
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            Eva's first real company started the way a lot of things started during the pandemic: impulsively, on a platform that no longer exists. She was in a Clubhouse room, talking to a stranger who made handmade jewelry. Eva had been wanting to build a Shopify store. The stranger said, let us start a business. Eva said yes.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            The company was called LimiNau. They made the jewelry by hand and priced it wrong. The margins made no sense, and they both knew it. But what Eva learned was that she could market things, that she understood how to build an audience and move product through one, and that the execution problem in LimiNau was not the marketing. It was the unit economics of handmade goods.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            She took that marketing insight and started an agency. The agency made sense in a way LimiNau did not: her skill (knowing how to build and convert an audience) was the product, and there were enough businesses that needed it. She kept learning, kept founding, kept iterating. Her honest assessment of her own trajectory is that she had no idea what she was doing at the start and figured things out as she went. She still does.
          </p>

          {/* Section 4: Scribe */}
          <h2
            className="mt-14 text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            The problem Scribe is solving: 1% post, 99% consume
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            The catalyst for Scribe was a specific frustration. Eva kept seeing the same people posting the same kinds of content on LinkedIn, and she kept thinking about all the people who had something worth saying but were not saying it. Her estimate: roughly 1% of LinkedIn users post, 99% consume. And among the 1% who do post, most are imitating what appears to work, which means the platform is filling up with templated content that nobody actually wants to read.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            The standard LinkedIn content tools solve for volume. They let you replicate what is already out there faster. Eva's view is that this is precisely the wrong direction, because the problem is not that people cannot produce content. The problem is that most people do not believe they can be themselves and still perform. They think they need to announce things, use specific post structures, signal status in particular ways. So they copy what they see, and what they see gets worse because of it.
          </p>
          <blockquote
            className="my-10 rounded-2xl p-8"
            style={{ backgroundColor: "rgba(201,169,110,0.07)", borderLeft: "3px solid #C9A96E" }}
          >
            <p className="text-base leading-relaxed text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
              "My goal is to make more people who actually have something to say loud. And to make sure they can do it in an authentic way. Because a lot of people believe they need to be in a certain way to start on LinkedIn. That means the people posting set the style, and the people starting copy it. But nobody wants to read it."
            </p>
            <p className="mt-3 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              Eva Egg on why she built Scribe
            </p>
          </blockquote>
          <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            Scribe works as a co-creation system. Users bring input: voice memos, podcast recordings, raw notes, transcript uploads. Scribe analyzes the LinkedIn algorithm, the user's profile, and their unique knowledge, then turns that raw material into content the person would actually write if they had more time and no blank-page anxiety. The platform does not replace the person's voice. That is the point. Eva is explicit that if Scribe were just doing the whole content for people, it would be part of the problem.
          </p>

          {/* Section 5: 0 to 10k MRR in 2 days */}
          <h2
            className="mt-14 text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            From zero to 10k MRR in two days
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            When Scribe launched, it hit 10k MRR in two days. Eva is straightforward about how: by the time they launched, they already had an active community of users who had been using the product for months and were talking about it without being asked to.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            The sequence was methodical. Build an MVP. Give it to 10 people. Those 10 bring 10 more. Those 10 bring 100. Iterate with that beta community. When you launch, you are not asking strangers to trust something unproven. You are opening the door to people who have already seen it work. Eva has a WhatsApp group with all Scribe users where they still talk directly to the product team, suggest features, and post content they made using the platform. The go-to-market was community and referral from the start, and it still is.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            She is also honest about what came next. The hardest moment was not getting to 10k. It was when the initial community ran out of referrals and they had to figure out a new acquisition channel from scratch. She does not have a tidy answer for how to solve that. What she offers instead is a principle: 10k MRR proves you are solving a real problem. If you cannot get to 10k, the problem is probably not the channel. It is the product.
          </p>

          {/* Section 6: How the team runs */}
          <h2
            className="mt-14 text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Three meetings, no OKRs, and a 10-million-euro endpoint
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            Scribe has around 30 people and runs with a structure that Eva describes as deliberately flat. She tried adding a mid-management layer and found it killed productivity. For now, the core team of about nine people owns something, and everyone operates with direct access to the top.
          </p>

          {/* Three meetings grid */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                day: "Monday",
                label: "Data",
                body: "Every department fills in their numbers in a shared Notion doc before the call. No surprises. Everyone sees the whole picture going in.",
              },
              {
                day: "Wednesday",
                label: "Open Mic",
                body: "Anyone can claim the meeting. Present a problem, pick who should be in the room, and get a live group brainstorm. No standing agenda.",
              },
              {
                day: "Friday",
                label: "Culture",
                body: "Memes, games, and a team tradition called Make a Meme. No work. The whole team shows up.",
              },
            ].map((m) => (
              <div
                key={m.day}
                className="rounded-2xl p-6"
                style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <p className="text-[0.65rem] font-semibold uppercase tracking-widest" style={{ color: "#C9A96E" }}>
                  {m.day}
                </p>
                <p className="mt-1 text-lg font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
                  {m.label}
                </p>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {m.body}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            Instead of OKRs, Scribe runs on what Eva calls hypothesis-based goals. They mapped out what the company would look like at 10 million euros in revenue: headcount, customer mix, product state, everything. Then they reverse-engineered the path back to now. Each month the team sets hypotheses rather than targets. What do we need to test this month to stay on the road to that endpoint? A wrong hypothesis is not a failure. It is data. The company culture is explicitly built around being okay with wrong answers, as long as you understand what you learned.
          </p>

          {/* Section 7: Advice */}
          <h2
            className="mt-14 text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            What Eva tells early-stage founders
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            Two things, and she is specific about both.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            First: know your why at a psychological level. Not the surface version. Understand why you are actually doing this. Are you trying to prove something to someone? Are you running toward something or away from something? That awareness does not stop you from building, but it protects you from certain bad decisions, particularly the ones driven by fear or ego that you dress up as strategy.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            Second: do not fall in love with your solution. Be brutally honest with yourself about whether you have actually understood the problem. Eva's heuristic is counterintuitive: if the solution feels obvious, that is usually a sign you have not gone deep enough. The obvious solution is what everyone else has already tried or will try. The real insight lives one or two levels below the first framing.
          </p>
          <blockquote
            className="my-10 rounded-2xl p-8"
            style={{ backgroundColor: "rgba(201,169,110,0.07)", borderLeft: "3px solid #C9A96E" }}
          >
            <p className="text-base leading-relaxed text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
              "Being successful is not having a lot of money or a lot of employees. It is being able to appreciate how far you have come and enjoying every day. There is no point when you become successful. It is a feeling you start to have on an everyday basis, and it is not based on specific milestones."
            </p>
            <p className="mt-3 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              Eva Egg
            </p>
          </blockquote>
          <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            Her last piece of advice applies whether you have been at it for two months or ten years: never lose the fun. Resilience is the most important variable in whether a founder makes it. And the only thing that sustains resilience over the long term is actually enjoying the process. If you are not enjoying what you are doing, that is not a minor inconvenience. It is a warning sign about whether you will still be standing when it matters.
          </p>

          {/* FAQ */}
          <div className="mt-20">
            <h2
              className="text-2xl font-bold text-white sm:text-3xl"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Frequently Asked Questions
            </h2>
            <div className="mt-8 flex flex-col gap-6">
              {faqItems.map((item) => (
                <div
                  key={item.q}
                  className="rounded-2xl p-6"
                  style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <h3 className="font-bold text-white">{item.q}</h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div
            className="mt-20 rounded-2xl p-10 text-center"
            style={{ background: "linear-gradient(135deg, rgba(201,169,110,0.1) 0%, rgba(28,39,68,0.4) 100%)", border: "1px solid rgba(201,169,110,0.2)" }}
          >
            <p className="text-[0.65rem] font-semibold uppercase tracking-widest" style={{ color: "#C9A96E" }}>
              Gildre Founder Community
            </p>
            <h2
              className="mt-3 text-2xl font-bold text-white sm:text-3xl"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Build with founders who are figuring it out too
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              Eva built Scribe with a community around the product before it launched. Gildre exists for the same reason: the right peers make a harder path shorter.
            </p>
            <a
              href="/membership"
              className="mt-8 inline-block rounded-full px-8 py-3.5 text-sm font-bold transition-all hover:opacity-90"
              style={{ backgroundColor: "#C9A96E", color: "#1C2744", boxShadow: "0 0 24px rgba(201,169,110,0.35)" }}
            >
              See Membership Options
            </a>
          </div>
        </article>
      </div>
    </>
  );
}
