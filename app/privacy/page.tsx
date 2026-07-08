import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Gildre",
  description: "Gildre, LLC Privacy Policy",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-10">
      <h2
        className="text-xl font-bold text-white mb-3"
        style={{ fontFamily: "var(--font-fraunces)" }}
      >
        {title}
      </h2>
      <div className="space-y-4 text-[0.95rem] leading-[1.85] text-zinc-400">
        {children}
      </div>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <div style={{ backgroundColor: "#0f1524", minHeight: "100vh" }}>
      <div className="mx-auto max-w-3xl px-6 py-16 pb-24">
        {/* Header */}
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
          Legal
        </p>
        <h1
          className="mt-3 text-[2rem] font-bold text-white sm:text-[2.5rem]"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-zinc-500">Effective as of December 13th, 2025</p>

        {/* Intro */}
        <div className="mt-8 text-[0.95rem] leading-[1.85] text-zinc-400 space-y-4">
          <p>
            This privacy policy (the &ldquo;Privacy Policy&rdquo;) applies to Gildre, LLC&rsquo;s (&ldquo;Gildre,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collection, storage, use, and disclosure of personal information that may be collected by us when you interact with Gildre, such as when you visit our website, located at www.Gildre.com (&ldquo;Site&rdquo;). We have created this Privacy Policy to tell you what information our Site collects, how we use that information, and who we will share that information with, if at all. This Privacy Policy does not address the privacy practices of any third parties that we do not own, control, or are affiliated with. Capitalized terms not defined in this Privacy Policy will have the meaning set forth in our Terms of Use. By visiting and/or using our Site, you are agreeing to the terms of this Privacy Policy and the accompanying Terms of Use. We encourage you to read the Privacy Policy, and to use the information it contains to help you make informed decisions.
          </p>
        </div>

        <Section title="Information We Collect or Receive">
          <p>
            In the course of operating the Site, we will collect and/or receive the following types of information. You authorize us to collect and/or receive such information.
          </p>

          <div>
            <h3 className="font-semibold text-white mb-1">Personal Information</h3>
            <p>
              We only receive or collect information that identifies you personally if you choose to provide such personally identifiable information to us via email or other means. When you sign up to become a user or contact us, you will be required to provide us with personal information about yourself (collectively, the &ldquo;Personal Information&rdquo;). Such Personal Information may include your name, date of birth, e-mail address, physical address, home city, photo, and phone number. We do not collect any Personal Information from you when you use the Site unless you provide us with the Personal Information voluntarily.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-1">Third-party Log In</h3>
            <p>
              If you sign in through Google, you are authorizing us to collect, store, and use, in accordance with this Privacy Policy, any and all information that you agreed that Google would provide to us through Gildre&rsquo;s Application Programming Interface (&ldquo;API&rdquo;). Such information may include, without limitation, your first and last name, Google username, Google profile picture, headline, unique identifier and access token, and e-mail address. If you register or visit the App through Facebook Connect or another social media website, you are authorizing us to collect, store, and use, in accordance with this Privacy Policy, any and all information that you agreed that the social media website would provide to us through its API. We do not receive or store your passwords for your social media accounts. If you interact with social media widgets, share content using social media share buttons, or access features of the Site that contains content or features provided by social media platforms, the relevant social media platforms may collect information. We encourage you to review the privacy policies of the social media platforms that you engage with as we are not responsible for their privacy practices.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-1">Payment Information</h3>
            <p>
              If you choose to make a purchase or subscribe to a feature or service of ours that requires a fee, you will be required to provide us with your payment information, including, without limitation, bank account numbers, credit card or debit card numbers, account details, ACH information, and similar data (collectively, &ldquo;Payment Information&rdquo;). Such Payment Information will be collected and processed by our third-party payment vendors pursuant to the terms and conditions of their privacy policies and terms of use, and we do not obtain access to any Payment Information in connection with such purchases or subscriptions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-1">Geolocational Information</h3>
            <p>
              Certain features and functionalities of the Site are based on your location. In order to provide these features and functionalities while you are using your mobile device and/or computer, we may, with your consent, automatically collect geolocational information from your mobile device or wireless carrier and/or certain third-party service providers (collectively, &ldquo;Geolocational Information&rdquo;). Collection of such Geolocational Information occurs only when the Site is running on your device in the foreground or background. You may decline to allow us to collect such Geolocational Information, in which case we will not be able to provide certain features or functionalities to you.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-1">Third-Party Analytics</h3>
            <p>
              We and the third-party technology providers, ad exchanges, ad networks, advertisers, agencies, ad exchanges, and ad servers with which we work use third-party analytics services (e.g., Google Analytics) to evaluate your use of the Site, compile reports on activity, collect demographic data, analyze performance metrics, and collect and evaluate other information relating to the Site and mobile and Internet usage. These third parties use cookies and other technologies to help analyze and provide us the data. You consent to the processing of data about you by these analytics providers in the manner and for the purposes set out in this Privacy Policy. For more information on these third parties, including how to opt out from certain data collection, please visit www.Gildre.com/data. Please be advised that if you opt out of any such service, you may not be able to use the full functionality of the Site.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-1">Other Information</h3>
            <p>
              In addition to the Personal Information, Payment Information, and Geolocational Information, we may automatically collect or receive additional information regarding you and your use of the Site; your interactions with us and our advertising; and information regarding your computer and mobile devices used to access the Site (collectively, the &ldquo;Other Information&rdquo;). Such Other Information may include:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside pl-2">
              <li><span className="font-semibold text-white/80">From You.</span> Additional information about yourself that you voluntarily provide to us, such as your gender, age, and your product and service preferences.</li>
              <li>
                <span className="font-semibold text-white/80">From Your Activity.</span> We may collect or receive information regarding: IP address; browser type and language; referring and exit pages and URLs; date and time; and details regarding your activity on the Site, such as search queries and other performance and usage data.
              </li>
              <li>
                <span className="font-semibold text-white/80">About Your Mobile Device.</span> We may collect or receive information regarding: type of mobile device; advertising Identifier (&ldquo;IDFA&rdquo; or &ldquo;AdID&rdquo;); operating system and version; carrier; and network type (WiFi, 3G, 4G, LTE).
              </li>
              <li>
                <span className="font-semibold text-white/80">From Cookies.</span> We may use both session cookies, which expire once you close the Site, and persistent cookies, which stay on your mobile device or computer until you delete them, and other technologies to help us collect data and to enhance your experience with the Site. If you do not want us to deploy cookies in the Site, you can opt out by setting your mobile device or computer to reject cookies.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-1">Information Collected by or Through Third-Party Advertising Companies</h3>
            <p>
              We may share Other Information about your activity on the Site with third parties for ad distribution and ad optimization. These third parties may use cookies, pixel tags (also called web beacons or clear gifs), and/or other technologies to collect Other Information for such purposes.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-1">How to Opt Out of Third-Party Interest-Based Advertising</h3>
            <p>
              If you wish to opt out of third-party interest-based advertising, please visit{" "}
              <a href="http://www.networkadvertising.org" target="_blank" rel="noopener noreferrer" className="text-[#C9A96E] underline underline-offset-2">
                www.networkadvertising.org
              </a>{" "}
              for details on how to do so. Android users can open Google Settings &gt; Ads &gt; Enable &ldquo;Opt out of interest-based advertising.&rdquo; iOS 7+ users can go to Settings &gt; Privacy &gt; Advertising &gt; Enable &ldquo;Limit Ad Tracking.&rdquo;
            </p>
          </div>
        </Section>

        <Section title="How Information is Used and Shared">
          <p>
            You authorize us to use the Personal Information, Payment Information, Geolocational Information, and the Other Information (collectively, the &ldquo;Information&rdquo;) to: provide and improve our Site; provide our services; administer our promotional programs; solicit your feedback; and inform you about our products and services.
          </p>
          <p>
            In order to provide our services and administer our promotional programs, we may share the Information with our third-party promotional and marketing partners. We engage third-party companies and individuals to perform functions on our behalf. These other companies will have access to the Information only as necessary to perform their functions and to the extent permitted by law.
          </p>
          <p>
            We may analyze certain Information in anonymized and aggregate form to operate, maintain, manage, and improve the Site. This aggregate information does not identify you personally. We may share and/or license this aggregate data to our affiliates, agents, business and promotional partners, and other third parties.
          </p>
          <p>
            We may share some or all of your Information with any of our parent companies, subsidiaries, joint ventures, or other companies under common control with us. As we develop our businesses, we might sell or buy businesses or assets. In the event of a corporate sale, merger, reorganization, sale of assets, dissolution, or similar event, the Information may be part of the transferred assets.
          </p>
          <p>
            To the extent permitted by law, we may also disclose the Information: when required by law, court order, or other government or law enforcement authority or regulatory agency; or whenever we believe that disclosing such Information is necessary or advisable to protect the rights, property, or safety of us or others.
          </p>
        </Section>

        <Section title="Accessing and Modifying Information and Communication Preferences">
          <p>
            If you have provided us any Personal Information, you may access, remove, review, and/or make changes to the same by contacting us as set forth below. In addition, you may manage your receipt of marketing and non-transactional communications by clicking on the &ldquo;unsubscribe&rdquo; link located on the bottom of any of our marketing e-mails. You cannot opt out of receiving transactional e-mails related to the Site.
          </p>
        </Section>

        <Section title="How We Protect Your Information">
          <p>
            We take commercially reasonable steps to protect the Information from loss, misuse, and unauthorized access, disclosure, alteration, or destruction. Please understand, however, that no security system is impenetrable. We cannot guarantee the security of our databases or the databases of the third parties with which we may share such Information, nor can we guarantee that the Information you supply will not be intercepted while being transmitted over the Internet.
          </p>
        </Section>

        <Section title="Important Notices to Non-U.S. Residents">
          <p>
            The Site and its servers are operated in the United States. If you are located outside of the United States, please be aware that your Information, including your Personal Information, may be transferred to, processed, maintained, and used on computers, servers, and systems located outside of your state, province, country, or other governmental jurisdiction where the privacy laws may not be as protective as those in your jurisdiction. If you are located outside the United States and choose to use the Site, you hereby irrevocably and unconditionally consent to such transfer, processing, and use in the United States and elsewhere.
          </p>
        </Section>

        <Section title="Children">
          <p>
            The Site is not directed to children under the age of 13. We adhere to the Children&rsquo;s Online Privacy Protection Act (COPPA) and will not knowingly collect Personal Information from any child under the age of 13. We ask that minors (under the age of 13) not use the Site. If a child under the age of 13 has provided us with Personal Information, a parent or guardian of that child may contact us and request that such information be deleted from our records.
          </p>
        </Section>

        <Section title="California Privacy Rights">
          <p>
            Under the California Consumer Privacy Act, California residents who have an established business relationship with us may choose to opt out of our sharing their contact information with third parties for direct marketing purposes. If you are a California resident and you wish to opt out, please send an e-mail to{" "}
            <a href="mailto:privacy-support@Gildre.com" className="text-[#C9A96E] underline underline-offset-2">
              privacy-support@Gildre.com
            </a>
            . California residents who are our users now have the right to see a report summarizing all of their personal data that we have collected and to request the removal of their data from our computer systems.
          </p>
          <p>
            <span className="font-semibold text-white/80">Opt-out.</span> You have the right to opt-out of the sale of your personal information. Gildre does not sell your personal information. Access requests may be made directly to{" "}
            <a href="mailto:info@Gildre.com" className="text-[#C9A96E] underline underline-offset-2">
              info@Gildre.com
            </a>
            .
          </p>
          <p>
            When you visit or log in to our website, cookies and similar technologies may be used by our online data partners or vendors to associate these activities with other personal information they or others have about you, including by association with your email. You may opt out of receiving this advertising by visiting{" "}
            <a href="https://app.retention.com/optout" target="_blank" rel="noopener noreferrer" className="text-[#C9A96E] underline underline-offset-2">
              https://app.retention.com/optout
            </a>
            .
          </p>
        </Section>

        <Section title="Changes to This Privacy Policy">
          <p>
            This Privacy Policy is effective as of the date stated at the top of this Privacy Policy. We may change this Privacy Policy from time to time. Any such changes will be posted on the Site. By accessing the Site after we make any such changes to this Privacy Policy, you are deemed to have accepted such changes.
          </p>
        </Section>

        <Section title="How to Contact Us">
          <p>
            If you have questions about this Privacy Policy, please e-mail us at{" "}
            <a href="mailto:Info@Gildre.com" className="text-[#C9A96E] underline underline-offset-2">
              Info@Gildre.com
            </a>{" "}
            with &ldquo;Privacy Policy&rdquo; in the subject line.
          </p>
        </Section>

        {/* Divider */}
        <div className="mt-16 h-px w-full" style={{ backgroundColor: "rgba(201,169,110,0.15)" }} />
        <p className="mt-6 text-xs text-zinc-600 text-center">
          &copy; {new Date().getFullYear()} Gildre, LLC. All rights reserved.
        </p>
      </div>
    </div>
  );
}
