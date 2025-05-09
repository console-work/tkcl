
import api from "@/api/endpoint";
import { metadata as pageMeta } from '@/seo/metadatas';

import APIDocs from "./aPIDocs";

export const metadata = {
  title: pageMeta.apiResources.title,
  description: pageMeta.apiResources.description,
  alternates: {
    canonical: pageMeta.apiResources.link,
  },
};

export default  function Page() {
  
  return (
    <>
     
      <APIDocs />
    </>
  );
}