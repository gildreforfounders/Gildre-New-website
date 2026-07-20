import { MetadataRoute } from "next";

const BASE_URL = "https://www.gildre.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Core pages
    { url: BASE_URL,                                   lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE_URL}/membership`,                   lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/memberprograms`,               lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/content`,                      lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE_URL}/contact`,                      lastModified: new Date(), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/mentor`,                       lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/referral`,                     lastModified: new Date(), changeFrequency: "yearly",  priority: 0.6 },
    { url: `${BASE_URL}/propellantventures`,           lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/mindhappy`,                    lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/privacy`,                      lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
    // City pages
    { url: `${BASE_URL}/boston`,                       lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/austin`,                       lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/bayarea`,                      lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/nyc`,                          lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/la`,                           lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/chicago`,                      lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/seattle`,                      lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    // Blog — founder stories
    { url: `${BASE_URL}/blog/fritz-lanman-classpass-microsoft-unicorn`,       lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE_URL}/blog/james-corwin-wildlife-artist-corwin-galleries`,  lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE_URL}/blog/aytekin-tank-bootstrapped-jotform-no-vc`,       lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE_URL}/blog/alex-bean-divvy-billcom-acquisition`,            lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE_URL}/blog/nasa-engineer-y-combinator-chatopensource`,      lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE_URL}/blog/robyn-hobson-cape-town-to-us-cmo`,              lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE_URL}/blog/luke-ashenbrand-princeton-football-startup`,     lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE_URL}/blog/john-lionberger-broadway-engineer-racing`,       lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE_URL}/blog/armando-vera-carvajal-hangtight-amazon`,        lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE_URL}/blog/ryan-hughes-google-snapchat-fan-pier-labs`,     lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE_URL}/blog/chris-riklin-topline-professional-marketplace`,  lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
    // Guides & articles
    { url: `${BASE_URL}/guides/startup-equity-101`,                           lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/guides/equity-dilution-explained`,                    lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/guides/next-100-customers-gtm-playbook`,              lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/guides/how-to-use-customer-feedback-build-product`,   lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/guides/pre-seed-fundraising-playbook`,                lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/guides/building-high-performing-sdr-team`,            lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
  ];
}
