"use client";
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
import swal from "sweetalert";
import slugify from "@/helpers/Slugify";

export default function Affiliate() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [edited, setEdited] = useState(false);

  useEffect(() => {
    fetchAffiliates();
  }, [edited]);

  const fetchAffiliates = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://127.0.0.1:8000/api/post/");
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await response.json();
      setPosts(data.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  //delete posts
  const deletePost = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/post/${id}/`, {
        method: "DELETE",
      });
      if (!response.ok) {
        swal("Error", "Failed to delete affiliate", "error");
      }
      swal("Success", "Affiliate deleted successfully", "success");
      fetchAffiliates();
    } catch (err) {
      setError(err.message);
    }
  };

  if (isLoading) return <div className="text-center mt-8">Loading...</div>;
  if (error)
    return <div className="text-center mt-8 text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto p-4 mt-5">
      <div className="flex justify-between items-center">
        <div className="mb-6 font-bold text-md">
          You Have Total {posts.length} Blogs
        </div>
      </div>

      <Table className="border rounded-lg">
        <TableHeader className="rounded-md">
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Last edited</TableHead>
            <TableHead>Link</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts &&
            posts.map((post) => (
              <TableRow>
                <TableCell>{post.title}</TableCell>
                <TableCell>
                  {new Date(post.updated_at).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {`https://icommission.ca/blogs/${slugify(post.title)}/`}
                </TableCell>
                <TableCell>
                  <Link href={`/dashboard/blogs/${post.id}/`}>
                    <Button variant="outline" size="sm" className="mr-2">
                      Edit
                    </Button>
                  </Link>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => deletePost(post.id)}
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
