import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Avitesh Kesharwani – Cloud & AI Leader',
  description: 'Technology Leader in Cloud Migration, Modernization & AI | IEEE Senior Member | 10+ Years Enterprise Experience',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
