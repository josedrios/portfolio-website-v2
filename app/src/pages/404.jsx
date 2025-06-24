export default function NotFound() {
    return (
        <main id="not-found-content">
            <div id="not-found-header">
                <p>4</p>
                <img src="/images/base.png" alt="" />
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
                It could be possible that the page is just hiding from you. Go back home{' '}
                <a href="">here</a>
            </p>
        </main>
    );
}
