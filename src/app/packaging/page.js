

import api from "@/api/endpoint";
import { metadata as pageMeta } from '@/seo/metadatas';

import FashionAccessories from "./packaging";

import Packaging from "./packaging";

export const metadata = {
  title: pageMeta.packaging.title,
  description: pageMeta.packaging.description,
  alternates: {
    canonical: pageMeta.packaging.link,
  },
};
export default  function Page() {
  
  return (
    <>
     
      <Packaging />
    </>
  );
}