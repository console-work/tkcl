// src/app/blog/[slug]/blogdetails.js
'use client';

import Head from 'next/head';
import Navbar2D from '@/components/navbar/navbar2D';
import Navbar3D from '@/components/navbar/navbar3D';
// import Page7 from '@/components/Page7';
import Footer from '@/components/footer/footer';
import ScrolTop from '@/components/scrolTop/scrolTop';
import Footer2D from '@/component2d/footer2D/footer2D';
import Footer3D from '@/component3d/footer3D/footer3D';
import BlogShare from '@/components/blogHistory/blogShare';

const BlogDetails = ({ blog, is2D }) => {
  return (
    <>


      <ScrolTop />
      {is2D ? <Navbar2D /> : <Navbar3D />}

      <div className="bg-[#DEE2E2]">
        <div className="pb-40 overflow-hidden">
          <div className="w-full pt-24 relative">
            <div
              className="absolute top-0 left-0 w-full h-[90%] opacity-60 bg-no-repeat bg-bottom bg-[length:130%_170%]"
              style={{ backgroundImage: `url(${blog.thumb})` }}
            />
            <div className="container mx-auto relative z-20">
              <div className="w-full h-full relative">
                <div className="w-full h-full">
                  <img className="w-4/5 shadow-kow-shadow-sm" src={blog.thumb} alt={blog.title} />
                </div>
                <div className="absolute bottom-0 -right-[100px] -z-10 w-[400px] h-[400px] opacity-60">
                  <img src="/img/Blog-Images/circle.webp" alt="Circle Decoration" className="w-full h-full" />
                </div>
                <div className="bg-[#7c9c30] w-full md:w-[590px] shadow-kow-shadow-sm py-10 pl-10 absolute -bottom-20 right-0 flex flex-col gap-3">
                  <h1 className="text-white text-3xl pb-1 font-bold pr-10 border-b-[1px] border-[#6f8a0e]">
                    {blog.title}
                  </h1>
                  <span className="text-lg">{blog.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="blogDetail" dangerouslySetInnerHTML={{ __html: blog.description }} />
        </div>

        <BlogShare />
      </div>

      {is2D ? <Footer2D /> : <Footer3D />}
    </>
  );
};

export default BlogDetails;
