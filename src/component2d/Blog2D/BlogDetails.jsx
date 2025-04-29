import { HeadProvider, Meta, Title } from "react-head";
import PropTypes from 'prop-types'; // Add prop-types
import ScrolTop from "../../component/ScrolTop/ScrolTop";
import Footer from "../../component/footer/footer";
import Page7 from "./Page7";
import Navbar2D from "../Navbar2D/Navbar2D";

// Remove data fetching logic and use props
const BlogDetails = ({ blogData }) => {
  if (!blogData) {
    return <p className="text-center mt-10">Blog not found</p>;
  }

  return (
    <>
      <HeadProvider>
        <Title>{blogData.title}</Title>
        <Meta name="description" content={blogData.metaDescription} />
        <Meta property="og:title" content={blogData.title} />
        <Meta property="og:image" content={window.location.href + blogData.thumb} />
        <Meta property="og:description" content={blogData.metaDescription} />
        <Meta property="og:url" content={window.location.href} />
      </HeadProvider>

      <ScrolTop />
      <Navbar2D />

      <div className="bg-[#DEE2E2]">
        <div className="pb-40 overflow-hidden">
          <div className="w-full pt-24 relative">
            <div
              className="absolute top-0 left-0 w-full h-[90%] opacity-60 bg-no-repeat bg-bottom bg-[length:130%_170%]"
              style={{ backgroundImage: `url(${blogData.thumb})` }}
            ></div>

            <div className="container mx-auto relative z-20">
              <div className="w-full h-full relative">
                <div className="w-full h-full">
                  <img className="w-4/5 shadow-kow-shadow-sm" src={blogData.thumb} alt={blogData.title} />
                </div>

                <div className="absolute bottom-0 -right-[100px] -z-10 w-[400px] h-[400px] opacity-60">
                  <img src="/img/Blog-Images/circle.webp" alt="Circle Decoration" className="w-full h-full" />
                </div>

                <div className="bg-[#7c9c30] w-full md:w-[590px] shadow-kow-shadow-sm py-10 pl-10 absolute -bottom-20 right-0 flex flex-col gap-3">
                  <h1 className="text-white text-3xl pb-1 font-bold pr-10 border-b-[1px] border-[#6f8a0e]">
                    {blogData.title}
                  </h1>
                  <span className="text-lg">{blogData.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="blogDetail" dangerouslySetInnerHTML={{ __html: blogData.description }} />
        </div>

        <Page7 />
      </div>

      <Footer />
    </>
  );
};

BlogDetails.propTypes = {
  blogData: PropTypes.shape({
    title: PropTypes.string,
    metaDescription: PropTypes.string,
    thumb: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string
  })
};

export default BlogDetails;