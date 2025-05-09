

import api from "@/api/endpoint";
import { metadata as pageMeta } from '@/seo/metadatas';

import Blogs from "./3d";
import B3d from "./3d";


export const metadata = {
  title: pageMeta.blog3D.title,
  description: pageMeta.blog3D.description,
  alternates: {
    canonical: pageMeta.blog3D.link,
  },
};

export default  function Page() {
  
  return (
    <>
     
      <B3d />
    </>
  );
}