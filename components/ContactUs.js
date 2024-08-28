"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

function ContactUs() {
  const [submitbtn, setSubmitbtn] = useState("Submit");
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const getArrayFromObj = (obj) => {
    let arr = [];
    for (const [key, value] of Object.entries(obj)) {
      arr.push(`${key.toUpperCase()}: ${value}`);
    }
    console.log(arr);
    return arr;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let data = {
      service_id: "service_huhb31k",
      template_id: "template_jwt9ywe",
      user_id: "pVaO-h-aD2g8Ul524",
      template_params: credentials,
    };

    axios
      .post(
        "https://api.emailjs.com/api/v1.0/email/send",
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => router.push("/thank-you"))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <section class="py-12 bg-gray-50 sm:py-16 lg:py-20 xl:py-24" id="contact">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-16 xl:gap-x-32">
            <div class="flex flex-col self-stretch justify-between">
              <div class="flex-1">
                <h2 class="text-3xl font-bold leading-loose tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                  We love to answer your Queries 👋
                </h2>
                <p className="mt-10">
                  <span className="font-bold">Our Address</span>
                  <br />
                  #Thamel, Kathmandu, Nepal
                  <br />
                  <br />
                  <span className="font-bold">Our Email</span>
                  <br />
                  info@yetihikes.com
                </p>
              </div>

              <div class="relative mt-10 overflow-hidden bg-blue-700 lg:mt-0 rounded-3xl -rotate-3">
                <div class="absolute bottom-0 right-0 -mb-72 -mr-24 border-[6px] opacity-20 border-white rounded-full w-96 h-96"></div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225.9271653025067!2d85.30847802505247!3d27.715121551836415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fc7fd50d97%3A0xd4eafff37bff82f8!2sPaknajol%20Marg%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1724826659936!5m2!1sen!2snp"
                  width="600"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div class="bg-white shadow-xl rounded-2xl">
              <div class="p-6 sm:p-10">
                <h3 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                  Get Your Free Quote Now
                </h3>
                <form
                  method="POST"
                  onSubmit={(e) => handleFormSubmit(e)}
                  class="mt-8 space-y-6"
                >
                  <div>
                    <label for="fullName" class="sr-only">
                      {" "}
                      Your name{" "}
                    </label>
                    <div>
                      <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        id="name"
                        value={credentials.name}
                        onChange={(e) => handleChange(e)}
                        class="block w-full py-4 text-base text-gray-900 placeholder-gray-600 bg-white border-2 focus:outline-none focus:border-blue-600 focus:ring-0 p-2 rounded-md"
                      />
                    </div>
                  </div>

                  <div>
                    <label for="email" class="sr-only">
                      {" "}
                      Email address{" "}
                    </label>
                    <div>
                      <input
                        type="email"
                        aria-describedby="emailHelp"
                        placeholder="Your email"
                        name="email"
                        id="email"
                        value={credentials.email}
                        onChange={(e) => handleChange(e)}
                        class="block w-full py-4 text-base text-gray-900 placeholder-gray-600 bg-white border-2 focus:outline-none focus:border-blue-600 focus:ring-0 rounded-md p-2"
                      />
                    </div>
                  </div>

                  <div>
                    <label for="phone" class="sr-only">
                      {" "}
                      Phone{" "}
                    </label>
                    <div>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Phone"
                        value={credentials.phone}
                        onChange={(e) => handleChange(e)}
                        required={true}
                        class="block w-full py-4 text-base text-gray-900 placeholder-gray-600 bg-white border-2 focus:outline-none focus:border-blue-600 focus:ring-0 rounded-md p-2"
                      />
                    </div>
                  </div>

                  <div>
                    <label for="message" class="sr-only">
                      {" "}
                      Write your message{" "}
                    </label>
                    <div>
                      <textarea
                        id="message"
                        name="message"
                        rows="3"
                        cols="50"
                        placeholder="Enter your planned trip or requirements"
                        value={credentials.message}
                        onChange={(e) => handleChange(e)}
                        class="block w-full py-4 text-base text-gray-900 placeholder-gray-600 bg-white border-2 focus:outline-none focus:border-blue-600 focus:ring-0 p-2 rounded-md"
                      ></textarea>
                    </div>
                  </div>

                  <input
                    type="submit"
                    value={submitbtn}
                    class="inline-flex items-center justify-center w-full px-12 py-4 text-base font-medium text-white transition-all duration-200 bg-primary cursor-pointer"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
