

import StoreProvider from './storeProvider';
import Header from '@/components/header';
import Footer from '@/components/footer';
import '../styles/globals.css';
import '../styles/header.css';
import '../styles/footer.css';


export const metadata = {
  title: 'Company Portfolio',
  description: 'Official portfolio site for our company',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" crosspilot="">
      <body  cz-shortcut-listen="true">
        <StoreProvider>
          <Header />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
