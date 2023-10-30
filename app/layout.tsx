import '@/app/globals.css'
import type {Metadata} from 'next'
import {Poppins} from 'next/font/google'
import React from "react";
import {AuthProvider} from "@/contexts/user-provider";
import ToastProvider from "@/contexts/toast-provider";
import Footer from "@/components/ui/footer/footer";

const font = Poppins({subsets: ['latin'], weight: "400"});

export const metadata: Metadata = {
  title: 'Calories Website',
  description: 'Website for recipes calories tracking',
}


export default async function RootLayout({
                                           children,
                                         }: {
  children: React.ReactNode
}) {

  return (
    <AuthProvider>
      <html lang="en">
      <body className={font.className}>
      <ToastProvider>
        {children}
        <Footer/>
      </ToastProvider>
      </body>
      </html>

    </AuthProvider>

  )
}
