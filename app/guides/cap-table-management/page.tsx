import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.gildre.com/guides/cap-table-management" },
  title: "Cap Table Management From Pre-Seed to Series A: The Founder's Equity Playbook | Gildre",
  description:
    "How to structure your cap table from day one through Series A — founder vesting, option pool sizing, seed round mechanics, and the red flags that kill deals. With benchmarks and a Series A readiness checklist.",
  keywords: [
    "cap table management startup",
    "cap table pre-seed to Series A",
    "startup equity structure",
    "founder vesting schedule",
    "option pool startup",
    "cap table red flags Series A",
    "startup cap table guide",
    "how to manage cap table",
    "equity dilution management",
    "Series A due diligence cap table",
    "authorized shares startup",
    "cap table software",
  ],
  openGraph: {
    title: "Cap Table Management From Pre-Seed to Series A: The Founder's Equity Playbook",
    description:
      "How to structure your cap table from day one through Series A — founder vesting, option pool sizing, seed round mechanics, and the red flags that kill deals.",
    type: "article",
    url: "https://www.gildre.com/guides/cap-table-management",
    images: [{ url: "https://www.gildre.com/images/cap-table-meeting-laptops.webp" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cap Table Management From Pre-Seed to Series A: The Founder's Equity Playbook",
  description:
    "How to structure your cap table from day one through Series A — founder vesting, option pool sizing, seed round mechanics, and the four red flags Series A investors look for.",
  image: "https://www.gildre.com/images/cap-table-meeting-laptops.webp",
  author: { "@type": "Organization", name: "Gildre", url: "https://www.gildre.com" },
  publisher: {
    "@type": "Organization",
    name: "Gildre",
    url: "https://www.gildre.com",
    logo: { "@type": "ImageObject", url: "https://www.gildre.com/images/gildre-logo.png" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.gildre.com/guides/cap-table-management" },
  keywords: "cap table management, pre-seed, seed round, Series A, founder vesting, option pool, equity dilution, startup equity structure",
  about: [
    { "@type": "Thing", name: "Cap Table Management" },
    { "@type": "Thing", name: "Startup Equity" },
    { "@type": "Thing", name: "Venture Capital" },
    { "@type": "Organization", name: "Gildre" },
  ],
  mentions: [
    { "@type": "Person", name: "Raquel Urtasun", sameAs: "https://en.wikipedia.org/wiki/Raquel_Urtasun", jobTitle: "Founder & CEO", worksFor: { "@type": "Organization", name: "Waabi" } },
    { "@type": "Organization", name: "Waabi", url: "https://waabi.ai", description: "Autonomous vehicle AI company founded by Raquel Urtasun" },
    { "@type": "Organization", name: "Uber", url: "https://www.uber.com", sameAs: "https://en.wikipedia.org/wiki/Uber" },
    { "@type": "Organization", name: "Nvidia", url: "https://www.nvidia.com", sameAs: "https://en.wikipedia.org/wiki/Nvidia" },
    { "@type": "Organization", name: "Carta", url: "https://carta.com", description: "Cap table management software" },
    { "@type": "Organization", name: "Pulley", url: "https://pulley.com", description: "Cap table management software" },
  ],
};

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="mb-4 mt-12 text-[1.5rem] font-bold text-white sm:text-[1.75rem]"
      style={{ fontFamily: "var(--font-fraunces)" }}
    >
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-2 mt-7 text-base font-bold text-white">{children}</h3>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
      {children}
    </p>
  );
}

function Callout({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div
      className="my-8 rounded-2xl p-7"
      style={{ backgroundColor: "rgba(201,169,110,0.06)", border: "1px solid rgba(201,169,110,0.15)" }}
    >
      {title && (
        <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-widest" style={{ color: "#C9A96E" }}>
          {title}
        </p>
      )}
      {children}
    </div>
  );
}

function RedFlag({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex gap-3 rounded-xl px-5 py-4"
      style={{ backgroundColor: "rgba(200,80,80,0.07)", border: "1px solid rgba(200,80,80,0.18)" }}
    >
      <span className="flex-shrink-0 font-bold text-sm mt-0.5" style={{ color: "rgba(255,150,150,0.8)" }}>✕</span>
      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,200,200,0.8)" }}>{children}</p>
    </div>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 items-start">
      <span className="flex-shrink-0 font-bold text-sm mt-0.5" style={{ color: "#C9A96E" }}>✓</span>
      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>{children}</p>
    </div>
  );
}

function Benchmark({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div
      className="rounded-xl p-5"
      style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
    >
      <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>{label}</p>
      <p className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-fraunces)" }}>{value}</p>
      <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{note}</p>
    </div>
  );
}

