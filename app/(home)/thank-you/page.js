"use client";
import { useRouter } from "next/navigation";

export default function ThankYou() {
  const router = useRouter();

  return (
    <>
      <div className="container-fluid mt-10 py-20">
        <div className="flex flex-col items-center justify-center">
          <img
            src="/thankyou.gif"
            alt="dolphy logo icon"
            className="img-fluid icon-img w-40"
          />
          <h4 className="text-center text-2xl font-bold mb-0">
            Thank you for reaching out to us!
          </h4>
          <p className="text-center text-green fs-small fs-md-5 mt-2 fw-bold mt-md-0 mb-4 px-3">
            We have received yoor message and will get back to you soon.
          </p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => router.back()}
            className="btn btn-lg shadow-2xl rounded-lg fs-5 p-5"
          >
            <span className="mx-2"></span>
            Get back to previous page
          </button>
        </div>
      </div>
      <div className="py-5"></div>
    </>
  );
}
