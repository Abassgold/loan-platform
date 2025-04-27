import Footer from '@/components/footer/Footer';
import Nav from '@/components/navigation/Nav';
import React from 'react'

const ContactUs = () => {
  return (
    <>
      <Nav />
      <section className=''>
        <div className="flex min-h-screen">
          <div
            className="bg-cover bg-center hidden md:block flex-1"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80")', // Replace with your image URL
            }}
          ></div>

          {/* Right Section - Form */}
          <div className=" flex items-center justify-center bg-white p-10 flex-1">
            <div className="w-full max-w-md">
              <h2 className="text-4xl font-bold mb-2">Let&apos;s Get In Touch.</h2>
              <p className="text-gray-500 mb-6">
                Or just reach out manually to{' '}
                <a href="mailto:gethelp@textworld.co" className="text-blue-500">
                  gethelp@creditgrow.co
                </a>
              </p>

              <form className="space-y-4">
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <label className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your first name..."
                      className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your last name..."
                      className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address..."
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="(000) 000-0000"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    placeholder="Enter your main text here..."
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
    <div className="min-h-screen flex items-center justify-center bg-white p-10">
      <div className="w-full max-w-4xl">
        {/* Header Section */}
        <div className="text-left mb-12">
          <p className="text-blue-500 text-sm font-medium mb-2">Reach Out To Us</p>
          <h2 className="text-4xl font-bold mb-2">We’d Love to Hear From You.</h2>
          <p className="text-gray-500">
            Or just reach out manually to{' '}
            <a href="mailto:gethelp@textworld.co" className="text-blue-500">
            gethelp@creditgrow.co
            </a>
          </p>
        </div>

        {/* Contact Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email Support */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l9 6 9-6m-18 0v10a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2z"
                  ></path>
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Email Support</h3>
            <p className="text-gray-500 mb-2">Our team can respond in real time.</p>
            <p className="text-blue-500 font-medium">gethelp@creditgrow.co</p>
          </div>

          {/* Visit Our Office */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a2 2 0 012-2h2a2 2 0 012 2v5m-4 0h4"
                  ></path>
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Visit Our Office</h3>
            <p className="text-gray-500 mb-2">Visit our location in real life.</p>
            <p className="text-gray-700 font-medium">221B Elementary Avenue, NY</p>
          </div>

        
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Call Us Directly</h3>
            <p className="text-gray-500 mb-2">Available during working hours.</p>
            <p className="text-gray-700 font-medium">(+1) 234 – 4567 – 789</p>
          </div>
        </div>
      </div>
    </div>

      </section>
      <Footer />
    </>
  )
}

export default ContactUs;