import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { APP_SEO_DESCRIPTION, APP_SEO_TITLE } from "@/constants";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ToastProvider } from "@/components/providers/toast-provider";
import { NewOrderModalProvider } from "@/components/providers/NewOrderModal-Provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", });

export const metadata: Metadata = {
  title: `${APP_SEO_TITLE}`,
  description: `%${APP_SEO_DESCRIPTION}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          {/* <ToastProvider /> */}
          <NewOrderModalProvider />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
