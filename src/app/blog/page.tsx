import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, User } from "lucide-react";
import { getBlogPosts } from "@/lib/dal";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Blog & Tips Perawatan Kulit Pria",
  description:
    "Wawasan, tips, dan panduan seputar perawatan kulit pria dari KAHF. Pelajari rutinitas, bahan aktif, dan kebiasaan skincare yang tepat.",
};

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();
  const [featured, ...rest] = blogPosts;
  const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

  return (
    <div className="max-w-7xl mx-auto w-full px-margin-mobile md:px-margin-desktop py-xl">
      {/* Page heading */}
      <SectionHeading
        eyebrow="Blog & Tips"
        title="Wawasan Perawatan Kulit"
        subtitle="Tips, panduan, dan pengetahuan seputar skincare pria yang efektif dan halal."
      />

      {/* Featured post hero */}
      {featured && (
        <section className="mt-lg mb-xl">
          <Link
            href={`/blog/${featured.slug}`}
            className="grid grid-cols-1 md:grid-cols-2 gap-gutter bg-surface-container-lowest rounded-xl card-shadow overflow-hidden group"
          >
            <div className="h-64 md:h-full min-h-[320px] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featured.coverImage}
                alt={featured.coverAlt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-md md:p-lg flex flex-col justify-center">
              <span className="font-accent text-label-caps font-bold uppercase tracking-wider text-secondary mb-xs">
                {featured.category}
              </span>
              <h2 className="font-display text-display-lg-mobile md:text-[32px] md:leading-[40px] font-extrabold text-on-surface mb-sm group-hover:text-primary transition-colors">
                {featured.title}
              </h2>
              <p className="font-sans text-body-lg text-on-surface-variant mb-md">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-md font-sans text-body-sm text-outline mb-md">
                <span className="inline-flex items-center gap-xs">
                  <Clock size={16} /> {featured.readingTime}
                </span>
                <span className="inline-flex items-center gap-xs">
                  <User size={16} /> {featured.authorName}
                </span>
              </div>
              <span className="inline-flex items-center gap-xs text-primary font-semibold">
                Baca Selengkapnya <ArrowRight size={18} />
              </span>
            </div>
          </Link>
        </section>
      )}

      {/* Category filter bar */}
      <div className="flex flex-wrap gap-xs mb-lg">
        <span className="px-md py-xs rounded-full bg-primary text-on-primary font-accent text-label-caps font-bold uppercase tracking-wider">
          Semua
        </span>
        {categories.map((cat) => (
          <span
            key={cat}
            className="px-md py-xs rounded-full bg-surface-container-high text-on-surface-variant font-accent text-label-caps font-bold uppercase tracking-wider"
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Post grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {rest.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="bg-surface-container-lowest rounded-xl card-shadow overflow-hidden group flex flex-col"
          >
            <div className="h-48 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.coverImage}
                alt={post.coverAlt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-md flex flex-col flex-grow">
              <span className="font-accent text-label-caps font-bold uppercase tracking-wider text-secondary mb-xs">
                {post.category}
              </span>
              <h3 className="font-display text-headline-sm font-bold text-on-surface mb-xs group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="font-sans text-body-sm text-on-surface-variant flex-grow">
                {post.excerpt}
              </p>
              <span className="font-sans text-body-sm text-outline mt-sm">
                {post.readingTime} · {post.authorName}
              </span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
