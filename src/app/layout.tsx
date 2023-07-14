import type { Metadata } from 'next';

import Analytics from '@/config/Analytics';
import defaultMetadata from './metadata';
import '@/styles/globals.scss';

export const metadata: Metadata = {
  ...defaultMetadata,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <Analytics />

      <body>{children}</body>
    </html>
  );
}
