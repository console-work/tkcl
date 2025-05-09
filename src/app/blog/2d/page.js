

import api from "@/api/endpoint";
import { metadata as pageMeta } from '@/seo/metadatas';

import B2d from "./2d";
;

export const metadata = {
  title: pageMeta.blog2D.title,
  description: pageMeta.blog2D.description,
  alternates: {
    canonical: pageMeta.blog2D.link,
  },
};


export default  function Page() {
  
  return (
    <>
     
      <B2d />
    </>
  );
}