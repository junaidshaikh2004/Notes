'use cilent'
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";
// import "@radix-ui/themes/styles.css";
// import { Inter } from 'next/font/google'
import { Theme } from "@radix-ui/themes";
import NoteList from "./NoteList";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Theme>
        <Navbar/>
        <main className='p-5' >{children}</main>
        {/* <ThemePanel/> */}
        {/* <NoteList/> */}
        </Theme>
        </body>
    </html>
  );
}
