

import api from "@/api/endpoint";
import { metadata as pageMeta } from '@/seo/metadatas';
export const metadata = pageMeta.techAccessories;
import TechAccessories from "./techAccessories";









export default  function Page() {
  
  return (
    <>
     
      <TechAccessories />
    </>
  );
}