

import api from "@/api/endpoint";
import { metadata as pageMeta } from '@/seo/metadatas';

import TechAccessories from "./techAccessories";



export const metadata = {
  title: pageMeta.techAccessories.title,
  description: pageMeta.techAccessories.description,
  alternates: {
    canonical: pageMeta.techAccessories.link,
  },
};






export default  function Page() {
  
  return (
    <>
     
      <TechAccessories />
    </>
  );
}