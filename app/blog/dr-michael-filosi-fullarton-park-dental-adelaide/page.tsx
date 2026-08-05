import Image from "next/image";
import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://www.gildre.com/blog/dr-michael-filosi-fullarton-park-dental-adelaide" },
  title: "Dr. Michael Filosi: From Two Dental Chairs to Adelaide's Biggest Practice and a Private Equity Exit | Gildre",
  description:
    "Dr. Michael Filosi scaled Fullarton Park Dental from a run-down two-chair Adelaide practice into the largest in the city over ten years: 400 five-star Google reviews, ten chairs, and four private equity firms competing to buy. His full playbook for dental practice owners who want to scale and exit.",
  keywords: [
    "Dr Michael Filosi",
    "Fullarton Park Dental",
    "dental practice owner Australia",
    "how to scale a dental practice",
    "selling dental practice private equity",
    "Adelaide dentist entrepreneur",
    "dental practice exit strategy",
    "dental practice Google reviews",
    "patient retention dental practice",
    "dental business owner",
    "Adelaide dental clinic",
    "Gildre member Australia",
  ],
  openGraph: {
    url: "https://www.gildre.com/blog/dr-michael-filosi-fullarton-park-dental-adelaide",
    title: "Dr. Michael Filosi: From Two Dental Chairs to Adelaide's Biggest Practice and a Private Equity Exit",
    description:
      "Dr. Michael Filosi on pivoting from clinician to business owner, hiring new graduates over seasoned dentists, building 400 five-star Google reviews through personalized follow-up, and selling Fullarton Park Dental to private equity after a decade of deliberate growth.",
    type: "article",
    images: [
      {
        url: "https://www.gildre.com/images/dr-michael-filosi-headshot.jpeg",
        width: 1280,
        height: 720,
        alt: "Dr. Michael Filosi, founder and exited owner of Fullarton Park Dental in Adelaide, South Australia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Michael Filosi: Two Chairs to Adelaide's Biggest Dental Practice, Then a PE Exit",
    description:
      "He decided early he'd never be the best dentist in Adelaide. So he became the best dental practice owner instead. Ten years. Ten chairs. 400 five-star reviews. Four PE firms competing to buy.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Dr. Michael Filosi: From Two Dental Chairs to Adelaide's Biggest Practice and a Private Equity Exit",
  description:
    "Dr. Michael Filosi, founder and exited owner of Fullarton Park Dental in Adelaide, South Australia, on the decade-long journey from buying a run-down two-chair practice to scaling it into the largest dental clinic in the city, earning 400 five-star Google reviews, and selling to private equity with four firms competing to acquire.",
  image: "https://www.gildre.com/images/dr-michael-filosi-headshot.jpeg",
  datePublished: "2026-07-30",
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
  mainEntityOfPage:
    "https://www.gildre.com/blog/dr-michael-filosi-fullarton-park-dental-adelaide",
  about: [
    {
      "@type": "Person",
      name: "Dr. Michael Filosi",
      jobTitle: "Founder and Exited Owner, Fullarton Park Dental",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "The University of Adelaide",
      },
    },
    {
      "@type": "LocalBusiness",
      name: "Fullarton Park Dental",
      address: {
        "@type": "PostalAddress",
        streetAddress: "417 Fullarton Road",
        addressLocality: "Fullarton",
        addressRegion: "South Australia",
        addressCountry: "AU",
      },
      telephone: "08 8272 5271",
      description:
        "A dental clinic in Fullarton, South Australia, founded and scaled by Dr. Michael Filosi from two chairs to ten over ten years before a private equity exit.",
    },
  ],
  keywords:
    "Dr Michael Filosi, Fullarton Park Dental, dental practice owner, scaling dental practice, selling dental practice, private equity dental, Adelaide dentist, Google reviews dental, patient retention, Gildre Australia",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dr. Michael Filosi",
  honorificPrefix: "Dr.",
  jobTitle: "Founder and Exited Owner, Fullarton Park Dental",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "The University of Adelaide",
  },
  knowsAbout: [
    "Dental Practice Management",
    "Healthcare Business Ownership",
    "Patient Experience Design",
    "Google Review Strategy",
    "Dental Practice Exit and Sale",
    "Hiring and Team Retention in Healthcare",
    "Customer Experience",
    "Business Scaling",
    "Private Equity Acquisition",
  ],
  description:
    "Dr. Michael Filosi is the founder and exited owner of Fullarton Park Dental in Adelaide, South Australia. A Bachelor of Dental Surgery graduate of The University of Adelaide (December 2006), he bought a run-down two-chair practice and scaled it over ten years to become Adelaide's largest dental clinic, earning 400 five-star Google reviews with a 5.0 average rating, before selling to a private equity firm with four buyers competing to acquire. He is a Gildre member.",
};

