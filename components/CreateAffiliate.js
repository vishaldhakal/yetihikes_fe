import { Copy } from "lucide-react";
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
import { useState } from "react";
import swal from "sweetalert";
import FloatingLabelInput from "./FloatingLabelInput";

export function CreateAffiliate({ setEdited, edited }) {
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
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Create New Affiliate</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create New Affiliate</DialogTitle>
          <DialogDescription className="text-xs">
            Reference id will be automatically generated
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <FloatingLabelInput
                    label={"Name"}
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
                    label={"Email"}
                    name={"email"}
                    value={formData.email}
                    onChange={handleChange}
                    required={true}
                  />
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <DialogClose>
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                </DialogClose>
                <Button type="submit">Create Affiliate</Button>
              </div>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
