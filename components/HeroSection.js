import Link from "next/link";
import FeatureList from "./FeatureList";

function HeroSection(props) {
  return (
    <>
      <div class="bg-gradient-to-b from-blue-100 to-blue-0 bgg">
        <section class="py-10 sm:py-10 lg:pt-12 lg:pb-10">
          <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <div class="relative inline-flex">
                  <span class="absolute inset-x-0 bottom-0 border-b-[5px] border-secondary shadow w-1/2 mx-auto md:w-full"></span>
                  <h1 className="relative text-xl font-extrabold text-black sm:text-2xl lg:text-2xl mt-2 text-center md:text-start">
                    Yetihikes - Discover Nepal's Majestic Wonders
                  </h1>
                </div>

                <h2 class="mt-2 mb-6 text-base text-black text-center md:text-start leading-8">
                  Yetihikes is a leading online trekking company that offers a
                  wide range of trekking and tour packages in Nepal. We are a
                  team of experienced and professional trekking guides with whom
                  you can embark on unforgettable journeys through the Himalayas
                  with expert local guides
                </h2>

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
                    class="flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-primary hover:shadow-2xl"
                    role="button"
                  >
                    Book Now {props.city && "in " + props.city}
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
                    href="/"
                    title=""
                    class="flex items-center justify-center px-10 py-4 text-base font-semibold  transition-all duration-200 bg-secondary hover:shadow-2xl"
                    role="button"
                  >
                    View Packages
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
                <div className="flex">
                  <img class="w-full h-full" src="/hero.png" alt="hero image" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HeroSection;
