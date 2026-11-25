import type { Metadata } from "next";
import Image from "next/image";

const SLUG = "adina-maynard-cadywampus-brain-game-nurse-founder";
const CANONICAL = `https://www.gildre.com/blog/${SLUG}`;
const PUBLISHED = "2026-11-26";

export const metadata: Metadata = {
  alternates: { canonical: CANONICAL },
  title: "Adina Maynard: From 15 Years as an Oncology Nurse to Founding Cadywampus, a Brain Game Built to Prevent Dementia | Gildre",
  description:
    "Adina Maynard spent 15 years as a travel oncology nurse at City of Hope, Duke, and the NIH before founding Cadywampus, a mobile brain game she invented in her head to fight cognitive decline. Her mother has dementia. Her grandmother had it. And Adina carries an APOE marker that makes her 30% more likely to develop it herself.",
  keywords: [
    "Adina Maynard Cadywampus",
    "brain game cognitive health",
    "dementia prevention app",
    "nurse turned founder",
    "mobile game brain health",
    "APOE dementia risk",
    "productive play",
    "active thinking game",
    "Gildre founder community",
  ],
  openGraph: {
    title: "Adina Maynard: From Oncology Nurse to Founding Cadywampus, a Brain Game Built to Fight Dementia",
    description:
      "15 years as a travel oncology nurse. A mother with dementia. An APOE marker that shows she's at risk herself. Adina Maynard built Cadywampus because nobody else was building the brain game she needed.",
    url: CANONICAL,
    siteName: "Gildre",
    type: "article",
    publishedTime: PUBLISHED,
    images: [
      {
        url: "https://www.gildre.com/images/blog/adina-maynard-portrait.jpeg",
        width: 420,
        height: 526,
        alt: "Adina Maynard, founder of Cadywampus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adina Maynard: From Oncology Nurse to Founding Cadywampus",
    description:
      "15 years as a travel oncology nurse. A mother with dementia. Adina Maynard built the brain game she couldn't find anywhere else.",
  },
};

const faqItems = [
  {
    q: "Who is Adina Maynard?",
    a: "Adina Maynard is a registered nurse with a BSN and oncology certification (OCN) who spent 15 years as an oncology nurse, including travel assignments at City of Hope, Seattle Cancer Care Alliance, Duke, and the NIH. She is the founder of Cadywampus, a mobile brain game combining word game, puzzle, and strategy mechanics designed to support cognitive health and dementia prevention.",
  },
  {
    q: "What is Cadywampus?",
    a: "Cadywampus is a mobile brain game available on the App Store and Google Play that combines word game, puzzle, and strategy elements. It is designed for 'active thinking' — it cannot be played passively while watching TV or scrolling. Adina Maynard calls it 'productive play': fun that feels good and does good. The game is built around the research showing that keeping your brain engaged with new challenges can help stave off dementia and cognitive decline.",
  },
  {
    q: "Why did Adina Maynard build Cadywampus?",
    a: "Adina's mother was diagnosed with dementia in 2016. Her grandmother also had dementia, as did her mother-in-law. Adina also carries an APOE 3/4 genetic marker that indicates a 30% likelihood of developing dementia herself, with high sensitivity to lifestyle changes. She built Cadywampus after years of searching for a mobile game that actually challenged her brain and coming up empty. She had been playing a version of the game mentally for years before deciding to build it in 2022.",
  },
  {
    q: "What is the science behind Cadywampus and dementia prevention?",
    a: "Two major findings from current dementia and Alzheimer's research drive the design of Cadywampus: the importance of keeping your brain engaged and learning new things, and the importance of social connection. The POINTER study published in 2024 pointed specifically to these two factors. Loneliness has been shown to increase dementia risk by 40 to 50 percent, on par with smoking and lack of exercise. Cadywampus addresses the brain engagement piece through active thinking, with a planned board game version to add the social layer.",
  },
  {
    q: "Who is Cadywampus designed for?",
    a: "Adina describes her ideal customer as the 'intentional ager': busy, smart, productive people aged 35 to 65 who want tools that fit into everyday life to maintain their quality of life and independence as they age. The game is not designed for people already diagnosed with dementia or Alzheimer's. It is designed as a proactive tool for people who want to avoid that diagnosis. The game is family friendly (no explicit words) and has also attracted younger users, including Adina's 13-year-old grandson.",
  },
  {
    q: "How is Cadywampus meant to fit into a daily routine?",
    a: "Unlike most casual mobile games, which are played at night when users have decision fatigue and want an easy dopamine hit, Cadywampus is designed for the morning. Adina's vision is wake up, drink your coffee, play Cadywampus, get your neurons firing, then take your walk and start your day. It is also designed as a mental reset tool during the day — in the carpool line, at lunch, at the DMV — with built-in incentive to beat your morning score.",
  },
  {
    q: "What practical things can people do today to protect their brain health?",
    a: "Based on the research Adina follows as a nurse and founder: stay socially connected (loneliness is a neurological risk factor, not just an emotion); keep learning new things — dancing, playing an instrument, learning a language; eat lots of color and shop the perimeter of the grocery store; move your body in whatever form is accessible; get quality sleep; and get outside for sunlight and a change of scenery. Adina's phrase is 'your future self will thank you.'",
  },
  {
    q: "What advice does Adina Maynard give for conversations about aging parents?",
    a: "Have the conversations ahead of time, before the crisis arrives. Adina's husband asked his father about driving and end-of-life decisions a year and a half before the situation became urgent. His father was able to give clear direction on what he wanted. Adina frames these conversations as a love letter to the people who may one day have to speak for you — a roadmap of what you want to happen, not a pessimistic act.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Adina Maynard: From 15 Years as an Oncology Nurse to Founding Cadywampus, a Brain Game Built to Prevent Dementia",
  description:
    "Adina Maynard spent 15 years as a travel oncology nurse before founding Cadywampus, a mobile brain game she invented in her head to fight cognitive decline.",
  image: "https://www.gildre.com/images/blog/adina-maynard-portrait.jpeg",
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { "@type": "Person", name: "Adina Maynard" },
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
                Health Tech
              </span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                {new Date(PUBLISHED).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} · Start to Scale Podcast
              </span>
            </div>
            <h1
              className="text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.1] text-white"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Adina Maynard: From 15 Years as an Oncology Nurse to Founding the Brain Game She Couldn&rsquo;t Find Anywhere Else
            </h1>
            <p className="mt-6 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              She spent 15 years at the bedside of cancer patients at City of Hope, Duke, and the NIH. Her mother has dementia. Her grandmother had it. She carries the gene marker herself. When she couldn&rsquo;t find a mobile brain game that actually challenged her, she built one — and named it Cadywampus.
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
                Adina Maynard is a registered oncology nurse and founder of Cadywampus, a mobile brain game combining word game, puzzle, and strategy mechanics to support cognitive health. She built it after 15 years as a travel nurse and a family history of dementia that includes her mother, grandmother, and mother-in-law. Cadywampus is designed as a morning routine tool for the &ldquo;intentional ager&rdquo; (35 to 65-year-olds who want to protect their brain health proactively), is available on the App Store and Google Play, and is built on research showing that keeping your brain engaged with new challenges can reduce dementia risk.
              </p>
            </div>

            {/* Author card */}
            <div
              className="mt-10 flex items-center gap-4 rounded-2xl p-5"
              style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,169,110,0.15)" }}
            >
              <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full" style={{ border: "2px solid rgba(201,169,110,0.3)" }}>
                <Image
                  src="/images/blog/adina-maynard-portrait.jpeg"
                  alt="Adina Maynard"
                  fill
                  className="object-cover object-top"
                  sizes="64px"
                />
              </div>
              <div>
                <p className="font-bold text-white">Adina Maynard, BSN, RN, OCN</p>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Oncology nurse · Founder, Cadywampus · South Carolina
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hero photo */}
        <div className="mx-auto max-w-3xl px-6 -mt-4">
          <div className="overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
            <Image
              src="/images/blog/adina-maynard-portrait.jpeg"
              alt="Adina Maynard, founder of Cadywampus"
              width={420}
              height={526}
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
            Adina Maynard did not set out to be a nurse. She took a desk job straight out of high school, got married, had a baby, and by the time she had a mortgage and 17 years behind her she started asking what she actually wanted to do with her life. She narrowed it to teaching and nursing. And then, as she describes it, God kept bringing nurses into her life. She made a deal: if the door opened, she would walk through it.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            San Diego State accepted her into their nursing program on the first try, out of over 400 applicants for 120 spots, in a cohort where some people had already applied three and four times. While she was in school, her father was diagnosed with colon cancer. Her best friend&rsquo;s husband was diagnosed with carcinoma of unknown primary. By the time she graduated, she knew exactly what she wanted to do. For 15 years, she was an oncology nurse. She still loves it.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            And then she built a mobile game. And the reason she built it has everything to do with what she saw at the bedside, what she watched happen to her mother, and a blood test result that told her she was next in line.
          </p>

          {/* Section 1: Travel nursing */}
          <h2
            className="mt-14 text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            City of Hope, Duke, the NIH: what 15 years at the bedside taught her
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            Adina became a travel nurse after five years at the bedside because she wanted to see how other parts of the country cared for their oncology populations. She drove cross-country three times. She worked at City of Hope in Los Angeles, Seattle Cancer Care Alliance, Duke, the MD Anderson Cancer Center, and the NIH, all National Cancer Institutes. The third cross-country drive, from Seattle to Maryland, cured her love of road trips.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            Travel nursing taught her something she still carries into her company: a good nurse does not know all the answers. A good nurse knows her resources. It is a distinction that sounds simple but runs deep. Knowing everything is impossible. Knowing who to call and who to trust is the actual skill. When she started building Cadywampus, she applied it directly: she knew she couldn&rsquo;t build a tech company alone, so she spent an unusually long time finding the right people, vetted developer quotes ranging from $20,000 to $200,000, and insisted on a US-based developer who understood word game culture.
          </p>
          <blockquote
            className="my-10 rounded-2xl p-8"
            style={{ backgroundColor: "rgba(201,169,110,0.07)", borderLeft: "3px solid #C9A96E" }}
          >
            <p className="text-base leading-relaxed text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
              &ldquo;A good nurse doesn&rsquo;t know all the answers. A good nurse knows her resources. Who you associate with, who you collaborate with, who you can depend on and rely on makes a world of difference.&rdquo;
            </p>
            <p className="mt-3 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              Adina Maynard
            </p>
          </blockquote>
          <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            During the pandemic, she opened an LLC called Nurse Adina to fill a specific gap: cancer patients were not allowed to bring anyone into the hospital. No family member, no friend, no second set of ears. The confusion and fear this created was real. Nurse Adina offered private patient advocacy for cancer patients and families who were navigating diagnoses without anyone in the room with them.
          </p>

          {/* Section 2: Why Cadywampus */}
          <h2
            className="mt-14 text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Her mother. Her grandmother. Her own blood test. The reason Cadywampus exists.
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            Adina&rsquo;s mother has had dementia since 2016. Her grandmother had it. Her mother-in-law had it before she passed. In September 2024, her mother had a medical crisis that required Adina to leave her 14th travel nursing contract, the first time she had ever left one early, and move her mother in. Her mother&rsquo;s husband passed away the month after. Adina and her husband cared for her mother at home for almost a year before her cognition declined sharply enough to require 24-hour memory care.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            Around the same time, Adina had taken an APOE blood test. Her result came back 3 of 4. That means she carries a marker showing a 30% likelihood of a dementia diagnosis, and that her body is highly sensitive to lifestyle changes. The more important piece of the APOE 3/4 result is not the risk. It is the sensitivity. The lifestyle choices she makes now will show up in her brain health later, more than they would for someone without the marker.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            She had already been building Cadywampus since late 2022. But the full weight of why it mattered landed when she was sitting with her mother knowing what was coming, knowing what the research said, and knowing that the older generations did not have access to the information that now exists about dementia prevention. They did not know there were things they could start doing today.
          </p>

          {/* Cadywampus photo */}
          <div className="my-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
            <Image
              src="/images/blog/adina-maynard-cadywampus.avif"
              alt="Cadywampus brain game by Adina Maynard"
              width={800}
              height={600}
              className="w-full object-cover object-center"
              style={{ maxHeight: "480px" }}
            />
          </div>

          {/* Section 3: What is Cadywampus */}
          <h2
            className="text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Productive play: a word game, a brain game, a puzzle, and a strategy game wrapped into one
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            Adina had been playing Cadywampus in her head for years before she built it. When she was overwhelmed as a nurse, or needed to transition from one difficult situation to another, she would run through the game mentally as a reset. She spent years waiting for someone to build it and nobody did.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            The core problem she was solving was not dementia. It was boredom. She kept downloading mobile games and finding them too simple. Colors and numbers. Patterns a kindergartner could solve. She felt her brain cells dying. She wanted to be challenged, in the specific way that the game she had already invented for herself could challenge her.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            Cadywampus is what she calls active thinking. If you can play the game, watch TV, and eat dinner simultaneously, you are not doing your brain any good. The game combines word mechanics, puzzle logic, and strategy in a way that requires your full attention. It launched on the App Store and Google Play in June 2025.
          </p>
          <blockquote
            className="my-10 rounded-2xl p-8"
            style={{ backgroundColor: "rgba(201,169,110,0.07)", borderLeft: "3px solid #C9A96E" }}
          >
            <p className="text-base leading-relaxed text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
              &ldquo;If you can play a game on your phone, watch TV, and eat dinner all at the same time, you&rsquo;re not doing your noggin any good. Cadywampus is designed to challenge how you think. It requires active thinking.&rdquo;
            </p>
            <p className="mt-3 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              Adina Maynard on what makes Cadywampus different
            </p>
          </blockquote>

          {/* Section 4: Productive play and the ICP */}
          <h2
            className="mt-14 text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            The intentional ager: who Cadywampus is built for
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            Most casual mobile games are played at night. Decision fatigue has set in. The user wants something easy, a dopamine hit that doesn&rsquo;t require effort. Cadywampus is built for the opposite end of the day: the morning. Wake up, drink your coffee, play Cadywampus, get your neurons firing, then take your walk.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            Adina calls what Cadywampus does &ldquo;productive play&rdquo;: fun that feels good and does good. And she calls her target user the intentional ager. These are busy, smart, productive people between 35 and 65 who are looking for tools that fit into everyday life and help them maintain their quality of life and independence as they get older. They are not in decline yet. They want to avoid it.
          </p>

          {/* ICP cards */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                label: "Morning Routine",
                body: "Designed to wake your brain up. Play with your coffee before anything else demands your attention.",
              },
              {
                label: "Mental Reset",
                body: "In the carpool line, at lunch, waiting at the DMV. A deliberate break that also does something useful.",
              },
              {
                label: "Self-Competition",
                body: "Beat your morning score later in the day. The incentive is built in — no streaks, no social pressure.",
              },
            ].map((c) => (
              <div
                key={c.label}
                className="rounded-2xl p-6"
                style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <p className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
                  {c.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {c.body}
                </p>
              </div>
            ))}
          </div>

          {/* Section 5: The science */}
          <h2
            className="mt-14 text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Loneliness is a neurological risk factor, not just an emotion
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            Two findings keep coming out of dementia and Alzheimer&rsquo;s research. First, the importance of keeping your brain engaged and learning new things. Second, the importance of social connection. The POINTER study published in 2024 pointed specifically to both.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            The social piece is counterintuitive in its scale. Loneliness, it turns out, is not just an emotion. It is a neurological risk factor for dementia and Alzheimer&rsquo;s, increasing that risk by 40 to 50 percent. That puts it in the same category as not exercising and smoking. When you connect with another person, your brain gets a full workout simultaneously across language, attention, empathy, memory, decision making, and emotional regulation. The brain does not distinguish between digital and in-person connection. What matters is that you are actively engaging.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            Adina describes watching her mother&rsquo;s dementia actually improve, briefly, after she moved in with Adina and her husband. A different routine. More mental engagement. Live jazz concerts. Music hits a part of the brain that almost nothing else reaches. She has videos of her mother sitting in a wheelchair, dancing, fully present in a way she was not otherwise. The lesson she draws: you have to be intentional. And it is never too early to start.
          </p>
          <blockquote
            className="my-10 rounded-2xl p-8"
            style={{ backgroundColor: "rgba(201,169,110,0.07)", borderLeft: "3px solid #C9A96E" }}
          >
            <p className="text-base leading-relaxed text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
              &ldquo;Loneliness is a neurological risk factor for dementia and Alzheimer&rsquo;s, increasing that risk by as much as 40 to 50 percent. That&rsquo;s right up there with not getting any exercise and smoking.&rdquo;
            </p>
            <p className="mt-3 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              Adina Maynard
            </p>
          </blockquote>

          {/* Section 6: Building it */}
          <h2
            className="mt-14 text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            How you get a game that lives in your head into the App Store
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            Adina does not have a tech background. She does not code. The challenge was not just building the game: it was explaining what was in her head to someone who would have to translate it into code. Developer quotes ranged from $20,000 to $200,000. She learned along the way that some development companies will build exactly what you ask for even when they know it will not work. That is not what she wanted.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            The vetting process took a long time. She insisted on a US-based developer who understood mobile gaming and word game culture specifically, because the core mechanic of Cadywampus is how it manipulates words, and she needed a partner who understood what that meant. The technical director who built the original version still consults on the project. When Cadywampus launched, she brought engineering in-house.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            She remembers the first time she was able to download the beta onto a phone. She looked at her husband and said: you can now download Cadywampus. He said, I know. It&rsquo;s so exciting. That moment, bugs and all, was a milestone she still talks about.
          </p>

          {/* Section 7: Future */}
          <h2
            className="mt-14 text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Spanish edition, a board game, and 10,000 daily users
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            Adina is clear about what Cadywampus is right now: a glorified MVP. It works, it is in the App Store and Google Play, and it is not yet built to scale. Getting there takes funding, which is an ongoing conversation. But the roadmap is specific.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            At 10,000 daily average users, Cadywampus can begin partnering with health-focused and wellness brands to sponsor the daily game. A Spanish edition would open the game to another 300 million people. Intellectual property has already been secured internationally, covering Canada, the European Union, the UK, New Zealand, and Australia. And Adina wants Cadywampus in every chemotherapy clinic and cancer center in the country.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            The piece she is most excited about is a tangible board game. Research links social connection to dementia prevention. A physical version of Cadywampus would put both elements in the same room: active thinking plus people. That is the combination the science points to. That is what she is building toward.
          </p>

          {/* Section 8: Advice */}
          <h2
            className="mt-14 text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Have the conversation before the crisis arrives
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            Adina&rsquo;s most practical advice has nothing to do with the game. It is about the conversation most families avoid until it is too late.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            Her husband asked his father about driving and end-of-life decisions a year and a half before the situation became urgent. His father said: you&rsquo;re going to have to fight me for the keys, but I want you to take them. He knew what he wanted. He was able to say it while he still could. When the time came, the family knew what to do.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            When adult children push back and say they don&rsquo;t want to think about these things, Adina has a reframe. Having the plan is not pessimistic. It is not expecting decline. It is a love letter to the people who may one day have to speak for you. You are giving them a roadmap of what you want. That is a gift, not a tragedy. And it is infinitely easier to give that gift before anyone is in crisis than after.
          </p>
          <blockquote
            className="my-10 rounded-2xl p-8"
            style={{ backgroundColor: "rgba(201,169,110,0.07)", borderLeft: "3px solid #C9A96E" }}
          >
            <p className="text-base leading-relaxed text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
              &ldquo;Having a plan is not pessimistic. It is not expecting decline. It is a love letter to the people who may one day have to speak for you. You are giving them a roadmap of what you want to happen.&rdquo;
            </p>
            <p className="mt-3 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              Adina Maynard
            </p>
          </blockquote>

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
              Build with founders who know what it costs
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              Adina left a 15-year nursing career to build something the world needed. Gildre exists for founders building from that kind of conviction.
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
