import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Partani Eye Care | Expert Eye Care Services in Nashik",
  description: "Professional eye care services including cataract surgery, LASIK, glaucoma management, and comprehensive eye exams in Nashik, Maharashtra.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
