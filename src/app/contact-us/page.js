import api from '@/api/endpoint';
import { metadata as pageMeta } from '@/seo/metadatas';
export const metadata = pageMeta.contactUs;
import Contacts from './contact';








export default  function Page() {

  return (
    <>
     
     <Contacts/>
    </>
  );

}