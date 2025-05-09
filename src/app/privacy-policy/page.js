

import api from "@/api/endpoint";
import { metadata as pageMeta } from '@/seo/metadatas';
// export const metadata = pageMeta.privacyPolicy;
import PrivacyPolics from "./privacyPolics";

export const metadata = {
  title: pageMeta.privacyPolicy.title,
  description: pageMeta.privacyPolicy.description,
  alternates: {
    canonical: pageMeta.privacyPolicy.link,
  },
};


export default  function Page() {
  
  return (
    <>
     <PrivacyPolics />
    </>
  );
}