

import api from "@/api/endpoint";
import { metadata as pageMeta } from '@/seo/metadatas';


import TechEquipments from "./techEquipments";



export const metadata = {
  title: pageMeta.techEquipments.title,
  description: pageMeta.techEquipments.description,
  alternates: {
    canonical: pageMeta.techEquipments.link,
  },
};






export default  function Page() {
  
  return (
    <>
     
      <TechEquipments />
    </>
  );
}