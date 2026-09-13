import type { Metadata } from "next";
import './globals.css';

import { Google_Sans } from 'next/font/google';

import Footer from '@/components/publicPage/Footer';
import Navbar from '@/components/publicPage/Navbar/Navbar';
import SmoothScroll from '@/components/SmoothScroll';
import { ConvexClientProvider } from "@/components/ConvexClientProvider";

import { getToken } from "@/lib/auth-server";
import { cn } from '@/lib/utils';

const googleSans = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhivyakti Design Studio",
  description: "Architectural portfolio showcasing thoughtful, modern spaces and design concepts.",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const token = await getToken();
  return (
    <html
      lang="en"
      className="h-full antialiased scroll-smooth"
    >
      <body className={cn(googleSans.className, "min-h-full flex flex-col")}>
        <ConvexClientProvider initialToken={token}>
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
