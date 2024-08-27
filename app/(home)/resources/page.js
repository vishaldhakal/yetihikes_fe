import Link from "next/link";
import ContactUs from "@/components/ContactUs";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import FreeDownload from "@/components/FreeDownload";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Realtor Resources | iCommission - Blog, Free Downloads & More",
  description:
    "Access valuable resources for real estate professionals. Explore iCommission's blog, free downloads, guides, and tools to boost your realtor career and financial management.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Realtor Resources Hub | iCommission",
    description:
      "Discover a wealth of resources for realtors: insightful blog posts, free downloadable tools, expert guides, and more. Enhance your real estate career with iCommission.",
    url: "https://icommission.ca/resources",
    siteName: "iCommission",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Realtor Resources: Blog, Free Downloads & Tools | iCommission",
    description:
      "Access a treasure trove of realtor resources: engaging blog content, free downloadable tools, and expert guides to elevate your real estate business.",
    creator: "@iCommission_",
  },
  canonical: "https://icommission.ca/resources",
};

const ResourcesPage = () => {
  // Sample blog posts data
  const blogPosts = [
    {
      title: "5 Tips for Successful Commission Advances",
      excerpt:
        "Learn how to maximize your benefits from commission advances and boost your real estate career.",
      date: "2023-12-01",
      author: "Jane Doe",
      category: "Finance",
      image: "/cities/toronto.jpg",
    },
    {
      title: "How to Grow Your Real Estate Business with Commission Advances",
      excerpt:
        "Discover strategies to leverage commission advances for exponential growth in your real estate business.",
      date: "2023-11-15",
      author: "John Smith",
      category: "Business Growth",
      image: "/cities/toronto.jpg",
    },
    {
      title: "Understanding the Benefits of Commission Advances for Realtors",
      excerpt:
        "An in-depth look at how commission advances can provide financial flexibility and peace of mind for realtors.",
      date: "2023-11-01",
      author: "Emma Wilson",
      category: "Industry Insights",
      image: "/cities/toronto.jpg",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Blog Section */}
        <section className="mb-40" id="blog">
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden flex flex-col">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/blog">
              <Button size="lg" className="px-8">
                View All Blog Posts
              </Button>
            </Link>
          </div>
        </section>

        {/* Partner with iCommission Section */}
        <section className="mb-40" id="partner">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                Partner with iCommission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4">
                Exciting opportunities for broker owners are on the horizon.
                Stay tuned for our upcoming partnership program!
              </p>
              <div
                className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4"
                role="alert"
              >
                <p className="font-bold">Coming Soon</p>
                <p>
                  We're working on something special for broker owners. Check
                  back later for more information.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Free Download Section */}
        <FreeDownload />
        <div className="my-40"></div>
      </main>
      <section className="my-20">
        <ContactUs />
      </section>
    </div>
  );
};

export default ResourcesPage;
