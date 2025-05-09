

import api from "@/api/endpoint";
import { metadata as pageMeta } from '@/seo/metadatas';
import FashionAccessories from "./fashionAccessories";





export const metadata = {
  title: pageMeta.fashionA.title,
  description: pageMeta.fashionA.description,
  alternates: {
    canonical: pageMeta.fashionA.link,
  },
};



export default  function Page() {
  
  return (
    <>
     
      <FashionAccessories />
    </>
  );
}