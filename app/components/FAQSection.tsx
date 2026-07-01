"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQGroup = {
  category: string;
  items: FAQItem[];
};

const faqGroups: FAQGroup[] = [
  {
    category: "General",
    items: [
      {
        question: "What is Gildre?",
        answer:
          "Gildre is the premier knowledge community for ambitious founders, providing exclusive access to mentors, events, and tools to help you build a successful company.\n\nBuilding a company is a journey and you shouldn't have to do it alone. Partner with like-minded founders and experienced operators, allowing you to get faster insights and make better decisions.",
      },
      {
        question: "What is included in the Gildre membership?",
        answer:
          "At Gildre we focus on six central member benefits across our three membership tiers. Benefits scale as members qualify for higher tiers.\n\nResults-Driven Mentor Matches: Receive personalized, 1:1 mentorship specifically tailored to your industry and career goals. Our mentors are focused on helping you achieve measurable, transformative outcomes.\n\nCurated Connections: Genuine connections designed to facilitate long-lasting relationships. This isn't a one-and-done. Meet, develop, and build with others in the Gildre community.\n\nWorkshops & Events: Curated, interactive workshops designed to engage and bridge connections between members and mentors. Events include Executive Workshops, Innovation Roundtables, Founder Fireside Chats, In-Person Dinners & Networking Events, and Private Executive Coaching.\n\nEngaging Community: Access to a highly engaged digital community platform of entrepreneurs, mentors, and industry experts. With weekly AMAs, newsletters, and unique content just for you.\n\nCoaching & Education: Our mentors have decades of professional experience and we've hand-picked experts to bring in knowledge across every imaginable industry. You'll also receive access to business blueprints, practical tools, and a vast library of fundraising resources.\n\nPartnerships & Perks: Over $5M+ in exclusive tools, perks, and partnerships to accelerate your growth, whether launching a business or advancing your career.",
      },
      {
        question: "How do I apply for membership?",
        answer:
          "Ambitious individuals building their companies or looking to advance their career should feel free to apply through our application. Otherwise, if you've already spoken to someone at Gildre and know which program you want to join, you can select the plan that fits your current growth stage on our Membership page.",
      },
      {
        question: "What is the acceptance criteria for Gildre?",
        answer:
          "At Gildre our central thesis revolves around the concept of \"Community for all\". We prioritize applications that share our common values but recommend any individual join who is looking to make an impact in the world.\n\nWhether you're starting your first company, launching a new product, or just battle-testing a concept, it's important to have someone to share ideas with. At Gildre you'll have a community of hundreds of individuals to form your team, all supporting the same mission to build something amazing.",
      },
      {
        question: "Who are the members in the community?",
        answer:
          "At Gildre you'll find like-minded individuals all with a common goal of making an impact in the world. Whether that's changing the way a single customer does business or addressing a major social issue, our members are here to support and lift one another.\n\nWe are industry-agnostic and though we focus on tech-enabled businesses we have many members building companies in the Arts, CPG, and other core industries. We're currently based in North America but consider applications from members all around the world that align with our member network.",
      },
    ],
  },
  {
    category: "Mentorship",
    items: [
      {
        question: "How does 1:1 mentorship work?",
        answer:
          "As part of our white-glove onboarding, we'll ask you questions about what you're building and the current stage you're at. This allows us to find the best mentor in our community to help support your professional goals.\n\nOur mentors are volunteers who support Gildre through their passion for entrepreneurship and networking. They're founders, investors, executives, and startup leaders — many of whom have gone through the same issues you're facing daily.\n\nMembers and mentors typically meet 1-2 times per month to discuss a variety of topics. Whether you're looking for guidance on vetting your first product, making a key hire, or raising a future round, our mentors have got you covered. Who knows — you may even find your next advisor or co-founder in this process!",
      },
      {
        question: "How are the sessions structured?",
        answer:
          "Our mentors spend time learning about you and all facets of your business, so you gain a knowledgeable partner to guide you through the various stages of the founder journey. Most of our mentor-founder engagements last between 4-5 months before we optimize a new pairing for you to continue your scaling trajectory.",
      },
    ],
  },
  {
    category: "Events & Programming",
    items: [
      {
        question: "How many events are available per month?",
        answer:
          "We build our programming around our founders' goals and curate world-class speakers, panelists, and coaches to drive value across core areas. We have 3-4 Gildre-focused events per month both virtually and in-person, along with 2-3 ecosystem events per week — so you'll never run out of ways to continue growing your founder network.",
      },
      {
        question: "Are events virtual or in-person?",
        answer:
          "At Gildre we believe having a mix of both virtual and in-person events is critical to the development and growth of founders' networks.\n\nEach month we have 3-4 Gildre virtual events paired with quarterly in-person activities including intimate dinners, happy hours, co-working sessions, and more.",
      },
      {
        question: "What are Innovation Roundtables?",
        answer:
          "Innovation Roundtables are intimate, \"Founder-only\" sessions led by an Executive Mentor to cover the deep, realistic conversations that founders should be having. These are spaces to share successes — and most importantly, struggles throughout the entrepreneurial journey — in order to scale your business.\n\nWe host these workshops every month, focused on core topics determined by each Executive Mentor's expertise, to allow you to grow with your cohort and fellow founders.",
      },
    ],
  },
];

