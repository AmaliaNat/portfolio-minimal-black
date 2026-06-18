import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const salsaFont = localFont({
  src: "../public/fonts/Salsa-BT-Redonda-3-2-1.woff",
  variable: "--font-display",
});


const rigrafFont = localFont({
  src: [
    {
      path: "../public/fonts/DXRigraf-SemiBold.otf",
      weight: "600",
      style: "normal",
    },

    {
      path: "../public/fonts/DXRigraf-SemiBoldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/DXRigraf-SemiBoldExpanded.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/DXRigraf-SemBdExpIta.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-rigraf",
});

const sansFont = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-sans",
});

const monoFont = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Amalia Natasha | Portfolio",
  description: "A Boring Dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sansFont.variable} ${salsaFont.variable} ${rigrafFont.variable} ${monoFont.variable}`}
    >
      <body className="bg-[#121314] text-[#E2D9F3] font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}