import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      // Blog posts — founder stories
      { source: "/fritzlanmanblog",    destination: "/blog/fritz-lanman-classpass-microsoft-unicorn",     permanent: true },
      { source: "/jamescorwinblog",    destination: "/blog/james-corwin-wildlife-artist-corwin-galleries", permanent: true },
      { source: "/aytekintankblog",    destination: "/blog/aytekin-tank-bootstrapped-jotform-no-vc",      permanent: true },
      { source: "/alexbeanblog",       destination: "/blog/alex-bean-divvy-billcom-acquisition",           permanent: true },
      { source: "/nasafounderblog",    destination: "/blog/nasa-engineer-y-combinator-chatopensource",     permanent: true },
      { source: "/robynblog",          destination: "/blog/robyn-hobson-cape-town-to-us-cmo",             permanent: true },
      { source: "/lukeashenbrandblog", destination: "/blog/luke-ashenbrand-princeton-football-startup",   permanent: true },
      { source: "/johnlionbergerblog", destination: "/blog/john-lionberger-broadway-engineer-racing",     permanent: true },
      { source: "/armandoblog",        destination: "/blog/armando-vera-carvajal-hangtight-amazon",       permanent: true },
      { source: "/ryanhughesblog",     destination: "/blog/ryan-hughes-google-snapchat-fan-pier-labs",    permanent: true },
      { source: "/chrisriklinblog",    destination: "/blog/chris-riklin-topline-professional-marketplace", permanent: true },
      // Guides & articles
      { source: "/startupequity101",   destination: "/guides/startup-equity-101",                          permanent: true },
      { source: "/equitydilution",     destination: "/guides/equity-dilution-explained",                   permanent: true },
      { source: "/next100customers",   destination: "/guides/next-100-customers-gtm-playbook",             permanent: true },
      { source: "/foundergrowthguide", destination: "/guides/how-to-use-customer-feedback-build-product",  permanent: true },
      { source: "/kickingoffpreseed",  destination: "/guides/pre-seed-fundraising-playbook",               permanent: true },
      { source: "/sdrteam",            destination: "/guides/building-high-performing-sdr-team",           permanent: true },
      // Page aliases
      { source: "/founder",             destination: "/content",                                             permanent: true },
      { source: "/faq",                 destination: "/#faq",                                                permanent: true },
      { source: "/apply",               destination: "/membership",                                          permanent: true },
      // Common missing routes people expect
      { source: "/blog",                destination: "/content",                                             permanent: false },
      { source: "/about",               destination: "/founder-community",                                   permanent: false },
      { source: "/team",                destination: "/contact",                                             permanent: false },
      { source: "/community",           destination: "/founder-community",                                   permanent: false },
      { source: "/join",                destination: "/membership",                                          permanent: false },
      { source: "/join-now",            destination: "/membership",                                          permanent: false },
      { source: "/signup",              destination: "/membership",                                          permanent: false },
      { source: "/sign-up",             destination: "/membership",                                          permanent: false },
      { source: "/get-started",         destination: "/membership",                                          permanent: false },
      { source: "/start",               destination: "/membership",                                          permanent: false },
      { source: "/resources",           destination: "/content",                                             permanent: false },
      { source: "/guides",              destination: "/content",                                             permanent: false },
      { source: "/stories",             destination: "/content",                                             permanent: false },
      { source: "/events",              destination: "/membership",                                          permanent: false },
      { source: "/login",               destination: "https://gildre.circle.so/sign_in",                    permanent: false },
      { source: "/signin",              destination: "https://gildre.circle.so/sign_in",                    permanent: false },
      { source: "/sign-in",             destination: "https://gildre.circle.so/sign_in",                    permanent: false },
      { source: "/members",             destination: "https://gildre.circle.so",                             permanent: false },
      { source: "/circle",              destination: "https://gildre.circle.so",                             permanent: false },
      { source: "/pricing",             destination: "/membership",                                          permanent: false },
      { source: "/plans",               destination: "/membership",                                          permanent: false },
      { source: "/mentors",             destination: "/mentor",                                              permanent: false },
      { source: "/podcast/episodes",    destination: "/podcast",                                             permanent: false },
      { source: "/founders",            destination: "/founder-community",                                   permanent: false },
      { source: "/cities",              destination: "/chicago",                                             permanent: false },
      // Podcast URL variants
      { source: "/podcasts",             destination: "/podcast",                                             permanent: false },
      { source: "/episodes",             destination: "/podcast",                                             permanent: false },
      { source: "/listen",               destination: "/podcast",                                             permanent: false },
      // City URL variants
      { source: "/los-angeles",          destination: "/la",                                                  permanent: true },
      { source: "/san-francisco",        destination: "/bayarea",                                             permanent: true },
      { source: "/sf",                   destination: "/bayarea",                                             permanent: true },
      { source: "/new-york",             destination: "/nyc",                                                 permanent: true },
      { source: "/new-york-city",        destination: "/nyc",                                                 permanent: true },
      { source: "/bay-area",             destination: "/bayarea",                                             permanent: true },
      // Contact & team routes
      { source: "/jobs",                 destination: "/contact",                                             permanent: false },
      { source: "/careers",              destination: "/contact",                                             permanent: false },
      { source: "/press",                destination: "/contact",                                             permanent: false },
      { source: "/partner",              destination: "/contact",                                             permanent: false },
      // Member programs variants
      { source: "/programs",             destination: "/memberprograms",                                      permanent: false },
      { source: "/workshops",            destination: "/memberprograms",                                      permanent: false },
      { source: "/benefits",             destination: "/memberprograms",                                      permanent: false },
      // Other common routes
      { source: "/accelerator",          destination: "/founder-community",                                   permanent: false },
      { source: "/invest",               destination: "/propellantventures",                                  permanent: false },
      { source: "/apply-now",            destination: "/membership",                                          permanent: false },
      // Broken blog slugs used in city pages
      { source: "/blog/armando-vera-hangtight-austin",        destination: "/blog/armando-vera-carvajal-hangtight-amazon",        permanent: true },
      { source: "/blog/alex-bean-divvy-bill-com-seattle",     destination: "/blog/alex-bean-divvy-billcom-acquisition",           permanent: true },
      { source: "/blog/chris-yeh-blitzscaling-bay-area",      destination: "/blog/chris-yeh-blitzscaling-reid-hoffman",           permanent: true },
      { source: "/blog/ryan-hughes-fan-pier-labs-boston",     destination: "/blog/ryan-hughes-google-snapchat-fan-pier-labs",     permanent: true },
      { source: "/blog/elise-madrick-cerene-los-angeles",     destination: "/blog/elise-madrick-cerene-executive-transformation", permanent: true },
      { source: "/blog/aytekin-tank-jotform",                 destination: "/blog/aytekin-tank-bootstrapped-jotform-no-vc",       permanent: true },
    ];
  },
};

export default nextConfig;
