import type { Metadata } from "next";
import { BlogCard } from "@/components/blog/BlogCard";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Commerce Chain",
  description:
    "Supply chain and demand chain insights, engineering deep-dives, and release notes from the Commerce Chain team.",
  robots: { index: false, follow: false },
};

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <main className="section">
      <div className="content-grid">
        <h1>Blog</h1>
        <p className="max-600">
          Supply chain and demand chain insights, engineering deep-dives, and
          release notes from the Commerce Chain team.
        </p>
      </div>

      <section className="section" style={{ borderBottom: "none", paddingTop: 0 }}>
        <div className="content-grid">
          {posts.length === 0 ? (
            <p className="card">No posts yet — check back after launch.</p>
          ) : (
            <div className="cards-grid" style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
              {posts.map((post) => (
                <BlogCard key={post._id} {...post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
