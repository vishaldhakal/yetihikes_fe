import Link from "next/link";

function UnLockSection() {
  return (
    <>
      <section class="py-10 bg-white sm:py-16 lg:py-24">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="max-w-2xl mx-auto text-center sm:text-center">
            <h2 class="text-3xl font-extrabold text-black sm:text-3xl lg:text-3xl mb-10">
              Unlock Your Experience with Yeti Hikes
            </h2>
            <ul className="mt-6 space-x-10 text-lg text-gray-600 flex items-center">
              <li className="flex text-xs flex-col items-center">
                <span
                  className="mr-2 text-2xl"
                  role="img"
                  aria-label="mountain"
                >
                  🏔️
                </span>
                Do you want to experience the beauty of the Himalayas?
              </li>
              <li className="flex text-xs flex-col items-center">
                <span
                  className="mr-2 text-2xl"
                  role="img"
                  aria-label="prayer wheels"
                >
                  🛕
                </span>
                Do you want to explore the culture and traditions of Nepal?
              </li>
              <li className="flex text-xs flex-col items-center">
                <span
                  className="mr-2 text-2xl"
                  role="img"
                  aria-label="person climbing"
                >
                  🧗
                </span>
                Do you want to challenge yourself and push your limits?
              </li>
            </ul>
            <p className="mt-6 mb-10 text-xl font-extrabold text-black">
              If yes, then <span className="text-2xl text-black">yeti</span>
              <span className="text-2xl text-primary">hikes.</span> is the
              perfect choice for you! 🏞️
            </p>
            <div className="flex justify-center">
              <Link
                href="#contact"
                title=""
                class="flex items-center justify-center px-10 py-4 text-base font-semibold text-black transition-all duration-200 bg-secondary"
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
        </div>
      </section>
    </>
  );
}

export default UnLockSection;
