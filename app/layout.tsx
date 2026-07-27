import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "巴西猫砂品牌竞争与包装研究",
  description: "Pipicat、Viva!Verde、Catbio、KÄDI与WiseCat的品牌、产品和包装整合研究。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
