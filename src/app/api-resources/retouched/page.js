
import api from "@/api/endpoint";
import { metadata as pageMeta } from '@/seo/metadatas';
export const metadata = pageMeta.apiResources;
import APIDocs from "./aPIDocs";



export default  function Page() {
  
  return (
    <>
     
      <APIDocs />
    </>
  );
}