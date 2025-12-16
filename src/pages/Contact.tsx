import React, { useState } from "react";

const Contact: React.FC = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");

    // FIX 1: Capture the form element immediately, before 'await'
    // This prevents the "Cannot read properties of null" error later
    const form = event.currentTarget;

    const formData = new FormData(form);

    // Add your Web3Forms Access Key
    formData.append("access_key", "6160b980-4f68-4796-b041-e7910b71a0bf");

    // FIX 2: Convert FormData to a JSON Object
    // This resolves the "Network Error" issues often caused by raw FormData
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    console.log("Submitting Form Data:", json); // Debug Log

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      console.log("Response Status:", response.status); // Debug Log

      const data = await response.json();
      console.log("API Response:", data); // Debug Log

      if (data.success) {
        setResult("Message sent successfully!");
        // FIX 3: Use the captured 'form' variable to reset
        form.reset();
      } else {
        setResult(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Submission Error:", error); // Debug Log
      setResult("Network error. Please try again later.");
    }
  };

  return (
    <div className="animate-fade-in">
      {/* ---------------------- HERO ---------------------- */}
      <section className="bg-slate-900 text-white py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 ">
            Let’s Build Your Next Digital Solution
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Contact us today for reliable, results-driven digital services.
            We’re here to provide the support, strategy, and solutions you need
            to grow with confidence.
          </p>
        </div>
      </section>

      {/* ---------------------- FORM SECTION ---------------------- */}
      <section className="py-24 container mx-auto px-4 -mt-10">
        <div className="grid lg:grid-cols-2 gap-0 shadow-2xl rounded-3xl overflow-hidden bg-white max-w-5xl mx-auto">
          {/* Left Side Image/Quote */}
          <div className="bg-blue-600 p-12 text-white flex flex-col justify-between relative min-h-[400px]">
            <div className="relative z-10">
              <div className="w-12 h-1 mb-8 bg-blue-400"></div>
              <p className="text-2xl font-serif italic mb-8 leading-relaxed">
                “Our team is made up of passionate professionals who bring
                creativity, expertise, and dedication to every project. We work
                together to deliver reliable digital solutions, ensuring each
                client receives the quality, support, and innovation they
                deserve.”
              </p>
            </div>
            {/* Abstract circle decoration */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 rounded-tl-full opacity-50"></div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400 rounded-br-full opacity-20"></div>
          </div>

          {/* Right Side Form */}
          <div className="p-8 md:p-12 bg-white">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              Have a question?
            </h2>
            <p className="text-slate-500 mb-8">
              Fill out the form below and we'll get back to you.
            </p>

            <form className="space-y-5" onSubmit={onSubmit}>
              {/* Hidden Botcheck Input */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
              />

              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-500 uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-gray-50 focus:bg-white"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-500 uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-gray-50 focus:bg-white"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-500 uppercase">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project Inquiry"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-gray-50 focus:bg-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-500 uppercase">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-gray-50 focus:bg-white"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-slate-900 text-white py-4 rounded-lg font-bold hover:bg-blue-600 transition duration-300 shadow-lg"
              >
                Send Message
              </button>
              {result && (
                <p className="text-sm mt-4 text-center text-slate-600">
                  {result}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ---------------------- FAQ SECTION ---------------------- */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl font-bold text-center mb-12 text-slate-900">
            Frequently Asked Questions
          </h1>

          <div className="space-y-4">
            {[
              {
                q: "How quickly will your team respond to my inquiry?",
                a: "We usually respond within 24 hours on business days. For urgent messages, we do our best to reply even sooner.",
              },
              {
                q: "Do you offer a free consultation before starting a project?",
                a: "Yes. We provide a free consultation to discuss your goals, understand your vision, and recommend the best approach.",
              },
              {
                q: "What information should I include when contacting you?",
                a: "Sharing details like your project goals, timeline, budget range, and any references helps us understand your needs better.",
              },
              {
                q: "Can you support my existing website or ongoing SEO work?",
                a: "Absolutely. We offer website maintenance, SEO improvements, performance optimization, and long-term support.",
              },
            ].map((item, i) => (
              <details
                className="group bg-white rounded-xl shadow-sm border border-slate-200 open:ring-2 open:ring-blue-100"
                key={i}
              >
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <span className="font-semibold text-slate-700">{item.q}</span>
                  <span className="transition group-open:rotate-45 text-blue-500 text-2xl font-light">
                    +
                  </span>
                </summary>
                <div className="text-slate-600 px-6 pb-6 pt-0 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
