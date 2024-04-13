import "./global.css";

export const metadata = {
  title: "PeerReview",
  description: "Peerreview",
};


import { Montserrat } from 'next/font/google'

const mont = Montserrat({ subsets: ['latin']})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-purple-700 ${mont.className}`}>{children}</body>
    </html>
  );
}
