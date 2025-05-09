

import api from "@/api/endpoint";
import { metadata as pageMeta } from '@/seo/metadatas';

import FashionAccessories from "./cosmetics";
import Cosmetics from "./cosmetics";




export const metadata = {
  title: pageMeta.cosmetics.title,
  description: pageMeta.cosmetics.description,
  alternates: {
    canonical: pageMeta.cosmetics.link,
  },
};





export default  function Page() {
  
  return (
    <>
     
      <Cosmetics />
    </>
  );
}