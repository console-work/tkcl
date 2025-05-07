
import api from "@/api/endpoint";
import { metadata as pageMeta } from '@/seo/metadatas';
export const metadata = pageMeta.interiorV;
import InteriorVisualization from "./interiorVisualization";

export default  function Page() {
  
  return (
    <>
     
      <InteriorVisualization />
    </>
  );
}