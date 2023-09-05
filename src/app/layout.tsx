import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="m-0 h-0 min-h-screen">{children}</body>
    </html>
  );
}
