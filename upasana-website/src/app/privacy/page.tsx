export const metadata = {
  title: 'Privacy Policy | Dr. Upasna Shil',
  description: 'Privacy policy and data protection information for Dr. Upasna Shil\'s clinical psychology practice.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-display mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-body text-slate-gray mb-6">
              <strong>Last updated:</strong> December 2024
            </p>

            <section className="mb-8">
              <h2 className="text-heading mb-4">Introduction</h2>
              <p className="text-body text-slate-gray mb-4">
                Dr. Upasna Shil (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy and personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                visit our website or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-heading mb-4">Information We Collect</h2>
              <h3 className="text-subheading mb-3">Personal Information</h3>
              <p className="text-body text-slate-gray mb-4">
                We may collect personal information that you voluntarily provide to us, including:
              </p>
              <ul className="list-disc list-inside text-body text-slate-gray mb-4 space-y-2">
                <li>Name, email address, and phone number</li>
                <li>Demographic information (age, gender, location)</li>
                <li>Health and mental health information</li>
                <li>Payment and billing information</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-subheading mb-3">Automatically Collected Information</h3>
              <p className="text-body text-slate-gray mb-4">
                We may automatically collect certain information about your device and usage patterns, including:
              </p>
              <ul className="list-disc list-inside text-body text-slate-gray mb-4 space-y-2">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-heading mb-4">How We Use Your Information</h2>
              <p className="text-body text-slate-gray mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-body text-slate-gray mb-4 space-y-2">
                <li>Provide and improve our psychological services</li>
                <li>Schedule and manage appointments</li>
                <li>Process payments and billing</li>
                <li>Communicate with you about your care</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Improve our website and services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-heading mb-4">Information Sharing and Disclosure</h2>
              <p className="text-body text-slate-gray mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your 
                information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-body text-slate-gray mb-4 space-y-2">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect your safety or the safety of others</li>
                <li>With trusted service providers who assist in our operations</li>
                <li>In case of a business transfer or merger</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-heading mb-4">Data Security</h2>
              <p className="text-body text-slate-gray mb-4">
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. This includes:
              </p>
              <ul className="list-disc list-inside text-body text-slate-gray mb-4 space-y-2">
                <li>Encryption of sensitive data</li>
                <li>Secure data storage and transmission</li>
                <li>Regular security assessments</li>
                <li>Limited access to personal information</li>
                <li>Staff training on data protection</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-heading mb-4">Your Rights</h2>
              <p className="text-body text-slate-gray mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-body text-slate-gray mb-4 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to certain processing activities</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-heading mb-4">Cookies and Tracking</h2>
              <p className="text-body text-slate-gray mb-4">
                Our website may use cookies and similar tracking technologies to enhance your experience. 
                You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-heading mb-4">Third-Party Services</h2>
              <p className="text-body text-slate-gray mb-4">
                We may use third-party services for scheduling, payments, and analytics. These services have 
                their own privacy policies, and we encourage you to review them.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-heading mb-4">Changes to This Policy</h2>
              <p className="text-body text-slate-gray mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-heading mb-4">Contact Us</h2>
              <p className="text-body text-slate-gray mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="bg-warm-beige/30 rounded-lg p-6">
                <p className="text-body text-slate-gray mb-2">
                  <strong>Email:</strong> contact@upasnashil.com
                </p>
                <p className="text-body text-slate-gray mb-2">
                  <strong>Phone:</strong> +91-XXXXXXXXXX
                </p>
                <p className="text-body text-slate-gray">
                  <strong>Address:</strong> Pune, Maharashtra, India
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}