
import api from "@/api/endpoint";

import { metadata as pageMeta } from '@/seo/metadatas';
export const metadata = pageMeta.exteriorV;

import ExteriorVisualization from "./exteriorVisualization";







export default  function Page() {
  
  return (
    <>
     
      <ExteriorVisualization />
    </>
  );
}