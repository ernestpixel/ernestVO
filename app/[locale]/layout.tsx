import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import LanguageSwitcher from "@/app/components/LanguageSwitcher";

config.autoAddCss = false;

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ernest Slach – Voice Actor",
  description: "Professional voice over talent portfolio",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={params.locale} className="bg-black text-white">
      <body className={`${poppins.className} antialiased`}>
        {/* ✅ LanguageSwitcher is inside <body>, not wrapping layout */}
        <LanguageSwitcher />
        {children}
      </body>
    </html>
  );
}
