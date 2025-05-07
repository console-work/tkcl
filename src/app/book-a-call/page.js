
import api from "@/api/endpoint";
import { metadata as pageMeta } from '@/seo/metadatas';
export const metadata = pageMeta.bookCall;
import BookACalls from "./bookAcall";

export default  function Page() {
  
  return (
    <>
     
      <BookACalls />
    </>
  );
}