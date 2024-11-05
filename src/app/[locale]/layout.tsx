import "@/styles/globals.css";

import React from "react";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { AppConfig } from "@/utils/app-config";
import { notFound } from "next/navigation";

export default function RootLayout({
  children,
  params: { locale },
}: React.PropsWithChildren<{ params: { locale: string } }>) {
  // Validate that the incoming `locale` parameter is valid
  if (!AppConfig.locales.includes(locale)) notFound();

  // Using internationalization in Client Components
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={poppins.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

const poppins = Poppins({ weight: ["300"], subsets: ["latin"] });

export const metadata: Metadata = {
  icons: [
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
};
