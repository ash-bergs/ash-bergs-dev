import type { Metadata } from 'next';
import { Providers } from './providers';
import HeaderNav from '@/components/HeaderNav';

export const metadata: Metadata = {
  title: 'Ash Bergs',
  description: 'Web Developer & Artist',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <HeaderNav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
