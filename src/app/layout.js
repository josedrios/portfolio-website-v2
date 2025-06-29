import Header from '@/components/Header';
import '../styles/main.scss';

export const metadata = {
    title: 'Jose D. Rios',
    description: 'This is my personal website.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
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
