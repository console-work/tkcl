

import api from "@/api/endpoint";
import { metadata as pageMeta } from '@/seo/metadatas';

import TermsConditions from "./termsConditions";

export const metadata = {
  title: pageMeta.termsCondition.title,
  description: pageMeta.termsCondition.description,
  alternates: {
    canonical: pageMeta.termsCondition.link,
  },
};


export default  function Page() {
  
  return (
    <>
     
      <TermsConditions />
    </>
  );
}