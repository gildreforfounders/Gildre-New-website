import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
    ];
  },
};

export default nextConfig;
