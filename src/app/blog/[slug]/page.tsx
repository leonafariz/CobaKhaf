import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, User, Calendar, ScanFace, ArrowRight } from "lucide-react";
import { getAllPostSlugs, getBlogPosts, getPostBySlug } from "@/lib/dal";

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Artikel tidak ditemukan" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [post, allPosts] = await Promise.all([getPostBySlug(slug), getBlogPosts()]);
  if (!post) notFound();

  const paragraphs = post.content.split("\n\n");
  const others = allPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="max-w-7xl mx-auto w-full px-margin-mobile md:px-margin-desktop py-xl">
      <article className="max-w-3xl mx-auto">
        {/* Cover hero */}
        <div className="rounded-xl overflow-hidden card-shadow aspect-[16/9] mb-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.coverImage}
            alt={post.coverAlt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-md font-sans text-body-sm text-on-surface-variant mb-sm">
          <span className="font-accent text-label-caps font-bold uppercase tracking-wider text-secondary">
            {post.category}
          </span>
          <span className="inline-flex items-center gap-xs">
            <Clock size={16} /> {post.readingTime}
          </span>
          <span className="inline-flex items-center gap-xs">
            <User size={16} /> {post.authorName}
          </span>
          <span className="inline-flex items-center gap-xs">
            <Calendar size={16} /> {formatDate(post.publishedAt)}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display text-display-lg-mobile md:text-[40px] md:leading-[48px] font-extrabold text-on-surface mb-lg">
          {post.title}
        </h1>

        {/* Content */}
        <div className="space-y-md">
          {paragraphs.map((para, i) => (
            <p key={i} className="font-sans text-body-lg text-on-surface-variant">
              {para}
            </p>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-xs mt-lg pt-lg border-t border-outline-variant/30">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-md py-xs rounded-full bg-surface-container-high text-on-surface-variant font-accent text-label-caps font-bold uppercase tracking-wider"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* CTA box */}
        <div className="bg-primary text-on-primary rounded-xl p-md md:p-lg mt-xl flex flex-col md:flex-row items-start md:items-center gap-md justify-between">
          <div>
            <h3 className="font-display text-headline-sm font-bold mb-xs">
              Penasaran dengan Kondisi Kulitmu?
            </h3>
            <p className="font-sans text-body-md text-on-primary-container">
              Gunakan AI Face Analysis untuk mendapatkan rekomendasi produk dan
              rutinitas yang dipersonalisasi dalam hitungan detik.
            </p>
          </div>
          <Link
            href="/ai-analysis"
            className="shrink-0 inline-flex items-center gap-xs px-md py-sm rounded-md bg-surface-container-lowest text-primary font-bold hover:bg-surface transition-colors"
          >
            <ScanFace size={20} /> Coba AI Face Analysis
          </Link>
        </div>
      </article>

      {/* Other articles */}
      {others.length > 0 && (
        <section className="mt-xl max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-lg">
            <h2 className="font-display text-headline-md font-bold text-on-surface">
              Artikel Lainnya
            </h2>
            <Link
              href="/blog"
              className="hidden md:inline-flex items-center gap-xs text-primary font-semibold hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              Semua Artikel <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
            {others.map((other) => (
              <Link
                key={other.id}
                href={`/blog/${other.slug}`}
                className="bg-surface-container-lowest rounded-xl card-shadow overflow-hidden group flex flex-col"
              >
                <div className="h-48 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={other.coverImage}
                    alt={other.coverAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-md flex flex-col flex-grow">
                  <span className="font-accent text-label-caps font-bold uppercase tracking-wider text-secondary mb-xs">
                    {other.category}
                  </span>
                  <h3 className="font-display text-headline-sm font-bold text-on-surface mb-xs group-hover:text-primary transition-colors">
                    {other.title}
                  </h3>
                  <p className="font-sans text-body-sm text-on-surface-variant flex-grow">
                    {other.excerpt}
                  </p>
                  <span className="font-sans text-body-sm text-outline mt-sm">
                    {other.readingTime} · {other.authorName}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
