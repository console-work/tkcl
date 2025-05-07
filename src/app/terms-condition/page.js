

import api from "@/api/endpoint";
import { metadata as pageMeta } from '@/seo/metadatas';
export const metadata = pageMeta.termsCondition;
import TermsConditions from "./termsConditions";












export default  function Page() {
  
  return (
    <>
     
      <TermsConditions />
    </>
  );
}