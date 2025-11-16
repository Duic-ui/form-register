import { getBlogBySlug } from "@/lib/blogs";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> | { slug: string } };

export default async function BlogPage({ params }: Props) {
  // In some Next.js setups `params` can be a Promise — unwrap it safely
  const resolvedParams = (await params) as { slug: string };
  const blog = await getBlogBySlug(resolvedParams.slug);
  if (!blog) return notFound();

  return (
    <main className="container mx-auto px-6 py-16">
      <article className="prose lg:prose-xl mx-auto">
        <h1>{blog.title}</h1>
        {blog.date && <time className="text-sm text-gray-500">{blog.date}</time>}
        {blog.image && (
          <div className="my-6">
            <Image src={blog.image} alt={blog.title} width={1200} height={600} className="w-full h-auto object-cover" />
          </div>
        )}
        <div className="whitespace-pre-line text-base text-gray-700">{blog.content}</div>
      </article>
    </main>
  );
}
