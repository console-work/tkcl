

import api from "@/api/endpoint";
import { metadata as pageMeta } from '@/seo/metadatas';
import Furniture from "./furniture";


export const metadata = {
  title: pageMeta.furniture.title,
  description: pageMeta.furniture.description,
  alternates: {
    canonical: pageMeta.furniture.link,
  },
};

export default  function Page() {
  
  return (
    <>
     
      <Furniture />
    </>
  );
}