

import api from "@/api/endpoint";
import { metadata as pageMeta } from '@/seo/metadatas';
import Thanks from "./thanks";
// export const metadata = pageMeta.thanks;


export const metadata = {
  title: pageMeta.thanks.title,
  description: pageMeta.thanks.description,
  alternates: {
    canonical: pageMeta.thanks.link,
  },
};

export default  function Page() {
  
  return (
    <>
     
      <Thanks />
    </>
  );
}