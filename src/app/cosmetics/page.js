

import api from "@/api/endpoint";
import { metadata as pageMeta } from '@/seo/metadatas';
export const metadata = pageMeta.cosmetics;
import FashionAccessories from "./cosmetics";
import Cosmetics from "./cosmetics";









export default  function Page() {
  
  return (
    <>
     
      <Cosmetics />
    </>
  );
}