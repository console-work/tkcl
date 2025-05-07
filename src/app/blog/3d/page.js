

import api from "@/api/endpoint";
import { metadata as pageMeta } from '@/seo/metadatas';
export const metadata = pageMeta.blog3D;
import Blogs from "./3d";
import B3d from "./3d";

export default  function Page() {
  
  return (
    <>
     
      <B3d />
    </>
  );
}