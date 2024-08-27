"use client";
import { Copy, Check } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CreateAffiliate } from "@/components/CreateAffiliate";
import swal from "sweetalert";
import { EditAffiliate } from "@/components/EditAffiliate";

export default function Affiliate() {
  const [affiliates, setAffiliates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCopied, setIsCopied] = useState(false);
  const [isCopiedId, setIsCopiedId] = useState(null);
  const [error, setError] = useState(null);
  const [edited, setEdited] = useState(false);

  useEffect(() => {
    fetchAffiliates();
  }, [edited]);

  const fetchAffiliates = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://admin.icommission.ca/api/affiliates/"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch affiliates");
      }
      const data = await response.json();
      setAffiliates(data.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  //delete affiliates
  const deleteAffiliate = async (id) => {
    try {
      const response = await fetch(
        `https://admin.icommission.ca/api/affiliates/${id}/`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        swal("Error", "Failed to delete affiliate", "error");
      }
      swal("Success", "Affiliate deleted successfully", "success");
      fetchAffiliates();
    } catch (err) {
      setError(err.message);
    }
  };

  const copyToClipboard = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setIsCopiedId(id);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  if (isLoading) return <div className="text-center mt-8">Loading...</div>;
  if (error)
    return <div className="text-center mt-8 text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto p-4 mt-5">
      <div className="flex justify-between items-center">
        <div className="mb-6 font-bold text-md">
          You Have Total {affiliates.length} Affiliates
        </div>
        <div className="mb-4">
          <CreateAffiliate edited={edited} setEdited={setEdited} />
        </div>
      </div>

      <Table className="border rounded-lg">
        <TableHeader className="rounded-md">
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Affiliate Link</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {affiliates &&
            affiliates.map((affiliate) => (
              <TableRow>
                <TableCell>{affiliate.name}</TableCell>
                <TableCell>{affiliate.email}</TableCell>
                <TableCell className="flex items-center">
                  {`https://icommission.ca/landing?ref=${affiliate.id}`}
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      copyToClipboard(
                        `https://icommission.ca/landing?ref=${affiliate.id}`,
                        affiliate.id
                      )
                    }
                    className="w-6 h-6 p-0 ms-3"
                  >
                    {isCopied && affiliate.id === isCopiedId ? (
                      <Check className="h-3 w-3" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </Button>
                </TableCell>
                <TableCell>
                  {new Date(affiliate.created_at).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <EditAffiliate
                    affiliate_id={affiliate.id}
                    setEdited={setEdited}
                    edited={edited}
                  />
                  <Link href={`/dashboard/affiliate/${affiliate.id}/`}>
                    <Button variant="outline" size="sm" className="mr-2">
                      View Submissions
                    </Button>
                  </Link>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => deleteAffiliate(affiliate.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
