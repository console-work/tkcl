

import api from "@/api/endpoint";
import { metadata as pageMeta } from '@/seo/metadatas';
import Thanks from "./thanks";
export const metadata = pageMeta.thanks;













export default  function Page() {
  
  return (
    <>
     
      <Thanks />
    </>
  );
}