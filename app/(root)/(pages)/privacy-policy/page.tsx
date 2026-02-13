import Link from 'next/link'

const PrivacyPolicy = () => {
  return (
    <section className="w-full">
      <div className="relative h-[50vh] md:h-[443px] flex items-center justify-center px-8 bg-[url('/images/privacy.jpg')] bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" aria-hidden="true" />
        <div aria-hidden="true" className="ellipse-top" />
        <div aria-hidden="true" className="ellipse-bottom" />

        <div className="relative z-20 flex flex-col items-center gap-5 text-center max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Privacy Policy
          </h1>
          <p className="text-base font-normal text-white-100 text-center">
            Learn how NPFPension collects, uses, and protects your personal
            information when using our website.
          </p>
        </div>
      </div>

      <div className="flex justify-center bg-white-100 px-6 py-16 sm:px-12 lg:px-24">
        <div className="w-full max-w-4xl space-y-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-grey-200">
              Introduction
            </h2>
            <p className="text-base font-normal text-grey-100 leading-relaxed">
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard information when you use the NPFPension mobile
              application (the "Application"). Please read this policy carefully.
              If you do not agree with its terms, do not use the Application.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-grey-200">
              Information We Collect
            </h2>
            <p className="text-base font-normal text-grey-100 leading-relaxed">
              We may collect the following categories of information, depending
              on how you use the Application:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-base font-normal text-grey-100 leading-relaxed">
              <li>
                <strong>Personal Data:</strong> Information you provide
                directly, such as name and email address when you register,
                send feedback, or participate in interactive features.
              </li>
              <li>
                <strong>Derivative Data:</strong> Information our servers
                automatically collect when you use the Application (for example,
                log files and interaction data).
              </li>
              <li>
                <strong>Mobile Device Access & Data:</strong> Permissions and
                device information (storage access, device model, OS version)
                when required by the Application.
              </li>
              <li>
                <strong>Push Notifications:</strong> Optional notifications
                related to your account and the Application. You can opt-out in
                your device settings.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-grey-200">
              How We Use Your Information
            </h2>
            <p className="text-base font-normal text-grey-100 leading-relaxed">
              We use information to operate and improve the Application,
              provide customer support, and communicate updates. We may also use
              data to investigate and prevent fraud or abuse and to comply with
              legal obligations.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-grey-200">
              Disclosure of Your Information
            </h2>
            <p className="text-base font-normal text-grey-100 leading-relaxed">
              We may disclose information where required by law or to protect
              our rights, and in connection with investigations, fraud
              prevention, or safety. We do not use third-party advertising for
              this Application and do not share data with affiliates or business
              partners for targeted advertising.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-grey-200">
              Tracking Technologies
            </h2>
            <p className="text-base font-normal text-grey-100 leading-relaxed">
              We may use cookies and similar technologies to enhance the user
              experience. You can modify browser or device settings to manage
              cookies, but doing so may affect functionality.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-grey-200">
              Third-Party Sites
            </h2>
            <p className="text-base font-normal text-grey-100 leading-relaxed">
              The Application may link to third-party websites and services
              that maintain their own privacy policies. We are not responsible
              for third-party practices and recommend reviewing their policies
              before providing personal information.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-grey-200">
              Security
            </h2>
            <p className="text-base font-normal text-grey-100 leading-relaxed">
              We implement reasonable administrative, technical, and physical
              safeguards to protect your information. However, no system is
              completely secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-grey-200">
              Your Choices
            </h2>
            <p className="text-base font-normal text-grey-100 leading-relaxed">
              You may review, update, or delete information in your account by
              accessing account settings or contacting us. Upon request, we will
              deactivate or delete your account except where retention is
              required for legal or fraud-prevention purposes.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-grey-200">
              Contact Us
            </h2>
            <p className="text-base font-normal text-grey-100 leading-relaxed">
              If you have questions about this Privacy Policy, please contact us:
            </p>

            <address className="not-italic text-base font-normal text-grey-100 leading-relaxed">
              Behind Louis Edet House,<br />
              Force Headquarters, Area 11,<br />
              Shehu Shagari Way, Abuja.<br />
              Tel: 09-4603401, 08079291627<br />
              Email:{' '}
              <a
                href="mailto:admin@npfpensions.com"
                className="text-blue-100 underline"
              >
                admin@npfpensions.com
              </a>
            </address>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-white px-6 py-16">
        <div className="flex flex-col items-center gap-5 md:w-[500px] text-center">
          <h1 className="section-header">Need Assistance?</h1>
          <p className="text-base font-normal text-grey-100 text-center">
            Our dedicated customer service team is here to help you navigate
            your benefit options and ensure you get the support you need.
          </p>

          <div className="flex flex-col md:flex-row gap-5">
            <Link
              href="/faqs"
              className="w-29 h-15 bg-blue-100 hover:bg-yellow-100 text-base font-semibold border hover:border-none border-blue-100 text-white mx-auto rounded-md flex items-center justify-center"
            >
              View FAQs
            </Link>

            <Link
              href="/contact"
              className="w-50 h-15 bg-white-100 hover:bg-yellow-100 text-base font-semibold border hover:border-none border-gray-100 text-blue-100 hover:text-white mx-auto rounded-md flex items-center justify-center"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrivacyPolicy