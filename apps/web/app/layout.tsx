import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@repo/ui/globals.css';
import './globals.css';
import { Header } from '@components/header';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: '사진 조회 앱',
  description: 'Turborepo, Next.js App Router, ShadCN, TailwindCSS를 활용한 사진 조회 앱',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col antialiased text-foreground relative`}
      >
        <Header />
        <main className="flex flex-col min-h-screen w-full">{children}</main>
      </body>
    </html>
  );
}
