

import api from "@/api/endpoint";
import { metadata as pageMeta } from '@/seo/metadatas';

import Partnership from "./integrationsAndPartnership";



export const metadata = {
  title: pageMeta.integrationsPartnership.title,
  description: pageMeta.integrationsPartnership.description,
  alternates: {
    canonical: pageMeta.integrationsPartnership.link,
  },
};
export default  function Page() {
  
  return (
    <>
     
      <Partnership />
    </>
  );
}