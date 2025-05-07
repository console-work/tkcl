
import api from "@/api/endpoint";
import { metadata as pageMeta } from '@/seo/metadatas';
export const metadata = pageMeta.threeMR;
import Threedmr from "./threedmr";









export default  function Page() {
  
  return (
    <>
     
      <Threedmr />
    </>
  );
}