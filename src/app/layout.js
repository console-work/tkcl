

import StoreProvider from './storeProvider';


import '@/styles/global.css';






export default function RootLayout({ children }) {
  return (
    <html lang="en" crosspilot="">
      <body  cz-shortcut-listen="true">
        <StoreProvider>
          
          {children}
          
        </StoreProvider>
        
      </body>
      
    </html>
  );
}
