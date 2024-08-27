"use client";
import { Suspense } from "react";
import Affiliate from "@/components/landing";

export default function Landing() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Affiliate />
    </Suspense>
  );
}
