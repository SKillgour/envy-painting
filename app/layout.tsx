import type { Metadata } from "next";
import "./globals.css";
import EPHeader from "@/components/EPHeader";
import EPFooter from "@/components/EPFooter";

export const metadata: Metadata = {
  title: "Envy Painting Ltd | Palmerston North Painters",
  description:
    "Interior and exterior painting done right across Palmerston North and surrounding areas. Residential and commercial. Call Nathan: 027 574 8769.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Source+Sans+3:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <EPHeader />
        <main>{children}</main>
        <EPFooter />
      </body>
    </html>
  );
}
