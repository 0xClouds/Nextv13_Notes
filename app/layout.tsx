/* eslint-disable @next/next/no-head-element */
import Link from "next/link";
import "./global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <nav>
          Im a Nav Bar ->
          <Link href="/">Home</Link>
          <Link href="/notes">Notes</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
