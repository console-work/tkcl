
import api from "@/api/endpoint";
import { metadata as pageMeta } from '@/seo/metadatas';
import HomeClient from './homeClient';
import Loader from '@/components/loader';



export const metadata = pageMeta.home;

// async function getHomeData() {
//   const res = await fetch(api.endpoint.homedata);
//   return await res.json();
// }

export default  function Home() {

  
  return (
    <>
     
      
      {/* Client-side hydration with loader */}
      {/* <HomeClient initialData={initialData} fallback={<Loader />} /> */}
      <HomeClient />
    </>
  );
}