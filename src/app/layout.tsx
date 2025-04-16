import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vinhomes Grand Park - Đại đô thị đẳng cấp quốc tế",
  description:
    "Vinhomes Grand Park tọa lạc tại vị trí mặt tiền đường Nguyễn Xiển, phường Long Thạnh Mỹ, Quận 9, Tp Thủ Đức, TP Hồ Chí Minh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Vinhomes Grand Park" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Vinhomes Grand Park - Đại đô thị đẳng cấp quốc tế"
        />
        <meta
          property="og:description"
          content="Vinhomes Grand Park tọa lạc tại vị trí mặt tiền đường Nguyễn Xiển, phường Long Thạnh Mỹ, Quận 9, Tp Thủ Đức, TP Hồ Chí Minh."
        />
        <meta property="og:url" content="https://vinhome-quan9.info.vn/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />{" "}
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://vinhome-quan9.info.vn/" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Vinhomes Grand Park",
            url: "https://vinhome-quan9.info.vn",
            logo: "https://vinhome-quan9.info.vn/_next/image?url=%2Fimages%2Fvinhomes-gp-logo.png&w=256&q=75",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+84-0375-515-642",
              contactType: "sales",
            },
          })}
        </script>
      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
