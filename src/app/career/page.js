
import api from "@/api/endpoint";
import { metadata as pageMeta } from '@/seo/metadatas';
export const metadata = pageMeta.career;
import Careers from "./careers";


export default  function Page() {
  
  return (
    <>
     
      <Careers />
    </>
  );
}