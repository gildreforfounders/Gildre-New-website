import Image from "next/image";
import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://www.gildre.com/blog/nancy-yen-omielife-omiebox-24-million-bootstrapped" },
  title: "Nancy Yen: The First-Generation Immigrant Who Bootstrapped OmieLife to $24 Million, Got Kylie Jenner to Post Without Being Asked, and Never Took a Dollar of Outside Capital | Gildre",
  description:
    "Nancy Yen moved to the US from Taiwan at age 9 without speaking English. She earned a Williams degree, a Stanford MBA, and built a career across consulting, Gap, and LexisNexis. Then her son stopped eating his school lunch, and she built OmieLife.",
  keywords: [
    "Nancy Yen",
    "OmieLife",
    "OmieBox",
    "bootstrapped consumer product",
    "founder story",
    "kids lunch box startup",
    "CPG founder",
    "bootstrapped to $24 million",
    "physical product startup",
    "Kylie Jenner OmieBox",
    "bento box startup",
    "first generation immigrant founder",
    "Stanford MBA founder",
    "Williams College entrepreneur",
    "hard goods startup",
    "consumer product startup",
    "Start to Scale podcast",
    "Gildre member founder",
    "mom founder",
    "product market fit",
  ],
  openGraph: {
    url: "https://www.gildre.com/blog/nancy-yen-omielife-omiebox-24-million-bootstrapped",
    title: "Nancy Yen: How a Mom's Lunchtime Problem Became OmieLife, a $24 Million Business That Got Kylie Jenner to Post Without Being Paid",
    description:
      "Nancy Yen moved to the US at 9, earned a Stanford MBA, built a career across consulting and Gap and LexisNexis, then bootstrapped OmieLife to $24 million after her son stopped eating his school lunch. Kylie Jenner posted about OmieBox to 64 million views. Nobody paid her to.",
    type: "article",
    images: [
      {
        url: "https://www.gildre.com/images/community/friends.webp",
        width: 2500,
        height: 1667,
        alt: "Nancy Yen, founder and CEO of OmieLife, on the Start to Scale podcast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nancy Yen: Bootstrapped OmieLife to $24 Million, Got Kylie Jenner to Post Without Being Paid",
    description:
      "First-generation immigrant. Williams. Stanford MBA. Gap. LexisNexis. Then her son stopped eating his school lunch and she built a $24 million business around fixing it.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Nancy Yen: The First-Generation Immigrant Who Bootstrapped OmieLife to $24 Million, Got Kylie Jenner to Post Without Being Asked, and Never Took a Dollar of Outside Capital",
  description:
    "Nancy Yen is the founder and CEO of OmieLife, maker of the OmieBox, an insulated bento lunch box that keeps hot and cold food at separate temperatures in the same container. She bootstrapped the company to $24 million in annual revenue, sells in 41 countries and at Target, and has never paid an influencer. Kylie Jenner posted about OmieBox to 64 million views without being gifted or paid. Nancy joined Taiga Gamell on the Start to Scale podcast to share how she built it, what she got wrong, and what every founder needs to hear about failure.",
  image: "https://www.gildre.com/images/community/friends.webp",
  datePublished: "2026-08-21",
  dateModified: "2026-08-21",
  author: {
    "@type": "Organization",
    name: "Gildre",
    url: "https://www.gildre.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Gildre",
    logo: { "@type": "ImageObject", url: "https://www.gildre.com/images/gildre-logo.png" },
  },
  mainEntityOfPage: "https://www.gildre.com/blog/nancy-yen-omielife-omiebox-24-million-bootstrapped",
  about: [
    { "@type": "Person", name: "Nancy Yen", jobTitle: "Founder & CEO", worksFor: { "@type": "Organization", name: "OmieLife" } },
    { "@type": "Thing", name: "Consumer Product Startups" },
    { "@type": "Thing", name: "Bootstrapped Business" },
    { "@type": "Thing", name: "Hard Goods Manufacturing" },
    { "@type": "Thing", name: "Organic Growth" },
  ],
  keywords:
    "Nancy Yen, OmieLife, OmieBox, bootstrapped CPG, physical product startup, Kylie Jenner, mom founder, first generation immigrant, Stanford MBA, $24 million ARR, organic growth, hard goods manufacturing",
};

const faqs = [
  {
    q: "What is OmieBox and what makes it different from a bento box?",
    a: "OmieBox is a children's insulated lunch box that keeps hot and cold foods at separate temperatures in the same container. The key difference from a standard bento box is that you can pack a warm main course, like pasta, soup, or a rice bowl, alongside cold sides like fruit or vegetables, and the box will maintain both temperatures until lunchtime. The bento-style layout means everything is visible at once, which matters because young children want to see all their options before they decide what to eat. OmieLife makes two hero products: OmieBox for ages three and up, and OmieBox Up for ages nine and older who want something sleeker and larger.",
  },
  {
    q: "How did Nancy Yen bootstrap OmieLife to $24 million without outside investors?",
    a: "Nancy raised a small amount from friends and family to get started, but beyond that the business has been self-funded. The company became profitable relatively early and has stayed that way. Nancy attributes this to staying focused on the children's product space rather than chasing adult markets before the brand had permission to go there, keeping the team lean and culture efficient, investing in profit centers like design and engineering rather than cost centers, and building up consistent organic demand through a passionate community of parents who post their lunches without being paid to do so.",
  },
  {
    q: "How did Kylie Jenner end up posting about OmieBox?",
    a: "She just bought one. OmieLife did not gift it to her. She posted a TikTok packing lunch for her daughter Stormi in an OmieBox and it reached 64 million views. This was not the result of an influencer campaign or any paid arrangement. It happened because a large community of parents had already been organically posting about OmieBox for years, which put it in front of enough people that celebrities were discovering it on their own. Nancy says the organic community came first, and the large influencer moments followed from that foundation.",
  },
  {
    q: "How does OmieLife protect itself from copycats and dupes?",
    a: "OmieLife holds an extensive intellectual property portfolio covering patents, design patents, trademarks, and copyright. Nancy came from LexisNexis, a legal research platform, and used that background to write many of her own patents and read her own contracts. That said, she is candid that IP protection only goes so far. Sophisticated copiers typically study patents and design around them rather than producing outright counterfeits, which makes legal action expensive and uncertain. OmieLife's strategy is to stay ahead through continuous product development and brand building rather than trying to litigate every dupe.",
  },
  {
    q: "What does Nancy Yen look for when hiring?",
    a: "Nancy's core philosophy is to invest in profit centers and not cost centers. The roles she prioritizes are people who will directly generate more revenue: design and engineering to accelerate the product roadmap, and dedicated retail teams to manage the documentation, shipping requirements, and buyer relationships at major accounts like Target and Walmart. She also screens for people who fit a culture of independence and flexibility, since much of the team are parents themselves who need the freedom to handle the unpredictability of family life.",
  },
  {
    q: "What advice does Nancy Yen give founders before leaving their day job?",
    a: "Make sure you have enough savings to cover your basic expenses for at least two years, especially if you are building a physical product where there will be no revenue for a significant stretch. Have a financial plan that does not depend on the business generating income before it is ready. And do not be afraid to fail, because you will. The goal is not to avoid mistakes but to get better at recovering from them.",
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

const careerSteps = [
  { era: "Monitor Group", detail: "Four years in management consulting, including two years in Hong Kong with the Asia Pacific practice. Learned to solve problems across every industry with imperfect information." },
  { era: "Stanford GSB", detail: "Earned her MBA. Still not drawn to entrepreneurship at the time. Explored banking briefly before finding her footing in retail." },
  { era: "Gap", detail: "Five years in product development and P&L management across clothing, bags, and sleepwear. Learned manufacturing, design iteration, colorways, unit buys, and what it means to run a retail business." },
  { era: "LexisNexis", detail: "Five years at a legal research platform. Read legal contracts daily, understood patent writing, and developed the IP fluency that would later protect OmieLife." },
  { era: "OmieLife", detail: "Founded in 2012 after her son stopped eating his school lunch. Bootstrapped to $24 million ARR. Sells in 41 countries. In Target, Walmart, and on Amazon." },
];

function Section({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="mb-4 mt-14 text-2xl font-bold text-white"
      style={{ fontFamily: "var(--font-fraunces)" }}
    >
      {children}
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

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="my-10 rounded-2xl px-6 py-5"
      style={{ backgroundColor: "rgba(201,169,110,0.07)", border: "1px solid rgba(201,169,110,0.18)" }}
    >
      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
        {children}
      </p>
    </div>
  );
}

export default function NancyYenBlog() {
  return (
    <div style={{ backgroundColor: "#0f1524", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
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
              Founder Story
            </span>
            <span className="text-[0.65rem]" style={{ color: "rgba(255,255,255,0.35)" }}>
              Consumer Products · Bootstrapped · Organic Growth · Hard Goods
            </span>
          </div>
          <h1
            className="text-[clamp(1.9rem,4.5vw,3.25rem)] font-bold leading-[1.1] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Nancy Yen Bootstrapped OmieLife to $24 Million.{" "}
            <span style={{ color: "#C9A96E" }}>
              Kylie Jenner Posted Without Being Asked. Nobody Paid a Single Influencer.
            </span>
          </h1>
          <p className="mt-5 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Nancy Yen moved to the US from Taiwan at nine years old without speaking a word of English. She earned a degree from Williams, an MBA from Stanford, and built a career across consulting, Gap, and LexisNexis. Then her son stopped eating his school lunch. She decided to fix it. Fourteen years later, OmieLife does $24 million a year, sells in 41 countries, and has never paid an influencer.
          </p>
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
              <span>Consumer Products · Bootstrapped · Growth</span>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="mx-auto max-w-3xl px-6 py-16">

        {/* Hero image */}
        <div className="mb-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=80"
            alt="A colorful bento lunch box packed with warm and cold foods, representing the OmieBox's core innovation of keeping hot and cold food at separate temperatures"
            width={1200}
            height={675}
            className="w-full object-cover"
          />
          <p className="px-4 py-2.5 text-xs italic" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "rgba(0,0,0,0.2)" }}>
            Nancy Yen, founder and CEO of OmieLife, on the Start to Scale podcast. Find her on{" "}
            <a href="https://www.linkedin.com/in/nancyyen1/" target="_blank" rel="noopener noreferrer" style={{ color: "#C9A96E" }}>LinkedIn</a>. (Photo: Unsplash)
          </p>
        </div>

        <Callout>
          <strong style={{ color: "#C9A96E" }}>At a glance:</strong>{" "}
          Nancy Yen is the founder and CEO of{" "}
          <a href="https://www.omielife.com" target="_blank" rel="noopener noreferrer" style={{ color: "#C9A96E" }}>OmieLife</a>,
          maker of the OmieBox, a bento-style lunch box that keeps hot and cold food at separate temperatures. She bootstrapped the company to $24 million in annual revenue, sells across 41 countries, is stocked at Target and Walmart, and built the entire growth engine without a single paid influencer campaign. Kylie Jenner posted about OmieBox to 64 million views after simply buying one herself. Nancy joined Taiga Gamell on the Start to Scale podcast to talk about the fourteen-year journey, the obsession behind the product, and what she would tell every founder about failure.
        </Callout>

        {/* Section 1 */}
        <Section>A Mother&apos;s Problem. A New Category.</Section>

        <Body>
          It started with an uneaten lunch. Nancy&apos;s son was on the smaller side as a preschooler, and she was worried he was not growing well. The issue was not picky eating. It was the container. He wanted hot food like he had at home, but she had no good way to pack it for school alongside the fruit and vegetables she also wanted him to eat. Standard lunch boxes kept things at one temperature. Standard bento boxes did not solve for hot and cold together.
        </Body>

        <Body>
          She looked for a solution and could not find one. So she invented it. That is how OmieBox was born: out of a specific, frustrating, daily problem that no existing product was solving.
        </Body>

        <Quote>
          A mother&apos;s problem is oftentimes the impetus to a new creation. That&apos;s how I guess I invented OmieBox from that need I saw as a mother.
        </Quote>

        <Body>
          OmieBox keeps hot food hot and cold food cold in the same insulated container, laid out in a bento style so a child can see everything at once and decide what to eat. The bento layout is not aesthetic. It is functional: kids do not want to open multiple containers at lunch. They want to see everything, decide, eat, and go play.
        </Body>

        <Body>
          Today OmieLife makes two hero products. OmieBox for children ages three and up. OmieBox Up for children nine and older who want something sleeker and larger. The accessories line spans 24 colorways of dip containers, bags, water bottles, cooler pouches, and snack containers. And a new product, OmieBox Light, featuring a hidden treasure pocket where parents can tuck in a note, a small toy, or a treat, just launched.
        </Body>

        {/* Section 2 */}
        <Section>The Unlikely Path to a $24 Million Business</Section>

        {/* Career timeline */}
        <div className="my-10 flex flex-col gap-0 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
          {careerSteps.map((step, i) => (
            <div
              key={step.era}
              className="flex items-start gap-5 px-6 py-5"
              style={{
                borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.06)",
                backgroundColor: i % 2 === 0 ? "rgba(255,255,255,0.015)" : "transparent",
              }}
            >
              <span
                className="mt-0.5 min-w-[110px] text-xs font-bold uppercase tracking-widest"
                style={{ color: "#C9A96E" }}
              >
                {step.era}
              </span>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.58)" }}>
                {step.detail}
              </p>
            </div>
          ))}
        </div>

        <Body>
          Nancy grew up in a traditional immigrant household. Her parents moved the family to the US from Taiwan when she was nine. She arrived not speaking a word of English and figured it out quickly, the way children do when there is no alternative. Her parents, who still do not speak great English today, were focused on discipline and academic rigor in the way that first-generation immigrant families often are. There was a lot Nancy had to figure out on her own, because no one in her household could guide her through it.
        </Body>

        <Body>
          She went to Williams thinking she would become a doctor or a lawyer, the standard immigrant-family career track. She discovered she was not interested in either. She spent four years at Monitor Group in consulting, including two years in Hong Kong, solving problems across industries. Then Stanford for her MBA. Then Gap for five years, where she learned product design, P&L management, manufacturing, and everything that comes with running a real retail business. Then LexisNexis for five years, where she spent her days reading legal contracts and developing fluency in intellectual property that would later protect her company.
        </Body>

        <Body>
          Looking back, she questioned her own career at the time. Most of her classmates went deep in one thing. She kept jumping. She wondered if she was spreading herself too thin. She was not. Every piece of that experience stacked into something she would need when she started OmieLife: the consulting problem-solving, the Gap manufacturing knowledge, the LexisNexis legal fluency, the financial modeling from banking. She could not have built OmieLife without all of it.
        </Body>

        <Quote>
          I&apos;m not an expert in anything, but I know enough to not get into trouble. That&apos;s the benefit of a very diverse career.
        </Quote>

        {/* Mid image 1 */}
        <div className="my-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
          <Image
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
            alt="A founder working through product design decisions, representing the obsessive iteration Nancy Yen applied to every detail of OmieBox"
            width={1200}
            height={675}
            className="w-full object-cover"
          />
          <p className="px-4 py-2.5 text-xs italic" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "rgba(0,0,0,0.2)" }}>
            Nancy hired an industrial designer, built cardboard models, and tested prototypes with real parents before writing a single line of tooling. (Photo: Unsplash)
          </p>
        </div>

        {/* Section 3 */}
        <Section>Building a Physical Product From Scratch</Section>

        <Body>
          Nancy knew what she wanted to build but had never designed a hard good. Her Gap experience was entirely soft goods: clothing, bags, sleepwear. She needed help.
        </Body>

        <Body>
          The first call she made was to hire the right people. She teamed up with Robin Biggio, a talented industrial designer who was at a leading design firm at the time. Together they sketched the product, built cardboard look-alike models, and tested them with parents to validate that the compartments had enough space for everything families actually pack. Then they brought in a young engineer to convert the designs into 3D CAD files and began a long cycle of 3D printing, prototyping, and testing.
        </Body>

        <Body>
          The product did not move until she had those two people: the industrial designer and the engineer. That was the unlock.
        </Body>

        <Body>
          From there, the manufacturing reality set in. No large factory will take a risk on an unproven company making a product that does not yet exist. Nancy started with a small factory and spent weeks at a time on-site. Three or four weeks in the factory town, multiple times a year. She could not fix what she could not see.
        </Body>

        <Quote>
          A very experienced entrepreneur told me: you need to have boots on the ground. He was a hundred percent right. There are so many things that happen in a day during production that you cannot notice or change unless you are physically there.
        </Quote>

        <Body>
          The testing protocol at OmieLife is a hundred pages long. A robot arm opens and closes the latch 6,000 times, running around the clock. Multiple dishwashers run cycles all day for weeks to test durability. The company microwaves products and then dishwashes them to simulate real use. Everything is tested with third-party safety agencies. When they developed their toddler plate in a new material called PLA, made from fermented cassava or corn and fully compostable, they had to build an entire new testing process from scratch because no one had done it before with that material.
        </Body>

        <Callout>
          <strong style={{ color: "#C9A96E" }}>Why the obsession matters:</strong>{" "}
          Nancy wanted the latch click to feel right. Not just functional, not just adequate, but right. When you click the OmieBox latch, there is an audible, satisfying click that you can do with one thumb. That is not an accident. It is the result of testing cycles specifically designed to get that click right. The product is the marketing.
        </Callout>

        {/* Section 4 */}
        <Section>The Organic Growth Engine Nobody Paid For</Section>

        {/* Mid image 2 */}
        <div className="my-10 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
          <Image
            src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=1200&q=80"
            alt="A mother using her phone to share content, representing the organic community of parents who built OmieLife's brand before any influencer campaign existed"
            width={1200}
            height={675}
            className="w-full object-cover"
          />
          <p className="px-4 py-2.5 text-xs italic" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "rgba(0,0,0,0.2)" }}>
            It started with moms who just loved packing lunch and wanted to share it. Kylie Jenner was watching. (Photo: Unsplash)
          </p>
        </div>

        <Body>
          OmieLife has never paid an influencer. The growth started with a group of parents, mostly mothers, who loved packing lunch for their kids and loved showing other parents what they were packing. They were organically posting, adding hashtags, sharing their OmieBox lunches on social with nothing to gain except the appreciation of people who understood. They got a lot of likes. The community grew.
        </Body>

        <Body>
          That organic base is what eventually put OmieBox in front of the kind of people who have 100 million followers. Kylie Jenner posted a TikTok packing lunch for her daughter Stormi in an OmieBox. She bought it herself. No gift, no outreach, no campaign. The post reached 64 million views.
        </Body>

        <Body>
          Nancy is direct about why this kind of moment cannot be bought. You can spend a million dollars on an influencer campaign and have it fall flat because the influencer does not genuinely love the product and will not post about it more than once. The organic community came first. The Kylie Jenner post was a downstream consequence of that foundation, not a strategy.
        </Body>

        <Body>
          The same logic is how OmieLife got into Target. Nancy had approached Target early on and was told the product was not a fit for their assortment at the time. So she focused on building the brand. She built the social presence. She let the KOL community grow. A decade later, Target reached out to OmieLife because customers were already searching for OmieBox on Target.com. The demand existed before the listing did.
        </Body>

        <Quote>
          It is really hard to just buy your way into it. You kind of want that to come from a really organic place where people are loving posting it and willingly doing so without having been paid.
        </Quote>

        {/* Section 5 */}
        <Section>The Hard Goods Reality Nobody Talks About</Section>

        <Body>
          Nancy pushes back on the idea that it is easier to start a business now than it was a decade ago, at least for physical products. AI has made many things easier. Graphic design, customer support, website maintenance, content creation. She uses it herself and her team is more productive because of it.
        </Body>

        <Body>
          But the physical side of a hard goods business has not gotten easier. It has gotten harder. Tariffs are higher. Material costs have gone up. Currency movements have squeezed margins. Shipping, logistics, and storage costs have all increased. And the competitive environment is brutal: sophisticated copycat operations can reverse-engineer and list a competing product on Amazon or TikTok Shop within a year of your launch. They do not make outright counterfeits. They study your patents and design around them. Legal action is expensive, slow, and uncertain.
        </Body>

        <Body>
          OmieLife&apos;s answer to the copycat problem is not litigation. It is speed. Keep building. Keep expanding the product line. Let the dupes serve the price-sensitive end of the market. Focus on building a brand that commands a premium.
        </Body>

        {/* Section 6 */}
        <Section>How to Build LTV Into a Product That Lasts 6,000 Cycles</Section>

        <Body>
          OmieBox is built to last. A machine opens and closes the latch 6,000 times. That is a problem for lifetime value. Nancy solved it with a system that gives customers multiple reasons to keep buying.
        </Body>

        <ul className="mb-8 flex flex-col gap-4 pl-0">
          {[
            {
              label: "Accessories in every color",
              body: "OmieLife makes 24 shades of dip containers, all matching the hero products. Customers collect them. Some people have entire drawers full of them. A new color is not a replacement purchase, it is an additional one.",
            },
            {
              label: "New colorways every couple of years",
              body: "OmieBox releases new colors on a regular cycle. The colorways are compelling enough that customers buy multiples. Last year they launched five new colors and sold them as new products, not replacements.",
            },
            {
              label: "The age continuum",
              body: "OmieBox for ages 3 and up, then OmieBox Up for ages 9 and older. A child grows out of one and into the other. The customer relationship continues across years of school lunches rather than ending at one purchase.",
            },
            {
              label: "The accessories ecosystem",
              body: "Bags, water bottles, cooler pouches, snack containers, dip containers. Every lunch packed with an OmieBox is an opportunity to add another matching piece. The hero product is the entry point, not the whole product.",
            },
          ].map((item) => (
            <li
              key={item.label}
              className="flex items-start gap-4 rounded-2xl p-5"
              style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <span
                className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold"
                style={{ backgroundColor: "rgba(201,169,110,0.12)", color: "#C9A96E" }}
              >
                ✓
              </span>
              <div>
                <p className="text-sm font-bold text-white">{item.label}</p>
                <p className="mt-1 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* Section 7 */}
        <Section>Hire Profit Centers, Not Cost Centers</Section>

        {/* Mid image 3 */}
        <div className="my-10 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
            alt="A small, passionate team working together in a startup, representing the culture Nancy Yen built at OmieLife around flexibility, independence, and shared obsession with the product"
            width={1200}
            height={675}
            className="w-full object-cover"
          />
          <p className="px-4 py-2.5 text-xs italic" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "rgba(0,0,0,0.2)" }}>
            A small team. A lot of moms. Full independence and flexibility. And a culture that screens for the kind of obsession the product demands. (Photo: Unsplash)
          </p>
        </div>

        <Body>
          Nancy&apos;s hiring philosophy is simple: invest in the roles that bring in revenue, not the ones that manage overhead.
        </Body>

        <Body>
          The two areas she prioritizes are design and engineering, because those directly expand the product roadmap, and dedicated account teams for major retailers like Target and Walmart, because managing those relationships is a full-time job. Reading compliance documentation, following shipping instructions precisely, maintaining relationships with buyers and buying teams. Getting that wrong costs you the account.
        </Body>

        <Body>
          Administrative and accounting functions, she handles more in-house, especially as AI makes those tasks faster. The rule is that every hire should have a clear line back to generating more revenue.
        </Body>

        <Body>
          The culture she has built reflects the team she has: mostly parents, mostly mothers. The philosophy is that you can be a great employee and still need to leave your desk to pick up a sick child or go on a school field trip. Independence and flexibility are not perks at OmieLife. They are the model. And that culture is what attracts the kind of people who are obsessive about the work when they are at it.
        </Body>

        {/* Section 8 */}
        <Section>The Only Advice That Actually Matters</Section>

        <Body>
          Nancy was asked for words of wisdom at the end of the conversation. She did not offer a framework or a five-step system. She gave a single instruction:
        </Body>

        <div
          className="my-10 rounded-2xl p-8 text-center"
          style={{ backgroundColor: "rgba(201,169,110,0.06)", border: "1px solid rgba(201,169,110,0.2)" }}
        >
          <p className="text-2xl font-bold text-white leading-snug" style={{ fontFamily: "var(--font-fraunces)" }}>
            Do not be afraid to fail,{" "}
            <span style={{ color: "#C9A96E" }}>because you are going to fail a lot.</span>
          </p>
          <p className="mt-4 text-sm leading-relaxed mx-auto max-w-md" style={{ color: "rgba(255,255,255,0.55)" }}>
            The goal is not to avoid making mistakes. That is impossible. The key thing is to figure out how to recover from them. Expect the failure. Build the recovery muscle. You will figure it out.
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-widest" style={{ color: "#C9A96E" }}>
            Nancy Yen, Founder &amp; CEO of OmieLife
          </p>
        </div>

        <Body>
          She said it plainly, as someone who has lived it. OmieLife tried to move into adult bento boxes and learned the brand did not yet have permission to play there. They pulled back and focused on what the brand was actually built for. That was a mistake and a recovery, and both were normal parts of the business.
        </Body>

        <Body>
          Fourteen years of building has taught her one thing above all else: resilience is the skill. Not strategy, not funding, not the right hire at the right time, though those all matter. The underlying capability is the ability to take a wrong turn, understand what happened, and keep going.
        </Body>

        {/* FAQ */}
        <Section>Common Questions About Nancy Yen and OmieLife</Section>

        <div className="mt-8 flex flex-col gap-4">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl"
              style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <summary
                className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-sm font-semibold text-white list-none"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                {item.q}
                <span
                  className="flex-shrink-0 text-lg font-light transition-transform group-open:rotate-45"
                  style={{ color: "#C9A96E" }}
                >
                  +
                </span>
              </summary>
              <div className="px-6 pb-5 pt-0">
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {item.a}
                </p>
              </div>
            </details>
          ))}
        </div>

        {/* Guest info */}
        <div
          className="mt-14 rounded-2xl px-7 py-6"
          style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#C9A96E" }}>
            Connect With Nancy
          </p>
          <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Nancy Yen is the founder and CEO of{" "}
            <a href="https://www.omielife.com" target="_blank" rel="noopener noreferrer" style={{ color: "#C9A96E" }}>OmieLife</a>.
            {" "}Find her on{" "}
            <a href="https://www.linkedin.com/in/nancyyen1/" target="_blank" rel="noopener noreferrer" style={{ color: "#C9A96E" }}>LinkedIn</a>.
            {" "}OmieBox is available at Target, Walmart, Amazon, and{" "}
            <a href="https://www.omielife.com/products/omiebox" target="_blank" rel="noopener noreferrer" style={{ color: "#C9A96E" }}>omielife.com</a>.
          </p>
        </div>

        {/* CTA */}
        <div
          className="mt-10 rounded-2xl px-8 py-10 text-center"
          style={{ backgroundColor: "rgba(201,169,110,0.06)", border: "1px solid rgba(201,169,110,0.2)" }}
        >
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
            Meet Founders Like Nancy
          </p>
          <h2
            className="mt-3 text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Join the community behind the builders.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Gildre connects founders at every stage with the right peers, mentors, and conversations. In-person chapters in{" "}
            <Link href="/chicago" style={{ color: "#C9A96E" }}>Chicago</Link>,{" "}
            <Link href="/nyc" style={{ color: "#C9A96E" }}>NYC</Link>,{" "}
            <Link href="/boston" style={{ color: "#C9A96E" }}>Boston</Link>,{" "}
            <Link href="/bayarea" style={{ color: "#C9A96E" }}>Bay Area</Link>,{" "}
            <Link href="/austin" style={{ color: "#C9A96E" }}>Austin</Link>,{" "}
            <Link href="/la" style={{ color: "#C9A96E" }}>LA</Link>, and{" "}
            <Link href="/seattle" style={{ color: "#C9A96E" }}>Seattle</Link>. $59/month. No equity.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://tally.so/r/VLERVa"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-9 py-3.5 text-sm font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
            >
              Apply for Membership
            </a>
            <Link
              href="/founder-community"
              className="text-sm font-semibold transition-opacity hover:opacity-70"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Learn how Gildre works
            </Link>
          </div>
        </div>

      </article>

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
          <a href="/" className="underline underline-offset-2 hover:text-zinc-400 transition-colors">
            Back to Gildre.com
          </a>
        </p>
      </div>
    </div>
  );
}
