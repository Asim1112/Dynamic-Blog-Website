import React from 'react';
import { Card, CardContent, CardTitle } from "../components/ui/card";
import Image from 'next/image';

interface BlogCardProps {
  post: { id: string; title: string; description: string; date: string; imageUrl: string };
  isDarkBackground: boolean;
}

const BlogCard = ({ post, isDarkBackground }: BlogCardProps) => {
  return (
    <Card className={`p-4 ${isDarkBackground ? 'bg-slate-800 text-white' : 'text-slate-800'} rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}>
      
      {/* Image */}
      <Image
        src={post.imageUrl}
        alt={post.title}
        width={300}
        height={200}
        className="w-full h-48 object-cover rounded-t-lg"
      />

      {/* Title */}
      <CardTitle className="text-2xl font-normal mt-4 text-center">{post.title}</CardTitle>

      {/* Description */}
      <CardContent className="text-center">
        <p>{post.description}</p>
      </CardContent>

      {/* Footer */}
      <div className="flex flex-col items-center mt-4">
        <p className={`text-sm mb-2 ${isDarkBackground ? 'text-slate-400' : 'text-slate-600'}`}>
          Published on: {new Date(post.date).toLocaleDateString()}
        </p>
        <a
          href={`/posts/${post.id}`}
          className={`w-full px-6 py-2 text-white rounded transition-colors duration-300 ${
            isDarkBackground ? "bg-black hover:bg-gray-700" : "bg-blue-600 hover:bg-blue-500"
          }`}
        >
          Read more
        </a>
      </div>
      
    </Card>
  );
};

export default BlogCard;
