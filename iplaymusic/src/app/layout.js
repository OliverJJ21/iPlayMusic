// import { DarkModeProvider } from '@/context/DarkModeContext';
import './globals.scss';

export const metadata = {
  title: 'iPlayMusic',
  description: 'Music App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <DarkModeProvider> */}
          {children}
        {/* </DarkModeProvider> */}
      </body>
    </html>
  );
}
