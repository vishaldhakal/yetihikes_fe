import Link from "next/link";

function UnLockSection() {
  return (
    <>
      <section class="py-10 bg-white sm:py-16 lg:py-24">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="max-w-2xl mx-auto text-center sm:text-center">
            <h2 class="text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
              Unlock Your Earnings with iCommission Advance.
            </h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 mb-6">
              Do you have a firm deal but are tired of waiting for your
              commission payouts? With iCommission, you can access your
              hard-earned money right away. Here’s why our iCommission Advance
              service is the ideal choice for you.
            </p>
            <div className="flex justify-center">
              <Link
                href="#contact"
                title=""
                class="flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-700 hover:bg-blue-600 focus:bg-blue-600"
                role="button"
              >
                Apply Now
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
        </div>
      </section>
    </>
  );
}

export default UnLockSection;
