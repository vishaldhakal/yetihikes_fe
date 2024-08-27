"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TestimonialScroll from "./TestimonialScroll";

function GetStarted() {
  const partners = [
    {
      name: "Dolphin Realty",
      logo: "/partner/dolphin-realty.png",
      link: "https://www.dolphinrealty.ca/",
    },
    {
      name: "Anchor New Homes",
      logo: "/partner/anchor-new-homes.png",
      link: "https://anchornewhomes.com/",
    },
    {
      name: "Bay Street Group TPRT",
      logo: "/partner/bay-street-group-tprt.png",
      link: "https://www.baystreetgroup.ca/en/Toronto",
    },
    {
      name: "Bay Street Group",
      logo: "/partner/bay-street.svg",
      link: "https://www.baystreetgroup.ca/en/Toronto",
    },
    {
      name: "Gilco Real Estate Services",
      logo: "/partner/gilco-real-estate-services.png",
      link: "",
    },
    {
      name: "Meta Realty",
      logo: "/partner/meta-realty.svg",
      link: "https://metarealtyinc.ca/",
    },
    {
      name: "Sotheby's Realty - Canada",
      logo: "/partner/sothebys.png",
      link: "https://sothebysrealty.ca/en/",
    },
    {
      name: "NSD Brokers Brokerage",
      logo: "/partner/nsd.jpeg",
      link: "https://nsdbrokers.ca/",
    },
  ];

  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="mx-auto text-center">
          <div className="flex items-center justify-center">
            <div className="w-20 h-20 -mr-6 overflow-hidden bg-gray-300 rounded-full">
              <img
                className="object-cover w-full h-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/female-avatar-1.jpg"
                alt=""
              />
            </div>
            <div className="relative overflow-hidden bg-gray-300 border-8 border-white rounded-full w-28 h-28">
              <img
                className="object-cover w-full h-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/male-avatar-1.jpg"
                alt=""
              />
            </div>
            <div className="w-20 h-20 -ml-6 overflow-hidden bg-gray-300 rounded-full">
              <img
                className="object-cover w-full h-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/female-avatar-2.jpg"
                alt=""
              />
            </div>
          </div>

          <h2 className="mt-8 text-3xl font-bold leading-tight text-black lg:mt-12 sm:text-4xl lg:text-5xl">
            Join <span className="border-b-8 border-yellow-300">5,482</span>{" "}
            other Realtors
          </h2>
          <p className="max-w-xl mx-auto mt-6 text-xl text-gray-600 md:mt-10">
            Don't let delays hinder your success. Experience the iCommission
            difference and access your earnings instantly. Apply now to enjoy
            unparalleled financial flexibility with iCommission Advance!
          </p>

          <section className="mt-40 mb-20">
            <TestimonialScroll />
            <div className="mt-8 text-center">
              <Link
                href="https://www.trustpilot.com/review/icommission.ca?utm_medium=trustbox&utm_source=TrustBoxReviewCollector"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="bg-white hover:bg-gray-100"
                >
                  See More Reviews on Trustpilot
                </Button>
              </Link>
            </div>
          </section>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Trusted By
          </h3>
          <div className="grid flex-wrap grid-cols-2 md:grid-cols-4 justify-center items-center gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white px-4 py-2 rounded shadow-2xl"
              >
                {partner.link ? (
                  <Link
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-12 md:h-20 w-auto"
                    />
                    <p className="text-xs mt-3 text-center">{partner.name}</p>
                  </Link>
                ) : (
                  <div className="flex flex-col items-center">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-12 md:h-20 w-auto"
                    />
                    <p className="text-xs mt-3 text-center">{partner.name}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:mt-12 hover:bg-blue-700 focus:bg-blue-700"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
