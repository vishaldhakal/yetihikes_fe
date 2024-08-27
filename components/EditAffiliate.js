import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import swal from "sweetalert";
import FloatingLabelInput from "./FloatingLabelInput";

export function EditAffiliate({ affiliate_id, setEdited, edited }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    const fetchAffiliateData = async () => {
      try {
        const response = await fetch(
          `https://admin.icommission.ca/api/affiliates/${affiliate_id}/`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch affiliate data");
        }
        const data = await response.json();
        setFormData({
          name: data.name,
          email: data.email,
        });
      } catch (error) {
        swal("Error", error.message, "error");
      }
    };

    fetchAffiliateData();
  }, [affiliate_id]);

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
        `https://admin.icommission.ca/api/affiliates/${affiliate_id}/`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update affiliate");
      }
      swal("Success", "Affiliate updated successfully", "success");
      setEdited(!edited);
    } catch (error) {
      swal("Error", error.message, "error");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="me-2">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Affiliate</DialogTitle>
          <DialogDescription className="text-xs">
            Update affiliate information
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <FloatingLabelInput
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <FloatingLabelInput
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <DialogClose>
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                </DialogClose>
                <Button type="submit">Update Affiliate</Button>
              </div>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
