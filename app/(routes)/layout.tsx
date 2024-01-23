import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../app/globals.css";
import { APP_SEO_DESCRIPTION, APP_SEO_TITLE } from "@/constants";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ToastProvider } from "@/components/providers/toast-provider";
import { NewOrderModalProvider } from "@/components/providers/NewOrderModal-Provider";
import TopBar from "@/components/topbar";


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
        <div>
            <TopBar />
            {children}
        </div>
    );
}
