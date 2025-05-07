

import api from "@/api/endpoint";
import { metadata as pageMeta } from '@/seo/metadatas';
export const metadata = pageMeta.techEquipments;

import TechEquipments from "./techEquipments";









export default  function Page() {
  
  return (
    <>
     
      <TechEquipments />
    </>
  );
}