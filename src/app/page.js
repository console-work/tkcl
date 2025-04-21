// ✅ Server Component (SEO এর জন্য ভালো)
import api from '@/api/endpoint';
import HomeContent from './homeContent';
import { metadata } from "@/seo/metadatas";

export const metadatas = metadata.home;

async function getHomeData() {
  const res = await fetch(api.endpoint.homedata , {
    cache: 'force-cache', 
  });
  const data = await res.json();
  return data;
}

export default async function Page() {
  const data = await getHomeData();
  return <HomeContent data={data} />;
}
