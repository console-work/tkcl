import { metadata } from "@/seo/metadatas";
import AboutContent from "./aboutContent";
import api from "@/api/endpoint";


export const metadatas = metadata.about;
async function getAboutData() {
  const res = await fetch(api.endpoint.aboutdata , {
    cache: 'force-cache', 
  });
  const data = await res.json();
  return data;
}

export default async function Page() {
  const data = await getAboutData();
  return <AboutContent data={data }/>;
}
