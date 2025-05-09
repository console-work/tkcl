
import api from "@/api/endpoint";
import { metadata as pageMeta } from '@/seo/metadatas';

import Threedmr from "./threedmr";

export const metadata = {
  title: pageMeta.threeMR.title,
  description: pageMeta.threeMR.description,
  alternates: {
    canonical: pageMeta.threeMR.link,
  },
};








export default  function Page() {
  
  return (
    <>
     
      <Threedmr />
    </>
  );
}