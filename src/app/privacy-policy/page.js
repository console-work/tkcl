

import api from "@/api/endpoint";
import { metadata as pageMeta } from '@/seo/metadatas';
export const metadata = pageMeta.privacyPolicy;
import PrivacyPolics from "./privacyPolics";



export default  function Page() {
  
  return (
    <>
     <PrivacyPolics />
    </>
  );
}