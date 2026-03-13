import './globals.css';

export const metadata = {
  title: 'Appoorva Faldu | Mobile Engineering Leader & Security Specialist',
  description:
    'Mobile Engineering Leader and Mobile Cybersecurity Specialist with 10+ years of experience building secure, scalable Android and iOS applications across healthcare, enterprise, and edtech.',
  metadataBase: new URL('https://appoorvafaldu.com'),
  openGraph: {
    title: 'Appoorva Faldu',
    description:
      'I build mobile platforms that scale — and I make sure they\'re secure.',
    images: ['/avatar.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
