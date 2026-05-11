import type { Metadata } from 'next';
import { RootProvider } from 'fumadocs-ui/provider/next';
import Nav from '../components/Nav';
import SiteFooter from '../components/SiteFooter';
import './globals.css';

const title = 'VoiceGateway · self-hosted voice agent SDK';
const description =
  "Self-hosted voice agent SDK for LiveKit. Track cost per call, replay any conversation, route per latency budget. MIT, on your keys.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: '%s · VoiceGateway',
  },
  description,
  metadataBase: new URL('https://voicegateway.mahimai.ca'),
  openGraph: {
    title,
    description: 'Self-hosted voice agent SDK for LiveKit. MIT, on your keys.',
    url: 'https://voicegateway.mahimai.ca',
    type: 'website',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: 'Self-hosted voice agent SDK for LiveKit. MIT, on your keys.',
    images: ['/og.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RootProvider>
          <Nav />
          {children}
          <SiteFooter />
        </RootProvider>
      </body>
    </html>
  );
}
