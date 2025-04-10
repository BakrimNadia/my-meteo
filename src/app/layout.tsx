import type { Metadata } from "next";
import "./globals.css";
import { ReduxProvider } from './providers';


export const metadata: Metadata = {
  title: "My météo",
  description: "Météo par ville",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
        {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
