

import api from "@/api/endpoint";
import Blogs from "./blogs";
import { metadata as pageMeta } from '@/seo/metadatas';

export const metadata = {
  title: pageMeta.blog.title,
  description: pageMeta.blog.description,
  alternates: {
    canonical: pageMeta.blog.link,
  },
};


export default  function Page() {
  
  return (
    <>
     
      <Blogs />
    </>
  );
}