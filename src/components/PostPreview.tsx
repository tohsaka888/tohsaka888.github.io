import React from 'react';
import Link from 'next/link';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '@/components/ui/card'; // Import shadcn Card components
import { Button } from '@/components/ui/button'; // Import Button for "Read more"

type PostPreviewProps = {
  slug: string;
  title: string;
  excerpt: string;
};

const PostPreview: React.FC<PostPreviewProps> = ({ slug, title, excerpt }) => {
  return (
    <Card className="flex flex-col h-full"> {/* Ensure card takes full height of grid cell */}
      <CardHeader>
        <CardTitle className="text-xl"> {/* Ensure title is not too large for a card */}
          <Link href={`/posts/${slug}`} className="hover:text-primary transition-colors">
            {title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow"> {/* Allow content to grow */}
        <CardDescription>{excerpt}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild variant="link" className="p-0 h-auto">
          <Link href={`/posts/${slug}`}>
            Read more &rarr;
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PostPreview;
