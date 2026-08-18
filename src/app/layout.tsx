import type { Metadata } from "next";

import "./globals.css";
import { Providers } from "../providers/Queryprovider";

export const metadata: Metadata = {
  metadataBase: new URL("https://tasklog-imyoonsoo.vercel.app"),
  title: "Tasklog",
  description: "개인과 팀 모두를 위한 할 일 관리 서비스",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "Tasklog",
    title: "Tasklog",
    description: "개인과 팀 모두를 위한 할 일 관리 서비스",
    url: "https://tasklog-imyoonsoo.vercel.app",
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-background custom-scrollbar">
        <Providers>
          {children}
          {modal}
        </Providers>
      </body>
    </html>
  );
}
