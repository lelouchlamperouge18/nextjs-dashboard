import { Metadata } from 'next';
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Header from './components/common/Header';

export const metadata: Metadata = {
  title: {
    template: '%s | Academic Online',
    default: 'Academic Online',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
