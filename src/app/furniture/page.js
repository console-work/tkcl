

import api from "@/api/endpoint";
import { metadata as pageMeta } from '@/seo/metadatas';
export const metadata = pageMeta.furniture;
import Furniture from "./furniture";









export default  function Page() {
  
  return (
    <>
     
      <Furniture />
    </>
  );
}