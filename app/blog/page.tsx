import Link from "next/link";
import { getAllBlogsMeta } from "@/lib/blogs";

export default async function BlogIndex() {
  const blogs = await getAllBlogsMeta();

  return (
    <main className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {blogs.map((b) => (
          <Link key={b.slug} href={`/blog/${b.slug}`} className="block p-6 border rounded-lg hover:shadow-lg bg-white">
            <h2 className="text-2xl font-semibold mb-2">{b.title}</h2>
            {b.date && <p className="text-sm text-gray-500 mb-2">{b.date}</p>}
            {b.excerpt && <p className="text-gray-700">{b.excerpt}</p>}
          </Link>
        ))}
      </div>
    </main>
  );
}
