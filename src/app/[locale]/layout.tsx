import React from 'react';
import "./globals.scss"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body className={``}>
        {children}
      </body>
    </html>
  );
}