function EL({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "inherit", textDecorationLine: "underline", textDecorationColor: "rgba(201,169,110,0.45)", textDecorationStyle: "dotted", textUnderlineOffset: "3px" }}
    >
      {children}
    </a>
  );
}

function KeyTakeaway({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="my-6 rounded-xl px-6 py-4"
      style={{ backgroundColor: "rgba(201,169,110,0.08)", borderLeft: "3px solid #C9A96E" }}
    >
      <p className="mb-2 text-[0.6rem] font-bold uppercase tracking-widest" style={{ color: "#C9A96E" }}>
        Key Takeaway
      </p>
      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.82)" }}>
        {children}
      </p>
    </div>
  );
}

export default function CapTableManagementGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div style={{ backgroundColor: "#0f1524", minHeight: "100vh" }}>

        {/* Hero */}
        <section
          className="relative overflow-hidden px-6 pb-16 pt-32"
          style={{ background: "linear-gradient(160deg, #080e1a 0%, #1C2744 55%, #0a1020 100%)" }}
        >
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-10"
            style={{ background: "radial-gradient(ellipse, #C9A96E 0%, transparent 65%)" }}
          />
          <div className="relative mx-auto max-w-3xl">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span
                className="rounded-full px-3 py-1 text-[0.6rem] font-bold uppercase tracking-widest"
                style={{ backgroundColor: "rgba(164,123,91,0.2)", color: "#A67B5B" }}
              >
                Fundraising
              </span>
              <span
                className="rounded-full px-3 py-1 text-[0.6rem] font-bold uppercase tracking-widest"
                style={{ backgroundColor: "rgba(91,127,166,0.2)", color: "#5B7FA6" }}
              >
                Operations
              </span>
              <span className="text-[0.65rem]" style={{ color: "rgba(255,255,255,0.35)" }}>
                Gildre Founder Guide · 10 min read
              </span>
            </div>
            <h1
              className="text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.1] text-white"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Cap Table Management From Pre-Seed to Series A
            </h1>
            <p className="mt-5 text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.62)", maxWidth: "640px" }}>
              Your cap table is not just a record of who owns what. It&apos;s the financial story of every
              major decision you&apos;ve made — and Series A investors will read it that way. Here&apos;s how
              to structure it right from day one.
            </p>

            <div className="relative mt-10 overflow-hidden rounded-2xl" style={{ aspectRatio: "16/8" }}>
              <Image
                src="/images/cap-table-meeting-laptops.webp"
                alt="Founders reviewing cap table structure with financial documents"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </section>

        {/* Body */}
        <article className="mx-auto max-w-3xl px-6 pb-24 pt-4">

          {/* Opening quote */}
          <blockquote
            className="my-10 rounded-2xl p-8"
            style={{ backgroundColor: "rgba(201,169,110,0.05)", borderLeft: "4px solid #C9A96E" }}
          >
            <p className="text-lg leading-relaxed" style={{ color: "#e8dcc8", fontStyle: "italic" }}>
              &ldquo;When we raised our Series A, I discovered that our cap table wasn&apos;t just a spreadsheet
              — it was the story of every critical decision we&apos;d made. Having a strong cap table
              wasn&apos;t just about numbers; it became our strategic advantage in attracting top-tier investors.&rdquo;
            </p>
            <p className="mt-4 text-sm font-semibold" style={{ color: "#C9A96E" }}>
              — <EL href="https://en.wikipedia.org/wiki/Raquel_Urtasun">Raquel Urtasun</EL>, Founder of <EL href="https://waabi.ai">Waabi</EL> (raised $280M, backed by <EL href="https://www.uber.com">Uber</EL> and <EL href="https://www.nvidia.com">Nvidia</EL>)
            </p>
          </blockquote>

          <Body>
            The transition from pre-seed to Series A is the most consequential equity period of a
            startup&apos;s life. The decisions you make in the first 18–24 months — how many shares to
            authorize, how to structure founder vesting, how large to make your option pool — will
            either open doors or close them when institutional investors arrive.
          </Body>
          <Body>
            Most founders treat cap table management as an administrative task. The best founders
            treat it as a strategic one. This guide covers what to do at each stage, what to avoid,
            and how to know when you&apos;re Series A-ready.
          </Body>

          <KeyTakeaway>
            A clean cap table is not just an administrative record — it's a signal to Series A investors about your operational judgment. The three most common deal-breakers are excessive early dilution, a messy shareholder structure with too many small holders, and an option pool that's nearly exhausted before you raise.
          </KeyTakeaway>

          {/* Pre-seed */}
          <H2>Stage 1: Pre-Seed — Getting the Foundation Right</H2>
          <KeyTakeaway>
            At pre-seed, authorize 10–15 million shares and immediately put all founder equity on a four-year vest with a one-year cliff. These two decisions prevent the structural problems that most commonly derail Series A fundraising — and they're far harder to fix retroactively.
          </KeyTakeaway>
          <Body>
            At pre-seed, your cap table looks deceptively simple: a few founders splitting 100%.
            This is exactly when structural mistakes are easiest to make and hardest to unwind later.
            Two decisions matter most.
          </Body>

          <H3>Authorized shares</H3>
          <Body>
            Authorize between 10 and 15 million shares at incorporation. This range gives you enough
            room to grant options, bring on early investors, and handle future dilution rounds without
            amending your certificate of incorporation — a process that requires legal fees and
            shareholder approval. Starting too low (e.g., 1M shares) forces you to do a stock split
            later, which is a nuisance. Starting too high signals inexperience without any benefit.
          </Body>

          <H3>Founder vesting</H3>
          <Body>
            Implement a vesting schedule for all founder shares immediately — even if it feels
            unnecessary when everyone is aligned and excited. Standard structure: four-year vest
            with a one-year cliff, meaning founders earn 25% of their shares after 12 months and
            the remaining 75% monthly over the following three years.
          </Body>

          <Callout title="Why founder vesting matters to investors">
            <Body>
              A co-founder who leaves after six months with a significant chunk of equity creates
              a structural problem for the company — and a red flag for investors. Vesting protects
              the cap table against this scenario and signals to Series A investors that you&apos;ve
              thought about governance from the start. Founders who skip vesting at pre-seed almost
              always regret it.
            </Body>
          </Callout>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <Benchmark label="Authorized shares" value="10–15M" note="Standard range at incorporation" />
            <Benchmark label="Founder vesting" value="4 years" note="With 1-year cliff" />
            <Benchmark label="Founders equity" value="80–100%" note="Before any external capital" />
          </div>

          {/* Seed */}
          <H2>Stage 2: Seed — The Option Pool and Equity Balancing Act</H2>
          <KeyTakeaway>
            Create your employee option pool before your seed round closes, not after. Option pool expansion is calculated pre-money and dilutes existing shareholders — front-loading this dilution once across the seed round is significantly cheaper than taking it twice across seed and Series A separately.
          </KeyTakeaway>
          <Body>
            As you enter the seed stage, your cap table begins to earn its complexity. New investors
            are arriving, early hires are joining, and every equity decision has downstream
            consequences for future rounds. Three things to get right.
          </Body>

          <H3>Create your option pool before the seed round closes</H3>
          <Body>
            Create an employee option pool of 10–15% before your seed round closes, not after.
            This matters because option pool expansion is typically calculated pre-money — meaning
            it dilutes founders and existing shareholders, not new investors. If you create the pool
            after the round, you&apos;ll need to expand it at Series A, which happens pre-money and
            dilutes you again. Front-load the dilution once.
          </Body>

          <H3>Grant equity strategically, not reactively</H3>
          <Body>
            Two principles to live by for early option grants:
          </Body>
          <div className="mt-4 flex flex-col gap-3">
            {[
              { title: "Reserve larger grants for senior hires", body: "Early-stage companies need experienced operators to scale. Key executive hires — a VP of Sales, CTO, or COO — warrant meaningful equity packages. Avoid distributing significant equity too broadly to early individual contributors; it depletes your pool before you can make the hires that matter most." },
              { title: "Maintain a buffer for unexpected needs", body: "Your hiring plan will change. Markets shift, opportunities emerge, and key personnel need retention packages. Keep 3–5% unallocated within your option pool so you can respond to these situations without requiring a shareholder vote to expand the pool every time." },
            ].map((item, i) => (
              <div key={i} className="rounded-xl p-5" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <p className="font-bold text-white text-sm mb-2">{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>{item.body}</p>
              </div>
            ))}
          </div>

          <H3>Standardize vesting for all grants</H3>
          <Body>
            Apply the same four-year, one-year cliff schedule to employee grants as you used for
            founders. Consistency matters for two reasons: it simplifies cap table management, and
            it prevents early employees from negotiating bespoke terms that create messy precedents
            for future hires.
          </Body>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <Benchmark label="Option pool size" value="10–15%" note="Created pre-seed round, pre-money" />
            <Benchmark label="Buffer to reserve" value="3–5%" note="Unallocated within pool" />
            <Benchmark label="Employee vesting" value="4yr / 1yr" note="Same as founder schedule" />
          </div>

          {/* Board room image */}
          <div className="relative my-10 overflow-hidden rounded-2xl" style={{ aspectRatio: "16/10" }}>
            <Image
              src="/images/cap-table-board-room.webp"
              alt="Startup team reviewing Series A cap table strategy in a board room"
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
            />
          </div>

          {/* Series A prep */}
          <H2>Stage 3: Series A — What Investors Actually Scrutinize</H2>
          <KeyTakeaway>
            Series A investors look for four things in your cap table: founders owning 60–70%+ combined, fewer than 15–20 shareholders, 8–12% remaining in the option pool, and no unusual investor rights or side letters. Any of these out of range becomes a negotiating lever against you at the term sheet stage.
          </KeyTakeaway>
          <Body>
            Series A investors will spend meaningful time on your cap table during due diligence.
            They&apos;re not just checking numbers — they&apos;re reading the decisions you made and forming
            an opinion about your judgment. Four patterns kill deals or give investors leverage in
            negotiations.
          </Body>

          <div className="mt-6 flex flex-col gap-3">
            <RedFlag>
              <strong>Excessive early dilution.</strong> If founders are below 40–50% ownership before Series A,
              investors will worry about alignment and the ability to retain you through future rounds.
              Seed rounds giving away 30%+ are a warning sign. Benchmark: most founders entering Series A
              own 60–70% combined (post-seed, pre-Series A).
            </RedFlag>
            <RedFlag>
              <strong>Too many small shareholders.</strong> A cap table with 20+ individual investors holding
              small positions creates governance complexity, makes future consent solicitations expensive,
              and signals disorganized fundraising. Series A investors prefer a clean structure with a
              manageable number of shareholders.
            </RedFlag>
            <RedFlag>
              <strong>Insufficient option pool.</strong> If your option pool is nearly exhausted before Series A,
              investors know they&apos;ll need to require you to expand it — which dilutes you, not them —
              before the round closes. They will factor this into valuation negotiations. Having 8–12%
              of fully diluted shares available in the pool signals you&apos;ve planned ahead.
            </RedFlag>
            <RedFlag>
              <strong>Unusual terms from early investors.</strong> Information rights beyond standard, broad
              veto powers, MFN clauses, or side letters with unusual provisions make future round
              negotiations complicated and create legitimate concern about governance. These terms
              are sometimes unavoidable with early angels, but should be flagged and managed proactively.
            </RedFlag>
          </div>

          {/* Ongoing management */}
          <H2>Ongoing Management: Four Habits That Prevent Cap Table Chaos</H2>

          <H3>1. Use software, not spreadsheets</H3>
          <Body>
            Spreadsheets work at pre-seed with two founders. By the time you have 15 option holders,
            two convertible notes, and a seed round with SAFE investors, manual tracking becomes
            error-prone and due diligence-hostile. Cap table management platforms (<EL href="https://carta.com">Carta</EL>, <EL href="https://pulley.com">Pulley</EL>,
            Captable.io) automate vesting calculations, model financing scenarios, and generate
            investor-ready reports on demand. This is one of the highest-ROI infrastructure
            investments an early-stage company can make.
          </Body>

          <H3>2. Quarterly reviews</H3>
          <Body>
            Schedule 30 minutes every quarter to audit your cap table for accuracy. Specifically:
            verify that all vesting milestones have been recorded correctly, confirm that any
            transfers or secondary sales are reflected, check your remaining option pool balance
            against your hiring plan for the next 6–12 months, and update shareholder contact
            information. Small errors compound into large problems during due diligence.
          </Body>

          <H3>3. Documentation discipline</H3>
          <Body>
            Every equity event generates a document. Every document needs to be filed and retrievable.
            The minimum set: board approvals for all option grants, signed stock purchase agreements,
            investor rights agreements, SAFE and convertible note instruments, and transfer documentation
            for any secondary sales. Investors will ask for all of these in a data room — not being
            able to produce them quickly is a yellow flag even when the underlying equity is properly
            structured.
          </Body>

          <H3>4. Record transfers immediately</H3>
          <Body>
            When an investor sells their position, when equity is transferred as part of an
            agreement, or when a former employee&apos;s unvested shares are recaptured — update the
            cap table the same week. Stale records create discrepancies that are time-consuming
            to reconcile and confusing to new investors trying to understand the ownership structure.
          </Body>

          {/* Series A readiness */}
          <H2>Series A Readiness Checklist</H2>
          <Body>
            Before entering a Series A process, your cap table should be able to pass this review:
          </Body>
          <div className="mt-5 flex flex-col gap-3 rounded-2xl p-6" style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
            {[
              "Founders own 60–70%+ combined on a fully diluted basis",
              "Option pool has 8–12% remaining (or a credible plan to expand it pre-close)",
              "Fewer than 15–20 individual shareholders; clean investor list",
              "All vesting schedules are on the standard 4-year/1-year cliff structure",
              "No unusual investor rights, broad veto powers, or unexplained side letters",
              "40–50% of fully diluted equity reserved for future rounds post-Series A",
              "All equity events documented: board approvals, signed agreements, transfer records",
              "Cap table is maintained in dedicated software, not a spreadsheet",
              "Shareholder contact information is current and complete",
              "No gaps or discrepancies between the cap table and corporate records",
            ].map((item, i) => (
              <CheckItem key={i}>{item}</CheckItem>
            ))}
          </div>

          <Callout title="The longer view">
            <Body>
              The founders who navigate from pre-seed to Series A smoothly are rarely the ones
              with the most complex equity structures. They&apos;re the ones who made simple, consistent
              decisions early and kept meticulous records of them. A clean cap table doesn&apos;t just
              make due diligence easier — it reflects the kind of operational discipline that
              investors interpret as a signal about everything else you do.
            </Body>
          </Callout>

          {/* CTA */}
          <div
            className="mt-8 rounded-2xl p-8 text-center"
            style={{ background: "linear-gradient(135deg, #1a2540 0%, #0f1a2e 100%)", border: "1px solid rgba(201,169,110,0.2)" }}
          >
            <p className="mb-2 text-[0.65rem] font-bold uppercase tracking-widest" style={{ color: "#C9A96E" }}>
              Gildre Founder Community
            </p>
            <p className="mb-3 text-xl font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
              Work through your cap table decisions with founders who&apos;ve been there.
            </p>
            <p className="mb-6 text-sm leading-relaxed mx-auto max-w-md" style={{ color: "rgba(255,255,255,0.55)" }}>
              Equity structure questions — how to size your option pool, how to handle a difficult
              investor term, how to model Series A dilution — are exactly the kind of decisions
              that benefit from peer input. Gildre members navigate these questions together.
            </p>
            <a
              href="/#pricing"
              className="inline-block rounded-full px-8 py-3 text-sm font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
            >
              Join Gildre →
            </a>
          </div>

        </article>
      </div>
    </>
  );
}
