import type { Metadata } from "next";
import "./globals.css";
import { PropsWithChildren } from "react";
import { ApolloWrapper } from "@/components/providers";
import { AuthProvider } from "@/components/providers/AuthProvider";
import {Header} from "@/components/header/Header";
import {Footer} from "@/components/footer/Footer";
import {SubHeader} from "@/components/header/SubHeader";

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <ApolloWrapper>
            <div className="max-lg:w-full h-screen flex flex-col mx-10">
            <Header/>
            <SubHeader/>
          <AuthProvider>
        
            {children}
 
          </AuthProvider>
            <Footer/>
            </div>
       </ApolloWrapper>
      </body>
    </html>
  );
}
