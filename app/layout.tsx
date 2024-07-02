'use client';
import 'tailwindcss/tailwind.css';
import { Inter } from "next/font/google";
import './globals.css'
import { ApolloProvider } from "@apollo/client";
import { Inter as FontSans } from "next/font/google"
import { cn } from '@/lib/utils';
import client from '../src/lib/apolloClient';


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ApolloProvider client={client}>
        <body className={cn(
          " bg-background font-sans antialiased",
          fontSans.variable
        )}>{children}</body>
      </ApolloProvider>
    </html >
  );
}
