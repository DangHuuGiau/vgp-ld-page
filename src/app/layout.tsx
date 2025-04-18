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
  title: "Vinhomes Grand Park Quận 9 | Căn Hộ Đại Đô Thị Đẳng Cấp Quốc Tế",
  description:
    "Tư vấn mua bán, cho thuê căn hộ Vinhomes Grand Park Quận 9 chính chủ ✓ Giá tốt nhất thị trường ✓ Hỗ trợ vay ngân hàng ✓ Pháp lý đầy đủ ✓ Liên hệ ngay!",
  keywords: "Vinhomes Grand Park, căn hộ Vinhomes Quận 9, mua bán căn hộ Vinhomes, tư vấn Vinhomes Grand Park, bất động sản Thủ Đức, chung cư Vinhomes, nhà ở Vinhomes",
  alternates: {
    canonical: 'https://vinhome-quan9.info.vn/'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content="Vinhomes Grand Park" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Vinhomes Grand Park, căn hộ Vinhomes Quận 9, mua bán căn hộ Vinhomes, tư vấn Vinhomes Grand Park, bất động sản Thủ Đức" />
        <meta name="geo.region" content="VN-SG" />
        <meta name="geo.placename" content="Quận 9, Thành phố Thủ Đức" />
        <meta name="geo.position" content="10.842222;106.829636" />
        <meta name="language" content="vietnamese" />
        <meta
          property="og:title"
          content="Vinhomes Grand Park Quận 9 | Tư Vấn Mua Bán Căn Hộ Chính Chủ"
        />
        <meta
          property="og:description"
          content="Tư vấn mua bán, cho thuê căn hộ Vinhomes Grand Park Quận 9 chính chủ ✓ Giá tốt nhất thị trường ✓ Hỗ trợ vay ngân hàng ✓ Pháp lý đầy đủ ✓ Liên hệ ngay!"
        />
        <meta property="og:url" content="https://vinhome-quan9.info.vn/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://vinhome-quan9.info.vn/images/hero-vinhomes-gp.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://vinhome-quan9.info.vn/" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            name: "Vinhomes Grand Park Quận 9",
            url: "https://vinhome-quan9.info.vn",
            logo: "https://vinhome-quan9.info.vn/_next/image?url=%2Fimages%2Fvinhomes-gp-logo.png&w=256&q=75",
            description: "Tư vấn mua bán, cho thuê căn hộ Vinhomes Grand Park Quận 9 chính chủ với giá tốt nhất thị trường. Hỗ trợ vay ngân hàng, pháp lý đầy đủ.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Đường Nguyễn Xiển",
              addressLocality: "Quận 9",
              addressRegion: "TP. Thủ Đức",
              postalCode: "700000",
              addressCountry: "VN"
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+84-0375-515-642",
              contactType: "sales",
              availableLanguage: "Vietnamese"
            },
            sameAs: [
              "https://facebook.com/vinhomesgrandpark.official",
              "https://youtube.com/c/vinhomesgrandpark"
            ]
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
