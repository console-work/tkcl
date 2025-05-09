import api from '@/api/endpoint';
import { metadata as pageMeta } from '@/seo/metadatas';
import Contacts from './contact';




export const metadata = {
  title: pageMeta.contactUs.title,
  description: pageMeta.contactUs.description,
  alternates: {
    canonical: pageMeta.contactUs.link,
  },
};




export default  function Page() {

  return (
    <>
     
     <Contacts/>
    </>
  );

}