const faqs = [
  {
    q: "Who is Dr. Michael Filosi?",
    a: "Dr. Michael Filosi is a dentist and entrepreneur based in Adelaide, South Australia. He is the founder and exited owner of Fullarton Park Dental at 417 Fullarton Road, which he built from a run-down two-chair practice into Adelaide's largest dental clinic with ten chairs over ten years. He achieved 400 five-star Google reviews with a 5.0 average rating, then sold the practice to private equity with four firms competing to acquire it. He holds a Bachelor of Dental Surgery from The University of Adelaide, graduating in December 2006, and is a Gildre member.",
  },
  {
    q: "What is Fullarton Park Dental in Adelaide?",
    a: "Fullarton Park Dental is a dental practice located at 417 Fullarton Road in Fullarton, South Australia (phone: 08 8272 5271). Under the ownership of Dr. Michael Filosi, it grew from a two-chair practice with no goodwill into Adelaide's largest dental clinic, scaling to ten dental chairs across two major renovations. The practice became known for exceptional patient experience, earning 400 five-star Google reviews with a 5.0 average before Dr. Filosi sold it to a private equity firm after ten years.",
  },
  {
    q: "How did Dr. Michael Filosi scale his dental practice from two chairs to ten?",
    a: "Dr. Michael Filosi scaled Fullarton Park Dental through a series of deliberate decisions: he bought a low-goodwill, inexpensive practice from a dentist with poor bedside manner (meaning he had maximum upside from day one); hired new dental graduates over experienced dentists because they were more receptive to training; used a 'golden rules' document to set expectations before every hire; designed every renovation for the eventual ten-chair scale even when operating at six; used dental-compliant builders who understood lead-wall requirements for X-ray rooms; and built appointment books to capacity before bringing on each additional dentist.",
  },
  {
    q: "How did Dr. Michael Filosi get 400 five-star Google reviews at Fullarton Park Dental?",
    a: "Dr. Michael Filosi built 400 five-star Google reviews through three steps: earning them through genuinely exceptional care and patient experience, asking for them at the right moment (when a patient had just expressed satisfaction, not via automated mass messages), and sending personalized follow-up texts that referenced the patient's specific appointment and conversation. He also sent handwritten thank-you cards with movie tickets to every patient who left a review, rewarding the behavior after the fact rather than incentivizing it in advance, turning reviewers into practice ambassadors.",
  },
  {
    q: "What was the Sparks program Dr. Michael Filosi ran at Fullarton Park Dental?",
    a: "Sparks was a patient experience program Dr. Michael Filosi ran at Fullarton Park Dental. The budget was $50 per patient, covering 50 patients over 50 weeks. When patients shared something happening in their lives during their appointment, the team would arrange a surprise gift related to it: a Lonely Planet guide and sunscreen for a patient travelling to Hawaii, a comfort pack of chocolates and warm socks for a patient having surgery, a fluffy kangaroo and Australian food items for a patient receiving their citizenship. The gifts arrived unexpectedly by delivery, demonstrating that the practice had genuinely listened, not just cleaned teeth.",
  },
  {
    q: "Why did Dr. Michael Filosi sell Fullarton Park Dental?",
    a: "Dr. Michael Filosi sold Fullarton Park Dental after ten years because the work had shifted from building to maintenance, a transition he found significantly less rewarding. He described reaching the top and realizing that instead of building, he was waiting for things to break. A period of difficult team dynamics compounded the fatigue, and he described the experience as the reward disappearing while the cost remained. He was 42 at the time of the sale. Four private equity firms competed to acquire the practice.",
  },
  {
    q: "What hiring strategy did Dr. Michael Filosi use at his dental practice?",
    a: "Dr. Michael Filosi consistently preferred hiring new dental graduates over experienced dentists. His reasoning: fresh graduates had no ingrained habits to undo, were hungry to learn, and were far more receptive to the practice's specific way of doing things. Experienced dentists, he found, tended to assume they knew better, resisted feedback, and struggled to grow their appointment books. He also showed every hire a 'golden rules' document before making an offer, requiring explicit buy-in to the practice's standards. If someone was not on board with the document, they did not get the role.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

function Section({ title }: { title: string }) {
  return (
    <h2
      className="mb-4 mt-14 text-2xl font-bold text-white"
      style={{ fontFamily: "var(--font-fraunces)" }}
    >
      {title}
    </h2>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
      {children}
    </p>
  );
}

function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote
      className="my-10 border-l-4 pl-6 text-lg italic leading-relaxed"
      style={{ borderColor: "#C9A96E", color: "rgba(255,255,255,0.85)" }}
    >
      {children}
    </blockquote>
  );
}

