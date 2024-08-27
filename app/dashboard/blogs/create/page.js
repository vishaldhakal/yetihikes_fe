"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import swal from "sweetalert";
import FloatingLabelInput from "@/components/FloatingLabelInput";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

export default function BlogCreate() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://admin.icommission.ca/api/affiliates/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Same email already exists");
      }
      swal("Success", "Affiliate created successfully", "success");
      setEdited(!edited);
    } catch (error) {
      swal("Error", error.message, "error");
    }
  };
  return (
    <div className="flex items-center space-x-2 max-w-3xl mx-auto">
      <div className="grid flex-1 gap-2">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <FloatingLabelInput
                label={"Title"}
                name={"name"}
                value={formData.name}
                onChange={handleChange}
                required={true}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <FloatingLabelInput
                label={"Meta Title"}
                name={"email"}
                value={formData.email}
                onChange={handleChange}
                required={true}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <FloatingLabelInput
                label={"Tags"}
                name={"name"}
                value={formData.name}
                onChange={handleChange}
                required={true}
              />
            </div>
            <div className="space-y-2">
              <FloatingLabelInput
                label={"Category"}
                name={"name"}
                value={formData.name}
                onChange={handleChange}
                required={true}
              />
            </div>
          </div>
          {/* Meta desc */}
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Textarea
                label={"Meta Description"}
                placeholder="Meta Description"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Input label={"Image"} type="file" />
            </div>
            <div className="space-y-2">
              <FloatingLabelInput
                label={"Duration to read"}
                name={"name"}
                value={formData.name}
                onChange={handleChange}
                required={true}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Textarea label={"Blog content"} placeholder="Blog Content" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
