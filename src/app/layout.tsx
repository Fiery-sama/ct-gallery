import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CollegeTips.in | Gallery",
  description: "Interactive and Responsive Gallery by Suhail Khan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="bg-[url(/home-background.webp)] bg-no-repeat bg-fixed">
          {children}
        </main>
      </body>
    </html>
  );
}
