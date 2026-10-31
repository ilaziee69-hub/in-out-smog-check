import Seo from "@/components/Seo";

export default function PrivacyPolicy() {
  return (
    <>
      <Seo
        title="Privacy Policy | In & Out Smog Check"
        description="Privacy information for customers of In & Out Smog Check in Placentia, California."
        path="/privacy-policy"
      />
      <section className="page-hero">
        <h1>Privacy Policy</h1>
        <p className="lead">In &amp; Out Smog Check · Effective October 30, 2026</p>
      </section>
      <section
        className="contact"
        style={{ maxWidth: 850, margin: "0 auto", padding: "24px 20px 64px", lineHeight: 1.8 }}
      >
        <p>
          This policy explains how In &amp; Out Smog Check, located at 144 S Bradford Ave,
          Placentia, CA 92870, handles information provided through our website and customer
          communications.
        </p>
        <h2>Information you provide</h2>
        <p>
          If you call, email, or message us, we may receive your name, contact information,
          vehicle details, and the contents of your inquiry. When you visit our shop, we may
          collect information necessary to perform a smog inspection and meet applicable
          recordkeeping requirements.
        </p>
        <h2>How information is used</h2>
        <p>
          We use information to answer questions, provide smog inspection services, communicate
          with customers, maintain records, and comply with legal requirements.
        </p>
        <h2>Google and other services</h2>
        <p>
          Our website may link to third-party services, including Google Maps and Google
          reviews. If we enable Google-powered business messaging or an AI messaging agent,
          messages sent through that service may be processed by Google under its applicable
          terms and privacy practices and made available to our business to respond. Please
          avoid sharing sensitive financial or medical information in messages.
        </p>
        <h2>Sharing and retention</h2>
        <p>
          Information may be shared with service providers supporting our operations or with
          authorities when required by law. We retain records as needed for business operations
          and applicable legal requirements. We do not promise that messages are confidential
          or immediately monitored.
        </p>
        <h2>Your choices and questions</h2>
        <p>
          You can contact us to ask about information you have provided, subject to applicable
          legal and recordkeeping obligations. Call{" "}
          <a href="tel:+17149931660">(714) 993-1660</a> or email{" "}
          <a href="mailto:inandoutsmogcheck@gmail.com">inandoutsmogcheck@gmail.com</a>.
        </p>
        <h2>Updates</h2>
        <p>
          We may update this policy when our services or practices change. The current version
          will be posted on this page.
        </p>
      </section>
    </>
  );
}
