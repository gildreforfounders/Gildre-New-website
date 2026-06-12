import Image from "next/image";

type Mentor = {
  name: string;
  title: string;
  company?: string;
  bio: string;
  photo: string;
  /** Photo-to-name match was guessed visually and should be verified. */
  unverified?: boolean;
};

const mentors: Mentor[] = [
  {
    name: "Diana Stepner",
    title: "Head of Product and Startup Executive",
    bio: "Diana is an established product leader who served as Vice President of Product at organizations including Chan Zuckerberg Initiative, Pearson, Kayak, SimplePractice, and Monster.com.",
    photo: "/mentors/diana-stepner.jpg",
    unverified: true,
  },
  {
    name: "Fritz Lanman",
    title: "CEO",
    company: "ClassPass & MindBody",
    bio: "Fritz is the CEO at ClassPass which attained unicorn status in 2019 with a $285M financing round. He led Microsoft's $240M Facebook investment in 2007, a deal now worth over $8 billion.",
    photo: "/mentors/fritz-lanman.png",
    unverified: true,
  },
  {
    name: "Krishna Dosapati",
    title: "Founder & CEO",
    company: "Clockout",
    bio: "Krishna is the Founder and CEO of the fastest-growing networking app Clockout, achieving $1.1M ARR in 10 months with over 500,000 downloads during their pre-seed beta.",
    photo: "/mentors/krishna-dosapati.jpg",
    unverified: true,
  },
  {
    name: "Chris Tsakalakis",
    title: "ex-President and Venture Partner",
    company: "StubHub and Serac Ventures",
    bio: "Chris has served in key C-Suite roles including President and CEO of StubHub, Vivino, and Kiva. He is currently the Managing Partner at Trefo and a Venture Partner through Serac Ventures.",
    photo: "/mentors/chris-tsakalakis.jpg",
    unverified: true,
  },
  {
    name: "Jayme Strauss",
    title: "Chief Commercial Officer",
    company: "Precision Neuroscience",
    bio: "Jayme has pioneered clinical advancements in Neurotech, Healthcare, AI, and Medical Devices for over 15 years across multiple startups including Viz.ai and Precision Neuroscience.",
    photo: "/mentors/jayme-strauss.jpg",
    unverified: true,
  },
  {
    name: "David Adeleke",
    title: "Co-Founder and CEO",
    company: "Zeeh Africa",
    bio: "David is the Co-Founder and CEO of Zeeh Africa, a FinTech startup driving financial inclusion across Africa. He has served as a mentor and advisor for dozens of companies across the globe.",
    photo: "/mentors/david-adeleke.png",
    unverified: true,
  },
  {
    name: "Chase Brignac",
    title: "CEO & Co-Founder",
    company: "ChatOpenSource",
    bio: "Chase is the Technical CEO and Founder at ChatOpenSource which is an On-Premise and Auditable ChatGPT platform. He graduated YCombinator's 22' Batch driving Generative AI.",
    photo: "/mentors/chase-brignac.jpg",
    unverified: true,
  },
  {
    name: "Sam Bradley",
    title: "Director of Product",
    company: "PayPal",
    bio: "Sam is an experienced product leader who has led global product teams at world-renowned companies including Expedia Group, Quizlet, Stitch Fix, and most recently PayPal.",
    photo: "/mentors/sam-bradley.jpg",
    unverified: true,
  },
  {
    name: "Bipasha Ghosh",
    title: "Chief Marketing Officer",
    company: "Dali Spaces",
    bio: "Bipasha is the CMO at Dali Spaces, an educational community for women entrepreneurs. Prior to that she served as Vice President of International Marketing at NBC Universal and Head of Marketing at BBC World.",
    photo: "/mentors/bipasha-ghosh.png",
  },
  {
    name: "Jason Jacobsohn",
    title: "Managing Partner & Founder",
    company: "Propellant Ventures",
    bio: "Jason has worked with thousands of startups and multiple VC's supporting 14 different industries. He also serves as the Director of the Chicago Founder Institute organization.",
    photo: "/mentors/jason-jacobsohn.jpg",
    unverified: true,
  },
  {
    name: "Ankur Jain",
    title: "CTO and Founder",
    company: "Carallel and Sprout",
    bio: "Ankur is the Chief Technology Officer at Carallel and has served as an advisor for other Series A startups including Cohart. His previous roles included time as the VP of Architecture and Engineering at Groupon and Chief Architect at Walgreens.",
    photo: "/mentors/ankur-jain.png",
    unverified: true,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-6xl flex-col items-center py-16 px-6 sm:px-16">
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50 sm:text-4xl">
          Meet Our Mentors
        </h1>
        <p className="mt-4 max-w-2xl text-center text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Build alongside founders and learn from operators, investors, and
          executives who have been where you are.
        </p>

        <div className="mt-12 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {mentors.map((mentor) => (
            <div
              key={mentor.name}
              className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm dark:bg-zinc-900"
            >
              <div className="relative h-32 w-32 overflow-hidden rounded-full">
                <Image
                  src={mentor.photo}
                  alt={mentor.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="mt-4 text-lg font-semibold text-black dark:text-zinc-50">
                {mentor.name}
              </h2>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                {mentor.title}
                {mentor.company ? ` at ${mentor.company}` : ""}
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {mentor.bio}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
