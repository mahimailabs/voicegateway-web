import type { Metadata } from 'next';
import Nav from '../components/Nav';
import SiteFooter from '../components/SiteFooter';
import './globals.css';

export const metadata: Metadata = {
  title: 'VoiceGateway · self-hosted voice agent SDK',
  description:
    "Self-hosted voice agent SDK for LiveKit. Track cost per call, replay any conversation, route per latency budget. MIT, on your keys.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
