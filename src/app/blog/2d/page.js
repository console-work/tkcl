

import api from "@/api/endpoint";
import { metadata as pageMeta } from '@/seo/metadatas';
export const metadata = pageMeta.blog2D;
import B2d from "./2d";
;

export default  function Page() {
  
  return (
    <>
     
      <B2d />
    </>
  );
}