import { Footer } from "./Footer";
import "./globals.css";

import { Header } from "./Header";

export const metadata = {
  title: "Wushu Academy",
  description: "Wushu Academy study material for the exams",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="mb-16">
      <body className="bg-white-50">
        <Header />
        <div className="h-[120vh] flex flex-col px-4 m-auto md:w-3/4 w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