function FAQItem({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-b"
      style={{ borderColor: "rgba(255,255,255,0.07)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-6 py-5 text-left"
      >
        <span className="text-sm font-semibold text-white sm:text-base">
          {item.question}
        </span>
        <span
          className="mt-0.5 flex-shrink-0 transition-transform duration-300"
          style={{
            color: "#C9A96E",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "800px" : "0px" }}
      >
        <div className="pb-6">
          {item.answer.split("\n\n").map((para, i) => (
            <p key={i} className="mt-3 text-sm leading-relaxed first:mt-0" style={{ color: "rgba(255,255,255,0.55)" }}>
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" style={{ backgroundColor: "#0c1628" }}>
      <div className="mx-auto max-w-3xl px-6 py-24">

        {/* Header */}
        <div className="mb-16 text-center">
          <p
            className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]"
            style={{ color: "#C9A96E" }}
          >
            Got Questions?
          </p>
          <h2
            className="mt-3 text-[2rem] font-bold text-white sm:text-[2.5rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Frequently Asked{" "}
            <span style={{ color: "#C9A96E" }}>Questions</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-500">
            Everything you need to know about Gildre. Can&rsquo;t find the answer you&rsquo;re looking for?{" "}
            <a
              href="mailto:hello@gildre.com"
              className="underline underline-offset-4 transition-opacity hover:opacity-80"
              style={{ color: "#C9A96E" }}
            >
              Reach out to us.
            </a>
          </p>
        </div>

        {/* FAQ Groups */}
        <div className="flex flex-col gap-14">
          {faqGroups.map((group) => (
            <div key={group.category}>
              {/* Category label */}
              <div className="mb-2 flex items-center gap-3">
                <span
                  className="text-[0.65rem] font-bold uppercase tracking-[0.2em]"
                  style={{ color: "#C9A96E" }}
                >
                  {group.category}
                </span>
                <div className="flex-1 h-px" style={{ backgroundColor: "rgba(201,169,110,0.2)" }} />
              </div>

              {/* Items */}
              <div>
                {group.items.map((item, i) => (
                  <FAQItem key={i} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-16 rounded-2xl p-8 text-center"
          style={{
            backgroundColor: "#111e35",
            border: "1px solid rgba(201,169,110,0.15)",
          }}
        >
          <p className="text-base font-semibold text-white">
            Still have questions?
          </p>
          <p className="mt-2 text-sm text-zinc-500">
            Our team is happy to walk you through everything Gildre has to offer.
          </p>
          <a
            href="https://calendly.com/taiga-gildre/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block rounded-full px-7 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
          >
            Schedule a Call
          </a>
        </div>

      </div>
    </section>
  );
}
