import Link from "next/link";
import FeatureList from "./FeatureList";

function HeroSection(props) {
  return (
    <>
      <div class="bg-gradient-to-b from-blue-100 to-blue-0">
        <section class="py-10 sm:py-16 lg:pt-12 lg:pb-24">
          <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                {props.city && (
                  <h1 className="text-4xl font-black text-black sm:text-6xl lg:text-4xl mt-2 lg:leading-[2.7rem]">
                    Commission Advance Services in {props.city} by iCommission.
                  </h1>
                )}
                {!props.city && (
                  <div class="relative inline-flex">
                    <span class="absolute inset-x-0 bottom-0 border-b-[5px] border-[#ffee01] shadow w-1/2 mx-auto md:w-full"></span>
                    <h1 className="relative text-4xl font-extrabold text-black sm:text-6xl lg:text-4xl mt-2 text-center md:text-start">
                      Time is money. Get paid today.
                    </h1>
                  </div>
                )}

                {!props.city && (
                  <p class="mt-4 mb-6 text-base text-black text-center md:text-start">
                    <span className="font-bold">iCommission</span> offers
                    Realtors commission advances to cover expenses and fuel
                    business growth. Boost your real estate revenue with
                    predictable, controllable, and scalable funding.
                  </p>
                )}

                {props.city && (
                  <p class="mt-2 mb-6 text-base text-black text-center md:text-start">
                    <span className="font-bold">iCommission</span> offers
                    Realtors commission advances in {props.city} to cover
                    expenses and fuel business growth. Boost your real estate
                    revenue with predictable, controllable, and scalable
                    funding.
                  </p>
                )}

                <FeatureList />

                <div class="mt-10 sm:flex sm:items-center sm:space-x-8 space-y-3">
                  {/* <Link
                    href="/#contact"
                    title=""
                    class="flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-700 hover:bg-blue-600 focus:bg-blue-600"
                    role="button"
                  >
                    {" "}
                    Get Started Now{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-right ms-3"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
                    </svg>
                  </Link> */}
                  <Link
                    href="#contact"
                    title=""
                    class="flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-700 hover:bg-blue-600 focus:bg-blue-600"
                    role="button"
                  >
                    Apply Now {props.city && "in " + props.city}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-right ms-3"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="/how-it-works"
                    title=""
                    class="flex items-center justify-center px-10 py-4 text-base font-semibold bg-white transition-all duration-200 text-blue-700 hover:text-blue-600 focus:bg-blue-600"
                    role="button"
                  >
                    How it Works
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-right ms-3"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="hidden lg:block">
                <img class="w-full" src="/heroimg.png" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HeroSection;
