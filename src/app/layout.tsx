import type {Metadata} from 'next';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"; 

export const metadata: Metadata = {
  title: 'NourishVita Essentials',
  description: 'Fuel Your Life with Superfoods.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={`flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster /> {/* Add Toaster component here */}
      </body>
    </html>
  );
}
