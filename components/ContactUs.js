"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function ContactUs() {
  const [submitbtn, setSubmitbtn] = useState("Submit");
  const router = useRouter();

  useEffect(() => {
    // Load HubSpot script
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Create HubSpot form
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "46941327",
          formId: "8ed83e15-9597-407c-bb37-03bcdab89ac1",
          target: "#hubspot-form-container",
        });
      }
    };

    // Cleanup function
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <section
        className="py-12 bg-gray-50 sm:py-16 lg:py-20 xl:py-24"
        id="contact"
      >
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-16 xl:gap-x-32">
            <div className="flex flex-col self-stretch justify-between">
              <div className="flex-1">
                <h2 className="text-3xl font-bold leading-loose tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                  We love to answer your Queries 👋
                </h2>
                <p className="mt-10">
                  <span className="font-bold">Our Address</span>
                  <br />
                  #103 - 8 Prologis Blvd Mississauga ON L5W 1N3
                  <br />
                  <br />
                  <span className="font-bold">Our Email</span>
                  <br />
                  info@icommission.ca
                </p>
              </div>

              <div className="relative mt-10 overflow-hidden bg-blue-700 lg:mt-0 rounded-3xl -rotate-3">
                <div className="absolute bottom-0 right-0 -mb-72 -mr-24 border-[6px] opacity-20 border-white rounded-full w-96 h-96"></div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1933.6843871601534!2d-79.69298031441271!3d43.63458753291713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3f7ed0f102f1%3A0x43f6951212cb674!2s8%20Prologis%20Blvd%20%23103d%2C%20Mississauga%2C%20ON%20L5W%201N3%2C%20Canada!5e0!3m2!1sen!2snp!4v1717940866210!5m2!1sen!2snp"
                  width="600"
                  height="450"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="bg-white shadow-xl rounded-2xl">
              <div className="p-6 sm:p-10">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-xl text-center bg-gray-100 p-3">
                  Apply Now for Your iCommission Advance
                </h3>
                <div id="hubspot-form-container" className="mt-8"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
