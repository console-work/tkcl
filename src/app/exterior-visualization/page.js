
import api from "@/api/endpoint";

import { metadata as pageMeta } from '@/seo/metadatas';


import ExteriorVisualization from "./exteriorVisualization";



export const metadata = {
  title: pageMeta.exteriorV.title,
  description: pageMeta.exteriorV.description,
  alternates: {
    canonical: pageMeta.exteriorV.link,
  },
};




export default  function Page() {
  
  return (
    <>
     
      <ExteriorVisualization />
    </>
  );
}