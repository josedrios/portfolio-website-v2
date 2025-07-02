import Link from 'next/link'
import Image from 'next/image';

export default function NotFound() {
    return (
        <div className="not-found">
            <main id="not-found-page">
                <div id="not-found-header">
                    <p>4</p>
                    <Image src="/images/base.webp" alt="" />
                    <p>4</p>
                </div>
                <p className="not-found-info">
                    <b>
                        <i>
                            <span>Page Not Found</span>
                        </i>
                    </b>
                </p>
                <p className="not-found-info">
                    It could be possible that the page is just hiding from you. Go back
                    home <Link href="/">here</Link>
                </p>
            </main>
        </div>
    );
}
