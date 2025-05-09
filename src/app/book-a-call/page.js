
import api from "@/api/endpoint";
import { metadata as pageMeta } from '@/seo/metadatas';

import BookACalls from "./bookAcall";

export const metadata = {
  title: pageMeta.bookCall.title,
  description: pageMeta.bookCall.description,
  alternates: {
    canonical: pageMeta.bookCall.link,
  },
};

export default  function Page() {
  
  return (
    <>
     
      <BookACalls />
    </>
  );
}