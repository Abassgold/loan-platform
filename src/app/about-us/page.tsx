import Footer from "@/components/footer/Footer";
import Nav from "@/components/navigation/Nav";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <Nav />
      <section className="max-w-[70rem] p-2 mx-auto my-6 text-gray-700">
        <Image
          src='/about-us.webp'
          alt="about about greditgrow"
          width={500}
          height={300}
          className="mx-auto"
        />
        <p className="font-[600] text-center mb-4 text-gray-800 text-2xl">
          Welcome to <span className="font-semibold">CreditGrow</span>, your trusted financial partner dedicated to providing fast, secure, and hassle-free loan solutions.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p>
            At <span className="font-semibold">CreditGrow</span>, we aim to bridge the gap between financial challenges and opportunities. We believe that access to credit should be simple, transparent, and reliable. Our platform empowers users with quick loan approvals, fair interest rates, and a seamless digital experience.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Why Choose Us?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Fast Loan Approvals:</strong> Get your application reviewed and approved quickly.</li>
            <li><strong>No Hidden Fees:</strong> Transparent terms and conditions, no surprises.</li>
            <li><strong>Secure Transactions:</strong> Your data is protected with advanced security measures.</li>
            <li><strong>Flexible Repayment Options:</strong> Choose a plan that suits your financial needs.</li>
            <li><strong>Reliable Customer Support:</strong> Our team is always available to assist you.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl  font-semibold mb-3">How It Works</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Apply Online:</strong> Fill out a simple application form.</li>
            <li><strong>Get Approved:</strong> Our team reviews and processes your request.</li>
            <li><strong>Receive Funds:</strong> Approved funds are credited to your dashboard.</li>
            <li><strong>Withdraw to Your Bank:</strong> Transfer funds whenever needed.</li>
            <li><strong>Repay Conveniently:</strong> Choose a repayment plan that works for you.</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Our Commitment</h2>
          <p>
            We are committed to responsible lending, ensuring users get the financial assistance they need without unnecessary stress. Whether you need a loan for business expansion, emergencies, or personal growth, we are here to help you succeed.
          </p>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
          <p>Need assistance? Reach out via email, phone, or live chat. We&apos;re here to help!</p>
        </section>
      </section>
      <Footer />
    </>
  )
}

export default AboutUs;