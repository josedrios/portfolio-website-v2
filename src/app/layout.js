// import Background from '@/util/Background';
import Header from '@/components/Header';
import '../styles/main.scss';
import Background from '@/util/Background';

export const metadata = {
    title: 'Jose D. Rios',
    description: 'This is my personal website.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            {/* <Background /> */}
            <body suppressHydrationWarning={true}>
                <div id="root">
                    <div id="website-container">
                        <Header />
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
