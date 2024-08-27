"use client";
import { useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function FreeDownload() {
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
          formId: "110b73a2-6b8d-46f6-8722-8ea478996f55",
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
    <section className="mx-auto max-w-3xl" id="free-download">
      <Card>
        <CardHeader className="mb-0 pb-2">
          <CardTitle className="text-2xl font-extrabold">
            Free Download: Ultimate Guide to Commission Advances
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm mb-6">
            Get our comprehensive guide on maximizing your real estate business
            with commission advances. Fill out the form below to receive your
            free copy.
          </p>
          <div id="hubspot-form-container"></div>
        </CardContent>
      </Card>
    </section>
  );
}
