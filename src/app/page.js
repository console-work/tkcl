
import api from "@/api/endpoint";
import { metadata as pageMeta } from '@/seo/metadatas';
import HomeClient from './homeClient';
import Loader from '@/components/loader';

export const metadata = {
  title: pageMeta.home.title,
  description: pageMeta.home.description,
  alternates: {
    canonical: pageMeta.home.link,
  },
};

// import Head from "next/head";

export default  function Home() {
  
  return (
    <>
     
      {/* Client-side hydration with loader */}
      {/* <HomeClient initialData={initialData} fallback={<Loader />} /> */}
      <HomeClient />
      
    </>
  );
}