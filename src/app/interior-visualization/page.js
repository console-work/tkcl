
import api from "@/api/endpoint";
import { metadata as pageMeta } from '@/seo/metadatas';

import InteriorVisualization from "./interiorVisualization";
export const metadata = {
  title: pageMeta.interiorV.title,
  description: pageMeta.interiorV.description,
  alternates: {
    canonical: pageMeta.interiorV.link,
  },
};
export default  function Page() {
  
  return (
    <>
     
      <InteriorVisualization />
    </>
  );
}