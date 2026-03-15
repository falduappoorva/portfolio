import './globals.css';
import { Space_Grotesk, Plus_Jakarta_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';

const displayFont = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
});

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
    <html lang="en" className={`scroll-smooth ${displayFont.variable} ${bodyFont.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var saved=localStorage.getItem('theme');var theme=saved==='light'||saved==='dark'?saved:'dark';document.documentElement.setAttribute('data-theme',theme);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`,
          }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
