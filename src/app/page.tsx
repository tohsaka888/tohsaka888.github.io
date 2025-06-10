import Layout from '@/components/Layout';
import PostPreview from '@/components/PostPreview';
import { getSortedPostsData, PostData } from '@/lib/posts';

async function getPosts(): Promise<PostData[]> {
  const allPostsData = getSortedPostsData();
  return allPostsData;
}

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <Layout>
      <div className="py-8">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center mb-12">
          Welcome to My Awesome Blog
        </h1>
        <section>
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-8 text-center md:text-left">
            Latest Posts
          </h2>
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map(({ slug, title, excerpt }) => (
                <PostPreview key={slug} slug={slug} title={title} excerpt={excerpt} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">No posts yet. Check back soon!</p>
          )}
        </section>
      </div>
    </Layout>
  );
}
