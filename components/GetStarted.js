"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TestimonialScroll from "./TestimonialScroll";

function GetStarted() {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="mx-auto text-center">
          <div className="flex items-center justify-center">
            <div className="w-20 h-20 -mr-6 overflow-hidden bg-gray-300 rounded-full">
              <img
                className="object-cover w-full h-full"
                src="/reviews/1.avif"
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
            other Travellers
          </h2>
          <p className="max-w-xl mx-auto mt-6 text-xl text-gray-600 md:mt-10">
            Don't let delays hinder your hike experience. Get your best travel
            experience with us.
          </p>

          <section className="mt-40 mb-20">
            <TestimonialScroll />
            <div className="mt-8 text-center">
              <Link
                href="https://www.tripadvisor.com/Attraction_Review-g293890-d28127088-Reviews-Yeti_Hikes_Pvt_Ltd-Kathmandu_Kathmandu_Valley_Bagmati_Zone_Central_Region.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="bg-white hover:bg-gray-100"
                >
                  See More Reviews on Tripadvisor
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