function BioCallout() {
  return (
    <div
      className="my-10 rounded-2xl px-6 py-5"
      style={{ backgroundColor: "rgba(201,169,110,0.07)", border: "1px solid rgba(201,169,110,0.18)" }}
    >
      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
        <strong style={{ color: "#C9A96E" }}>Dr. Michael Filosi</strong> is the founder and exited owner of{" "}
        <strong style={{ color: "#fff" }}>Fullarton Park Dental</strong> at 417 Fullarton Road, Adelaide, South Australia. He holds a Bachelor of Dental Surgery from The University of Adelaide (December 2006) and spent ten years as an employed dentist before buying a run-down two-chair practice and scaling it to Adelaide&apos;s largest dental clinic. He sold to private equity at 42. He is a Gildre member.
      </p>
    </div>
  );
}

export default function DrMichaelFilosiBlog() {
  return (
    <div style={{ backgroundColor: "#0f1524", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
              Start to Scale
            </span>
            <span className="text-[0.65rem]" style={{ color: "rgba(255,255,255,0.35)" }}>
              Member Feature · Adelaide · Healthcare · Exit
            </span>
          </div>
          <h1
            className="text-[clamp(1.9rem,4.5vw,3.25rem)] font-bold leading-[1.1] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Dr. Michael Filosi: The Adelaide Dentist Who Stopped Trying to Be the Best Clinician and Built{" "}
            <span style={{ color: "#C9A96E" }}>Fullarton Park Dental</span>{" "}
            Into the Biggest Practice in the City
          </h1>
          <p className="mt-5 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            He graduated dental school in 2006, worked a decade as an employee, and bought a run-down two-chair practice that nobody wanted. Ten years later he sold it to private equity with four firms competing to buy. In between: ten chairs, two major renovations, 400 five-star Google reviews at a perfect 5.0, and a set of patient experience systems so unusual that patients started telling stories about their dentist at dinner parties.
          </p>

          {/* Meta row */}
          <div
            className="mt-8 flex flex-wrap items-center gap-6 pb-8"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
                <Image
                  src="/images/gildre-logo.png"
                  alt="Gildre"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Gildre</p>
                <p className="text-[0.65rem]" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Start to Scale Podcast
                </p>
              </div>
            </div>
            <div className="flex gap-5 text-[0.65rem]" style={{ color: "rgba(255,255,255,0.35)" }}>
              <span>16 min read</span>
              <span>·</span>
              <span>Healthcare · Operations · Exit · Adelaide</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Body ─────────────────────────────────────────────────────── */}
      <article className="mx-auto max-w-3xl px-6 py-16">

        <Body>
          Dr. Michael Filosi knew something about himself before he ever bought a practice: he was not going to be the best dentist in Adelaide. He was good. He worked hard. He cared genuinely about his patients. But the ceiling was there, and he could see it. What he did with that realization is the entire story. He stopped trying to win the wrong competition and started building{" "}
          <strong style={{ color: "#fff" }}>Fullarton Park Dental</strong>{" "}
          into the best-run dental practice in his city instead. He joined the{" "}
          <strong style={{ color: "#fff" }}>Start to Scale Podcast</strong>{" "}
          from Adelaide to talk through the full decade, from two chairs and possums in the walls to a private equity exit.
        </Body>

        {/* Photo 1 — headshot */}
        <div className="my-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="/images/dr-michael-filosi-headshot.jpeg"
            alt="Dr. Michael Filosi, founder and exited owner of Fullarton Park Dental in Adelaide, on the Start to Scale Podcast"
            width={720}
            height={405}
            quality={90}
            sizes="(max-width: 768px) calc(100vw - 48px), 720px"
            className="w-full object-cover"
            style={{ maxHeight: "480px", objectFit: "cover", objectPosition: "center top" }}
          />
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>
              Dr. Michael Filosi, exited founder of Fullarton Park Dental in Adelaide, South Australia, on the Start to Scale Podcast
            </p>
          </div>
        </div>

        <BioCallout />

        <Section title="The Steve Kerr Analogy: Why the Best Coaches Were Never the Best Players" />
        <Body>
          Before the recording started, Filosi and Taiga Gamell were talking basketball. The conversation found its way to Steve Kerr: a serviceable player, never elite, who became one of the greatest coaches in NBA history and oversaw one of the most dominant dynasties the league has ever seen. The parallel was not lost on either of them.
        </Body>
        <Body>
          &quot;Quite often the best coaches tend to not have been the best players,&quot; Filosi said. &quot;When the elite players try and go back and coach, they&apos;re not always brilliant at it. It tends to be the players who were serviceable and still very good, but they weren&apos;t quite elite.&quot; The same dynamic plays out in professional services. The most technically gifted practitioners sometimes make the worst business owners because they expect everyone else to share their innate ability, and find it exasperating when they do not.
        </Body>
        <Body>
          Filosi took a different path. Because he knew firsthand how hard the clinical work was, he understood when team members struggled. When things did not go to plan, he could read the difference between insufficient effort and genuine difficulty. That patience, born from his own limitations, became one of his most valuable management assets.
        </Body>
        <Quote>
          &quot;I had an appreciation for how hard the technical aspect of the job was. If you&apos;re a natural superstar, you kind of expect everyone else to be a natural superstar. And when they&apos;re not meeting you there, you find it exasperating. I knew how hard the job was. I got that in a way that maybe, if I inherently was brilliant at it, I wouldn&apos;t have.&quot;
        </Quote>

        <Section title="Getting Both Feet on the Board: The Skateboarding Kids Who Taught Him to Start" />
        <Body>
          He worked as an employee for ten years after graduating. The decision to go out on his own did not come easily. He was scared of failure, uncertain he had what it took, and kept finding reasons to wait a little longer. One afternoon, at a practice where he was still working for someone else, he looked out the window and watched a group of schoolkids attempting skateboarding tricks. Most of the time, the board went flying.
        </Body>
        <Body>
          &quot;I realized in that moment that I could watch all the YouTube clips on business and read all the books and all those things. But at some point I had to get my feet on that board of business and really give it a go.&quot; The kids were going to make mistakes before they could land it. That was the point. Trying to achieve perfect readiness before starting was a way of guaranteeing you never started at all. He had to get on the board and accept the bruised knees.
        </Body>
        <Body>
          The reason he finally wanted his own practice was simpler than ambition. When you work for someone else, they make the calls, and sometimes you disagree. &quot;I wanted to live and die by my own sword. I would rather fail and know it was me and my mistakes than go down on someone else&apos;s ship.&quot; Control over the outcome, for better or worse, was worth more to him than the stability of employment.
        </Body>

        {/* Photo 2 — early practice */}
        <div className="my-14 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="/images/dr-michael-filosi-early-practice.jpeg"
            alt="Dr. Michael Filosi in the early days at Fullarton Park Dental, Adelaide, before the renovations"
            width={720}
            height={960}
            quality={90}
            sizes="(max-width: 768px) calc(100vw - 48px), 720px"
            className="w-full object-cover"
            style={{ maxHeight: "520px", objectFit: "cover", objectPosition: "center top" }}
          />
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>
              Dr. Filosi in the early days at Fullarton Park Dental: the practice had two chairs and no goodwill when he bought in
            </p>
          </div>
        </div>

        <Section title="The Lemon He Bought: Two Chairs, No Charisma, Plenty of Upside" />
        <Body>
          The practice he bought was, by any conventional measure, unappealing. Two chairs. A reputation that had not been built. A previous dentist who lacked, in Filosi&apos;s telling, charisma, charm, and patient bedside manner. Possums, allegedly, in the walls. Nobody thought the place had a future.
        </Body>
        <Body>
          That was exactly why he bought it. The low goodwill meant a low entry price. Ten years as an employee had given him enough capital that he was not going into debt to make it work. And the deficiencies of the previous operator meant there was enormous room to simply be better. &quot;All I needed was a bum on a seat. I just needed patients. And then I figured that if I was any good, I could build it myself.&quot;
        </Body>
        <Body>
          He was right. Growth came quickly because the bar was so low. Patients who had tolerated a disengaged dentist for years discovered one who paid attention and got them out of pain. Word spread. Appointment books started filling. There was no dramatic make-or-break period, no month where he could not meet payroll, because the upside had been waiting there the whole time. He just had to show up and be better.
        </Body>

        <Section title="Two Renovations, One Demolished House, and Always Building for Ten Chairs" />
        <Body>
          The practice grew in a straight line: two chairs to four, four to six, six to eight, eight to ten. Two major renovations. Filosi eventually bought the property the practice was located on, then the property next door, where a little old lady had lived. She passed away, the house was demolished, and the land became a car park for patients.
        </Body>
        <Body>
          Dentistry carries a compliance load most industries do not. Lead in the walls around X-ray rooms. Lines of sight for radiation. Sterilization requirements built into the cabinetry. The list of ways a non-specialist builder could get it wrong was long, and the cost of retrofitting was not just financial. Filosi had heard horror stories: practices where all the cabinetry had to be torn down because someone forgot the lead insulation.
        </Body>
        <Body>
          His solution was permanent: use only dental-compliant builders and never tolerate a do-it-twice job. &quot;I had a very low tolerance for someone not giving me good advice or having to do something and then go back and redo it. I wanted to future-proof the thing.&quot; He made this explicit with every supplier: get it right the first time, because there would not be a second chance.
        </Body>
        <Body>
          The deeper principle ran through every growth decision. He designed for ten chairs while still operating at six. The reception workflow, the physical layout, the systems, all of it built with the end state in mind. &quot;We needed to make sure conceptually at least that we were going to be able to still run and operate at the scale we wanted when we got there, even before we got there.&quot; This prevented the most expensive kind of problem in any scaling business: having to redesign the whole thing from scratch because nobody planned ahead.
        </Body>

        {/* Photo 3 — completed surgery */}
        <div className="my-14 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="/images/fullarton-park-dental-surgery.jpeg"
            alt="Inside a completed surgery at Fullarton Park Dental, Adelaide: ten chairs, custom cabinetry, dental-compliant fit-out"
            width={720}
            height={480}
            quality={90}
            sizes="(max-width: 768px) calc(100vw - 48px), 720px"
            className="w-full object-cover"
            style={{ objectFit: "cover", objectPosition: "center center" }}
          />
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>
              A completed surgery at Fullarton Park Dental: built with dental-compliant fit-out from the start, designed for scale before it was needed
            </p>
          </div>
        </div>

        <Section title="The Hiring Playbook: Why New Graduates Beat Experienced Dentists Every Time" />
        <Body>
          Hiring was one of the hardest things he did and one of the areas where the lessons came quickest. He tried experienced dentists. They came in with opinions about how a dental practice should be run, resisted feedback, and, in his experience, were poor at growing their own appointment books. The practice paid to bring them in and received marginal results.
        </Body>
        <Body>
          New graduates were different. They came in without preconceptions. They had not yet formed habits that needed to be unlearned. They were hungry, they were open, and they could see the proof of concept that already existed: a practice that had grown from nothing to something real. &quot;We had proof of concept. Hey, we grew this thing from very small to large. If you follow this, you will be happy, you&apos;ll be busy, you will have lots of patients, you&apos;ll be doing rewarding work.&quot; That was a compelling pitch, and it landed with people who had not yet decided they already knew better.
        </Body>
        <Body>
          He also built a system for filling their appointment books before they had a reputation to draw on. Overflow patients, the ones other dentists could not see that day, became the new graduate&apos;s early patient base. Getting someone out of pain is the fastest way to earn their loyalty. The practice made sure the existing dentists were booked solid before adding any new one, so there was no dilution of volume across an underserved chair.
        </Body>

        <Section title="The Sandpit: Golden Rules and Getting Buy-In Before Day One" />
        <Body>
          The most effective thing he built for hiring was not a recruitment process. It was a document. Before every final offer, a candidate sat down and read through what he called the golden rules of the business: the specific expected behaviors, the performance benchmarks, the way things were done at Fullarton Park Dental. Not abstract values. Concrete rules.
        </Body>
        <Body>
          &quot;We would say to them: this is what we believe in. This is how we believe your role needs to be performed. The people who like working here love how we do things. But if you&apos;re not into that, if you don&apos;t want to work that way, we totally get it. We&apos;re not going to force you. But we need you to be on board for this and really want this before we can offer you the position.&quot;
        </Body>
        <Body>
          The sandpit metaphor captured the philosophy precisely. It was his business, his sandpit. You could play in it, but you played by his rules. If the rules were bad and nobody wanted to play, that was feedback he would take. But the rules were not bad, and the practice had the results to prove it. People who opted in with clear eyes stayed and thrived. The document also made performance management straightforward: if someone was not meeting expectations, there was no ambiguity about what the expectations were, because they had explicitly agreed to them before their first day.
        </Body>
        <Body>
          The contracts were tight in the other direction too. Restraint of trade clauses meant that a dentist who built a patient base inside Filosi&apos;s practice could not simply leave and open a competing clinic nearby. He made clear he would enforce them. The combination of a deliberate culture, high-quality equipment, full appointment books, and strong mentorship created the other side of the equation: a place people did not want to leave in the first place. &quot;We wanted to make it so cozy that they had no reason to leave. Like being inside a nice warm room when it&apos;s really cold outside.&quot;
        </Body>

        {/* Photo 4 — dental degree */}
        <div className="my-14 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="/images/dr-michael-filosi-dental-degree.jpeg"
            alt="Dr. Michael Filosi's Bachelor of Dental Surgery degree from The University of Adelaide, December 2006"
            width={720}
            height={540}
            quality={90}
            sizes="(max-width: 768px) calc(100vw - 48px), 720px"
            className="w-full object-cover"
            style={{ maxHeight: "480px", objectFit: "cover", objectPosition: "center center" }}
          />
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>
              Dr. Filosi&apos;s Bachelor of Dental Surgery from The University of Adelaide, December 2006: the credential he spent ten years working as an employee before deciding to bet on himself
            </p>
          </div>
        </div>

        <Section title="400 Five-Star Reviews: How Word of Mouth Became Word of Thumb" />
        <Body>
          When Filosi sold Fullarton Park Dental, the practice had 400 five-star Google reviews and a 5.0 average. It was the top-reviewed dental practice in Adelaide. He will tell you, without hesitation, that he figured out the importance of Google reviews before most of his competitors did, and that lead time compounded into a significant structural advantage.
        </Body>
        <Body>
          The shift he observed was simple and irreversible: &quot;It used to be word of mouth. Then it became word of thumb. People would scroll through and find the practice they wanted to go to.&quot; A perfect rating with hundreds of reviews is not something that can be bought or manufactured quickly. It is built one patient at a time, over years, and the advantage belongs to whoever starts earliest and runs the system most consistently.
        </Body>
        <Body>
          His system had three components. The first was earning the reviews through care genuinely worth five stars: practices that generate reviews through automated mass messages tend to get mediocre ratings because their care is mediocre, and patients notice. The second was asking at the right moment, not after every appointment as a formality, but when a patient had expressed clear satisfaction, when they said &quot;that was the best dental experience I&apos;ve had&quot; or &quot;you did so well with my son.&quot; Those were the entry points.
        </Body>
        <Body>
          The third was the follow-up message itself, which was never generic. It referenced the patient&apos;s specific appointment, something from the conversation, something personal. &quot;I wanted them to know this isn&apos;t just a generic hit-the-button send-the-message review request. There was clearly some thought and care that went into it.&quot;
        </Body>
        <Quote>
          &quot;Before, people would ask their friends and family where to go as a dentist. Now they go online. A lot of people are looking for really good care, like you&apos;ve had. I&apos;m wondering, would it be okay if I sent you through a link? Would you be happy to give us a review? It would really help us out.&quot;
        </Quote>
        <Body>
          After the review came the thank-you card: handwritten, personalized, with two movie tickets inside. Not a discount off their next appointment. Movie tickets. &quot;It&apos;s a reward rather than a transaction. They get to experience joy and fun, and it&apos;s separate from what we&apos;re doing. It stands out.&quot; The patient was not expecting it. That surprise, and the care behind it, turned reviewers into ambassadors. They told people. The marketing cost was a movie ticket. The return was permanent.
        </Body>

        <Section title="Unreasonable Hospitality: Patient Appreciation Days, Sparks, and the Mic-Drop Moment" />
        <Body>
          The intellectual framework behind most of what Filosi built at Fullarton Park Dental came from a book: <em style={{ color: "rgba(255,255,255,0.85)" }}>Unreasonable Hospitality</em> by Will Guidara, the former co-owner of Eleven Madison Park in New York. The book documents Guidara&apos;s approach to surprising and delighting customers in ways that go so far beyond expectation that customers feel genuinely cared for, not merely served. It got Filosi thinking about what the dental equivalent of that looked like.
        </Body>
        <Body>
          The first thing he built was the Patient Appreciation Day. Once a year, the practice opened its car park to live music, face painting, food vans, and coffee. All free. Patients and their families came. Instead of looking for ways to extract more from the people who kept the practice alive, the practice gave them something back. &quot;Instead of trying to see what we could get from them, we gave them something of value for free. And it worked.&quot;
        </Body>
        <Body>
          The word-of-mouth effect was immediate and obvious. When people asked about their weekend, &quot;we went to our dental practice&apos;s patient appreciation day&quot; is a remarkable thing to say. Nobody else was doing it. The story was inherently shareable. Every person who attended and told someone about it became a referral source, without being asked.
        </Body>
        <Body>
          The second program was called Sparks, and it ran at a budget of $50 per patient, covering 50 patients over 50 weeks. When patients mentioned something happening in their lives during their appointment, the team would note it and arrange a surprise gift related to that thing. A patient going to Hawaii received a Lonely Planet guidebook, sunscreen, and a beach towel. A patient having surgery received a comfort pack: chocolates, warm socks, the small things that help during recovery. A patient who had just received Australian citizenship received a fluffy kangaroo, Vegemite, Tim Tams, Australian food items they might not have had before.
        </Body>
        <Body>
          The gifts arrived unexpectedly, by delivery, with a note that demonstrated the practice had been paying attention. Not just cleaning teeth. Actually listening. &quot;They&apos;re getting something of value, but it showed that, hey, when I was talking to them about my trip to Hawaii, they were paying attention. They value me enough to pay attention to that.&quot;
        </Body>
        <Quote>
          &quot;I want to give our patients a story that will blow everyone else away. So when their friends are talking about their dentists, they can say: do you know what mine did? I went in there saying I&apos;m into gardening, and a week later I had a lavender bush and some secateurs delivered. I want them to give a story that&apos;s a mic-drop moment.&quot;
        </Quote>
        <Body>
          The deeper source of this philosophy was personal. His father was a mechanic who worked for himself, and Filosi watched him growing up: the care, the attention, the genuine interest in clients as people rather than jobs to complete. &quot;By osmosis, I sort of picked up how important it is to look after your clients well, to treat them with care, to show an interest in their lives.&quot; At six foot six, he was hard to miss in the local shopping center. When he saw patients, he would stop, say hello, ask how they were. It was not a strategy. It was genuine. Patients could tell. And in a business built on trust and proximity, that mattered more than any advertising spend.
        </Body>

        {/* Photo 5 — exterior */}
        <div className="my-14 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="/images/fullarton-park-dental-exterior.jpeg"
            alt="Fullarton Park Dental at 417 Fullarton Road, Adelaide: the exterior of the practice Dr. Michael Filosi built and sold to private equity"
            width={720}
            height={480}
            quality={90}
            sizes="(max-width: 768px) calc(100vw - 48px), 720px"
            className="w-full object-cover"
            style={{ objectFit: "cover", objectPosition: "center center" }}
          />
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>
              Fullarton Park Dental at 417 Fullarton Road, Adelaide: the practice Dr. Filosi built from two chairs to ten and sold with four private equity firms competing to buy
            </p>
          </div>
        </div>

        <Section title="Why He Walked Away at the Top" />
        <Body>
          At 42, with the biggest dental practice in Adelaide and four private equity firms competing to acquire it, Dr. Michael Filosi sold. The question people ask is why. He had built exactly what he set out to build. That was precisely the problem.
        </Body>
        <Body>
          &quot;It&apos;s really fun to build something. But when you get to a certain point, all I was doing was fixing things. Instead of building and building, I would wait in my office for something to break.&quot; The work had become reactive. A piece of equipment. A relationship. Two people who were not getting along. The creative satisfaction of building something from nothing had been replaced by the maintenance of something already complete.
        </Body>
        <Body>
          A difficult period with a small number of team members who created internal conflict stripped away much of what remained of his enjoyment. &quot;It got me thinking: do I really want to keep doing this?&quot; The ten years had been a sprint, and the sprint had taken its toll. He woke up one morning and realized the feeling had changed. The reward had not just diminished; it had gone. And the cost, the constant weight of ownership, had not.
        </Body>
        <Quote>
          &quot;There&apos;s always a cost to being a business owner, but there&apos;s also the reward. For me, the reward always outweighed it. And then all of a sudden the reward just went and all I was left with was the cost. I didn&apos;t want the next ten years to just be like what this is at the moment.&quot;
        </Quote>
        <Body>
          He does not regret the decision. He describes the full arc, from the run-down practice nobody wanted to the exit with four buyers competing, as a remarkable ride. He is still figuring out what comes next. The qualities that built Fullarton Park Dental, the systems thinking, the obsessive attention to patient experience, the willingness to be unconventional, do not disappear when the business is sold.
        </Body>

        {/* Photo 5 — with partner */}
        <div className="my-14 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="/images/dr-michael-filosi-with-partner.jpeg"
            alt="Dr. Michael Filosi with his partner at a restaurant in Adelaide after the Fullarton Park Dental exit"
            width={720}
            height={480}
            quality={90}
            sizes="(max-width: 768px) calc(100vw - 48px), 720px"
            className="w-full object-cover"
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>
              Dr. Michael Filosi after the exit: the ten-year sprint of building Adelaide&apos;s largest dental practice made way for life beyond the chair
            </p>
          </div>
        </div>

        {/* Photo 6 — original building */}
        <div className="my-14 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="/images/fullarton-park-dental-original.jpeg"
            alt="The original Fullarton Park Dental building before renovation: the stone property Dr. Michael Filosi bought and transformed over ten years in Adelaide"
            width={720}
            height={480}
            quality={90}
            sizes="(max-width: 768px) calc(100vw - 48px), 720px"
            className="w-full object-cover"
            style={{ objectFit: "cover", objectPosition: "center center" }}
          />
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>
              The original Fullarton Park Dental building: the stone property Dr. Filosi bought with low goodwill and transformed over a decade of deliberate renovation and growth
            </p>
          </div>
        </div>

        {/* FAQs */}
        <div
          className="mt-20 rounded-2xl px-8 py-10"
          style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <h2
            className="mb-8 text-xl font-bold text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-7">
            {faqs.map(({ q, a }) => (
              <div key={q}>
                <h3 className="mb-2 text-sm font-semibold text-white">{q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="mt-16 rounded-2xl px-8 py-10 text-center"
          style={{ background: "linear-gradient(135deg, rgba(201,169,110,0.12) 0%, rgba(28,39,68,0.4) 100%)", border: "1px solid rgba(201,169,110,0.2)" }}
        >
          <p
            className="mb-2 text-xs font-bold uppercase tracking-widest"
            style={{ color: "#C9A96E" }}
          >
            Join the Community
          </p>
          <h2
            className="mb-4 text-2xl font-bold text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Founders like Dr. Filosi build alongside each other at Gildre.
          </h2>
          <p className="mb-8 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Gildre is a global founder community for people building something real. Real conversations, real accountability, and connections with operators who have been through the build, the scale, and the exit. Apply to join.
          </p>
          <Link
            href="/apply"
            className="inline-block rounded-full px-8 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#C9A96E", color: "#080e1a" }}
          >
            Apply to Gildre
          </Link>
        </div>
      </article>
    </div>
  );
}
