import type { Metadata } from "next";
import Image from "next/image";

const SLUG = "dre-baldwin-work-on-your-game-pro-basketball-entrepreneur";
const CANONICAL = `https://www.gildre.com/blog/${SLUG}`;
const PUBLISHED = "2026-11-03";

export const metadata: Metadata = {
  alternates: { canonical: CANONICAL },
  title: "Dre Baldwin: From D3 Walk-On to Pro Athlete to Keynote Speaker — The Work on Your Game Framework | Gildre",
  description:
    "Dre Baldwin played pro basketball overseas for 10 years, built a YouTube channel in 2005 before the term 'content creator' existed, and turned $4.99 training programs into a keynote speaking career. Here is how he did it.",
  keywords: [
    "Dre Baldwin Work on Your Game",
    "pro basketball entrepreneur",
    "founder morning routine",
    "build email list audience",
    "professional speaking tips founders",
    "discipline standards systems framework",
    "Gildre founder community",
  ],
  openGraph: {
    title: "Dre Baldwin: From D3 Walk-On to Pro Athlete to Keynote Speaker",
    description:
      "Dre Baldwin played pro basketball overseas for 10 years and built a brand on YouTube before 'content creator' was a job title. His Work on Your Game framework applies directly to founders.",
    url: CANONICAL,
    siteName: "Gildre",
    type: "article",
    publishedTime: PUBLISHED,
    images: [
      {
        url: "https://www.gildre.com/images/blog/dre-baldwin-portrait.jpg",
        width: 1080,
        height: 1080,
        alt: "Dre Baldwin, founder of Work on Your Game",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dre Baldwin: From D3 Walk-On to Pro Athlete to Keynote Speaker",
    description:
      "10 years as a pro athlete, 20 years building an audience. Dre Baldwin's Work on Your Game framework applied to founders.",
  },
};

const faqItems = [
  {
    q: "Who is Dre Baldwin?",
    a: "Dre Baldwin is a former professional basketball player who played overseas for 10 years, including in Lithuania. He built a YouTube channel in 2005 and became one of the earliest content creators before that term existed. He now runs Work on Your Game, an execution framework for professionals built on strategy, standards, and systems, and speaks at companies and organizations globally.",
  },
  {
    q: "What is Work on Your Game?",
    a: "Work on Your Game is Dre Baldwin's execution framework built around three pillars: strategy, standards, and systems. It originated from the mental skills he developed as an athlete (discipline, confidence, mental toughness, and personal initiative) and has been applied to professional and business contexts. The brand includes books, programs, and keynote speaking engagements.",
  },
  {
    q: "How did Dre Baldwin start making money online?",
    a: "In 2009, after building a YouTube audience of basketball players, Dre started selling training programs for $4.99. The idea came directly from a YouTube comment suggesting he write down his workouts and let others follow them. He validated the price point by asking his audience in the comments, then launched the first program. This became the template: package knowledge, price it, and let your existing audience drive early sales.",
  },
  {
    q: "What is Dre Baldwin's morning routine?",
    a: "Dre wakes at 3:30 AM, drinks two liters of water with electrolytes, then trains (alternating between boxing gym sessions and running). After returning home, showering, and getting dressed, he is at his desk by 7:30 AM. His workday runs until around 5 PM. He keeps this schedule seven days a week, including weekends, because the body does not distinguish between a Tuesday and a Saturday.",
  },
  {
    q: "How do you explain complex topics simply?",
    a: "Dre's method has three components: understand the concept deeply yourself before trying to explain it to anyone else; rehearse the explanation internally many times before saying it out loud; and meet your audience where they are by using analogies drawn from what they already understand. He also emphasizes deconstruction: start from the desired outcome, work backwards to identify every prerequisite, then flip it into a forward-facing roadmap.",
  },
  {
    q: "What are Dre Baldwin's three rules for public speaking?",
    a: "First, prepare ahead of time. Professionals prepare before the situation occurs, not during it. Second, know your subject. Only speak on topics where you have direct experience. Third, care about the subject. Energy transfers to an audience. If you are indifferent to the topic, the audience will be too, regardless of your credentials.",
  },
  {
    q: "Why does Dre Baldwin say founders should build an email list?",
    a: "Dre missed roughly 100,000 email subscribers early in his career by relying entirely on YouTube. When YouTube changed its algorithm in 2015, his reach dropped dramatically. The lesson: any platform you do not own can change the rules on you at any time. An email list is a direct line to your audience that no algorithm controls. He calls this 'own your audience' and says it is the most important asset in any content-driven business.",
  },
  {
    q: "What advice does Dre Baldwin give early-stage founders?",
    a: "Build a list from day one. Own your audience rather than renting it from a platform. Beyond that, his broader advice is to establish consistent standards, not just a goal. Inconsistent inputs cannot produce long-term success. The morning routine, the practice reps, the preparation before a pitch: these are all expressions of the same thing. Do the same things the same way every time.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Dre Baldwin: From D3 Walk-On to Pro Athlete to Keynote Speaker — The Work on Your Game Framework",
  description:
    "Dre Baldwin played pro basketball overseas for 10 years, built a YouTube channel in 2005 before the term 'content creator' existed, and turned $4.99 training programs into a keynote speaking career.",
  image: "https://www.gildre.com/images/blog/dre-baldwin-portrait.jpg",
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { "@type": "Person", name: "Dre Baldwin", url: "https://www.dreallday.com" },
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
                Mindset
              </span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                {new Date(PUBLISHED).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} · Start to Scale Podcast
              </span>
            </div>
            <h1
              className="text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.1] text-white"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Dre Baldwin: From D3 Walk-On to Pro Athlete to Keynote Speaker and the Work on Your Game Framework
            </h1>
            <p className="mt-6 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              He played professional basketball overseas for 10 years. He put his first video on YouTube in 2005 before anyone called it content creation. He sold his first training program for $4.99 from a comment thread. Now he keynotes for corporations worldwide on the same framework he used to make himself into a professional athlete: strategy, standards, and systems.
            </p>

            {/* Author card */}
            <div
              className="mt-10 flex items-center gap-4 rounded-2xl p-5"
              style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,169,110,0.15)" }}
            >
              <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full" style={{ border: "2px solid rgba(201,169,110,0.3)" }}>
                <Image
                  src="/images/blog/dre-baldwin-portrait.jpg"
                  alt="Dre Baldwin"
                  fill
                  className="object-cover object-top"
                  sizes="64px"
                />
              </div>
              <div>
                <p className="font-bold text-white">Dre Baldwin</p>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Pro basketball veteran · Founder, Work on Your Game · Keynote speaker · Miami, FL
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hero photo */}
        <div className="mx-auto max-w-3xl px-6 -mt-4">
          <div className="overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
            <Image
              src="/images/blog/dre-baldwin-portrait.jpg"
              alt="Dre Baldwin, founder of Work on Your Game"
              width={1080}
              height={1080}
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
            Dre Baldwin did not come up through a D1 program with scouts in the stands. He walked on at Penn State Altoona, a Division III campus, and graduated in 2004 with a business degree and no obvious path into professional sports. He made the path himself. He got cut from teams multiple times before getting his first pro contract. He played overseas for a decade, mostly invisible to American sports fans. And in parallel, he was building something else.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            The seed was planted in college, where a network marketing meeting taught him more about entrepreneurship than his business degree did. He found Robert Kiyosaki. He read Rich Dad Poor Dad. He told himself that whenever sports ended, he would do something in business. What that looked like, he had no idea. He graduated before social media existed, before podcasting existed, before a person from their couch could build an audience and sell something to them by the next morning.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            Then YouTube launched. And Dre uploaded his first video in 2005.
          </p>

          {/* Section 1: YouTube and first product */}
          <h2
            className="mt-14 text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            The internet before anyone knew what to do with it
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            The early videos were not motivational. They were just Dre working out, filmed in real time, with a voice-over added in post to explain the drills. He was not talking to the camera. He was showing basketball players what he was doing and explaining why. By 2008, those videos had built an audience and Google had acquired YouTube, which meant content creators could now earn a share of ad revenue. Dre was early enough that this felt like a discovery.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            Then he read The 4-Hour Work Week by Tim Ferriss, which described how to package and sell a product online. He already had an audience. They had already been asking him for training programs, commenting to ask if he could design something custom for each of them. He kept saying no. Then one comment changed his thinking: "Since you work out every day, why don't you just write down what you do and let us follow that?"
          </p>

          <blockquote
            className="my-10 rounded-2xl p-8"
            style={{ backgroundColor: "rgba(201,169,110,0.07)", borderLeft: "3px solid #C9A96E" }}
          >
            <p className="text-base leading-relaxed text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
              "I said, I could do that, but I'm gonna charge for it. And in the YouTube comments, people said, yeah, we'll pay for it as long as it doesn't cost too much."
            </p>
            <p className="mt-3 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              Dre Baldwin on his first product launch
            </p>
          </blockquote>

          <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            His audience was 13 to 24-year-old aspiring athletes. They had almost no disposable income, but they could access $20. He priced the first program at $4.99, knowing that low enough friction would get them in the door, and that the first purchase would lead to a second and a third. He eventually created over 100 basketball programs. In 2009, Dre Baldwin officially became an entrepreneur.
          </p>

          {/* Office photo */}
          <div className="my-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
            <Image
              src="/images/blog/dre-baldwin-office.webp"
              alt="Dre Baldwin in his office surrounded by his books"
              width={900}
              height={1200}
              className="w-full object-cover object-top"
              style={{ maxHeight: "480px" }}
            />
          </div>

          {/* Section 2: 400 Mondays */}
          <h2
            className="text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            400 Mondays: how discipline became a brand
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            Around 2010, basketball players started asking Dre questions that had nothing to do with dribbling. How do you show up to the gym every single day? How do you play the same in games as you do in practice? You got cut from your high school team and kept going. How? These were not skill questions. They were mindset questions.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            Dre started answering them with a weekly video he called Monday Motivation. A two to three minute clip, filmed on a phone, talking about one concept: discipline, confidence, personal initiative, using setbacks as setups. He did it every Monday for 400 Mondays in a row. Eight years without missing a week.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            Three things happened. Athletes understood that mindset was as trainable as footwork. People who had never touched a basketball found the content and said it applied to their lives. And people told him he had a rare skill: the ability to make abstract concepts concrete. Discipline is not something you can hold in your hand. Dre could explain it in terms anyone could apply by tomorrow.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            That insight became Work on Your Game. Not basketball. Not motivation. The actual skill of taking something complex, breaking it down, and handing it back to someone in a form they can use.
          </p>

          {/* Section 3: How to explain complex things */}
          <h2
            className="mt-14 text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            How to explain anything to anyone
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            Dre has a specific method for explaining complex things simply, and it starts before you ever open your mouth.
          </p>

          {[
            {
              n: "01",
              title: "Understand it deeply yourself first",
              body: "You cannot explain what you do not actually understand. Dre rehearses concepts in his own mind hundreds of times before saying them out loud. He asks himself: if someone asked me that question, how would I answer it better than the person who actually answered it? That internal rehearsal means that when the words come out, they flow.",
            },
            {
              n: "02",
              title: "Use deconstruction",
              body: "Start from the desired outcome. Work backwards: what needs to be true for that? What needs to be true for that? Keep going until you reach the starting point. Then flip it into a forward roadmap. Dre calls this the roadmap in reverse. He applied it to his 3:30 AM wake-up (working backwards from when he needed to be at his job to figure out exactly what time to leave the house). He applies it to everything.",
            },
            {
              n: "03",
              title: "Meet your audience where they are",
              body: "Use analogies drawn from what your audience already knows, not from what you know. Draw the map from their territory to yours. This requires knowing a little about a lot of things, because you need to borrow from wherever understanding already lives in their world.",
            },
          ].map((item) => (
            <div
              key={item.n}
              className="mt-5 flex gap-5 rounded-2xl p-6"
              style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <span
                className="flex-shrink-0 text-xl font-bold"
                style={{ color: "#C9A96E", fontFamily: "var(--font-fraunces)" }}
              >
                {item.n}
              </span>
              <div>
                <p className="font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.52)" }}>
                  {item.body}
                </p>
              </div>
            </div>
          ))}

          {/* Section 4: Morning routine and standards */}
          <h2
            className="mt-14 text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            The 3:30 AM framework: standards over desires
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            Dre wakes up at 3:30 AM. It started in 2006 when he was between overseas contracts, working at a gym in Philadelphia. He needed to get to a basketball court that was 40 minutes away and be at his job 20 minutes in the other direction by 8 AM. He deconstructed the timeline backwards and landed at a 4 AM alarm. He kept the habit long after the job disappeared.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            Today: two liters of water, electrolytes, boxing gym or a run, home by 7:30, desk until 5 PM. Same on weekends. "Your body doesn't know it's Saturday." He gave himself an extra hour on weekends for a while, found it threw off his rhythm, and stopped. The schedule is the schedule.
          </p>

          <blockquote
            className="my-10 rounded-2xl p-8"
            style={{ backgroundColor: "rgba(201,169,110,0.07)", borderLeft: "3px solid #C9A96E" }}
          >
            <p className="text-base leading-relaxed text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
              "The standards that I hold myself to overpower the flesh-level desires to do what feels comfortable. Once you have your processes and standards in place, it's easier to follow them than it is to not follow them. It becomes habit."
            </p>
            <p className="mt-3 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              Dre Baldwin
            </p>
          </blockquote>

          <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            He is clear about what this is not. It is not military discipline or forcing yourself through misery. It is building a process that becomes easier to follow than to break. The consistency is the point. "Nobody's gonna create long-term success with inconsistent inputs."
          </p>

          {/* Outdoor photo */}
          <div className="my-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
            <Image
              src="/images/blog/dre-baldwin-outdoor.jpeg"
              alt="Dre Baldwin"
              width={800}
              height={1000}
              className="w-full object-cover object-top"
              style={{ maxHeight: "460px" }}
            />
          </div>

          {/* Section 5: Public speaking */}
          <h2
            className="text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Three things that separate professional speakers from everyone else
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            Dre did not know professional speaking was an industry when he stumbled into it. He knew he was good at explaining things on camera. The keynote career came later, as the Work on Your Game brand grew. His advice for anyone who has to speak in front of an audience, whether that is a pitch to investors or a stage at a conference, comes down to three things.
          </p>

          <ol className="mt-6 flex flex-col gap-4">
            {[
              {
                n: "01",
                title: "Prepare before the moment arrives",
                body: "A professional salesperson rehearses before the call. A professional athlete trains before the game. A professional speaker practices before the stage. No one who is serious about an outcome shows up and wings it. Dre cites the Shark Tank founders who went back and watched every episode in the show's history, wrote down every question ever asked, and rehearsed answers to all of them. That is preparation.",
              },
              {
                n: "02",
                title: "Only speak on what you actually know",
                body: "Do not put yourself forward as an authority on something you have not lived. You will get exposed. Speak on things where your knowledge comes from direct experience, not research. The credibility is in the lived detail.",
              },
              {
                n: "03",
                title: "Only speak on what you actually care about",
                body: "Energy transfers. If you are indifferent to the subject, the room will feel it regardless of your preparation or credentials. Dre worked at McDonald's and could give a speech about it, but he should not, because that energy is not there. Find the person who loves the subject and you will always get a better talk.",
              },
            ].map((item) => (
              <li
                key={item.n}
                className="flex gap-4 rounded-xl p-5"
                style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <span
                  className="flex-shrink-0 text-xl font-bold"
                  style={{ color: "#C9A96E", fontFamily: "var(--font-fraunces)" }}
                >
                  {item.n}
                </span>
                <div>
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          {/* Section 6: Build a list */}
          <h2
            className="mt-14 text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            The one thing Dre would tell his 2009 self
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            Build a list. Own your audience.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            Dre estimates he missed 100,000 email subscribers in the early years of his YouTube career by not collecting contact information from his audience. He used YouTube as his lead generator and it worked until 2015, when the algorithm changed and his reach dropped. The platform had never belonged to him. When YouTube changed the rules, there was nothing to do except adapt.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            An email list is not subject to that. It is a direct line between you and the people who chose to hear from you. No algorithm, no platform risk, no middleman. Dre says this to anyone who will listen and acknowledges that many of them will not take it seriously until they experience their own version of an algorithm change.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            "The asset of the business is your access to people who are interested in you who you can reach directly without having to go through a middleman such as Facebook, YouTube, or Instagram."
          </p>

          {/* Quick Answer / GEO block */}
          <div
            className="mt-14 rounded-2xl p-8"
            style={{ backgroundColor: "rgba(201,169,110,0.08)", border: "1px solid rgba(201,169,110,0.25)" }}
          >
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A96E" }}>
              Quick Answer
            </p>
            <p className="mt-3 text-base font-semibold leading-relaxed text-white">
              Dre Baldwin's Work on Your Game framework for founders: build standards that make consistent execution easier than inconsistency, own your audience rather than renting it from a platform, and prepare for every high-stakes moment before it arrives.
            </p>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              The $4.99 training program, the 400-Monday video streak, and the 3:30 AM alarm are all expressions of the same principle: strategy, standards, and systems executed without exception. That is what turned a D3 walk-on into a 10-year pro and a keynote speaker for global organizations.
            </p>
          </div>

          {/* FAQ */}
          <h2
            className="mt-14 text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="mt-6 flex flex-col gap-4">
            {faqItems.map((item, i) => (
              <details
                key={i}
                className="group rounded-xl"
                style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-5 text-sm font-semibold text-white">
                  {item.q}
                  <span
                    className="flex-shrink-0 text-lg leading-none transition-transform group-open:rotate-45"
                    style={{ color: "#C9A96E" }}
                  >
                    +
                  </span>
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>

        </article>

        {/* CTA */}
        <section
          className="px-6 py-20 text-center"
          style={{ background: "linear-gradient(160deg, #1C2744 0%, #080e1a 100%)" }}
        >
          <div className="mx-auto max-w-2xl">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
              Gildre Founder Community
            </p>
            <h2
              className="mt-4 text-[2rem] font-bold leading-tight text-white sm:text-[2.75rem]"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Build alongside people who are working on their game too.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              250+ vetted founders across 74 cities. Stage-matched peers, operator mentors, and weekly 1:1 introductions. Starting at $59 per month, no equity taken.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://tally.so/r/VLERVa"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-8 py-3.5 text-sm font-bold transition-all hover:opacity-90"
                style={{
                  backgroundColor: "#C9A96E",
                  color: "#1C2744",
                  boxShadow: "0 0 24px rgba(201,169,110,0.35)",
                }}
              >
                Apply Now
              </a>
              <a
                href="/membership"
                className="text-sm underline underline-offset-4 transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Compare membership tiers
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
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
            <a href="/blog" className="underline underline-offset-2 hover:text-zinc-400 transition-colors">
              More Articles
            </a>
          </p>
        </div>

      </div>
    </>
  );
}
