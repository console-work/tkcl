// src/app/blog/[slug]/page.js
import fs from 'fs';
import path from 'path';
import BlogDetails from './blogDetails';

export async function generateMetadata({ params }) {
  const blog2D = JSON.parse(fs.readFileSync('public/data/blog2D.json'));
  const blog3D = JSON.parse(fs.readFileSync('public/data/blog3D.json'));
  const allBlogs = [...blog2D, ...blog3D];

  const blog = allBlogs.find(
    (item) =>
      item.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') === params.slug
  );

  if (!blog) {
    return {
      title: 'Blog Not Found',
      description: 'The requested blog could not be found.',
    };
  }

  return {
    title: blog.title,
    description: blog.metaDescription || blog.description?.slice(0, 160),
    openGraph: {
      title: blog.title,
      description: blog.metaDescription || blog.description?.slice(0, 160),
      images: [blog.thumb],
      url: `https://thekowcompany.com/blog/${params.slug}`,
    },
  };
}

export async function generateStaticParams() {
  const blog2D = JSON.parse(fs.readFileSync('public/data/blog2D.json'));
  const blog3D = JSON.parse(fs.readFileSync('public/data/blog3D.json'));
  const allBlogs = [...blog2D, ...blog3D];

  return allBlogs.map((item) => ({
    slug: item.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
  }));


  
}

export default async function Page({ params }) {
  const blog2D = JSON.parse(fs.readFileSync('public/data/blog2D.json'));
  const blog3D = JSON.parse(fs.readFileSync('public/data/blog3D.json'));
  const allBlogs = [...blog2D, ...blog3D];

  const blog = allBlogs.find(
    (item) =>
      item.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') === params.slug
  );

  if (!blog) return <div>Blog Not Found</div>;

  const is2D = blog2D.some((b) => b.title === blog.title);



  return <BlogDetails blog={blog} is2D={is2D} />;
}
