
import api from "@/api/endpoint";
import { metadata as pageMeta } from '@/seo/metadatas';
import Careers from "./careers";


export const metadata = {
  title: pageMeta.career.title,
  description: pageMeta.career.description,
  alternates: {
    canonical: pageMeta.career.link,
  },
};


export default  function Page() {
  
  return (
    <>
     
      <Careers />
    </>
  );
}