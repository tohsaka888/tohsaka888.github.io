import Layout from '@/components/Layout';
import { getAllPostSlugs, getPostData, PostData } from '@/lib/posts';
import { notFound } from 'next/navigation'; // For handling not found posts

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

// This function generates static paths at build time.
export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths.map(path => ({ slug: path.params.slug }));
}

// This function fetches data for a specific post.
async function getPost(slug: string): Promise<PostData | null> {
  try {
    const postData = await getPostData(slug);
    return postData;
  } catch (error) {
    // If file not found or other error, return null
    console.error(`Error fetching post data for slug ${slug}:`, error);
    return null;
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPost(params.slug);

  if (!post || !post.contentHtml) {
    notFound(); // Triggers the not-found page
  }

  return (
    <Layout>
      <article className="prose lg:prose-xl dark:prose-invert mx-auto py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-2">{post.title}</h1>
          <p className="text-lg text-muted-foreground">Published on {new Date(post.date).toLocaleDateString()}</p>
        </header>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
    </Layout>
  );
}
