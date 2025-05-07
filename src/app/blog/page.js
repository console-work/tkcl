

import api from "@/api/endpoint";
import Blogs from "./blogs";
import { metadata as pageMeta } from '@/seo/metadatas';
export const metadata = pageMeta.blog;
export default  function Page() {
  
  return (
    <>
     
      <Blogs />
    </>
  );
}