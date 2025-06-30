import Header from '@/components/Header';
import '../styles/main.scss';

export const metadata = {
    title: 'Jose D. Rios',
    description: 'This is my personal website.',
    icons: {
        icon: [
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        ],
        apple: '/apple-touch-icon.png',
        shortcut: '/favicon.ico',
    },
    manifest: '/site.webmanifest',
    themeColor: '#fcf4d4',
    openGraph: {
        title: 'Jose D. Rios',
        description: 'This is my personal website.',
        url: 'https://josedrios.com',
        siteName: 'Jose D. Rios',
        images: [
            {
                // url: create one,
                width: 1200,
                height: 630,
                alt: 'Jose D. Rios',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Jose D. Rios',
        description: 'This is my personal website.',
        // images: create one
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head />
            <body suppressHydrationWarning={true}>
                <div id="root">
                    <div id="website-container">
                        <Header />
                        {children}
                    </div>
                    <p id="copy-right">Copyright © 2025 Jose De Jesus Rios</p>
                </div>
            </body>
        </html>
    );
}
