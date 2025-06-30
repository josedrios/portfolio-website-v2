export default function PinnedImage({ imagePath, height }) {
    return (
        <div className="pinned-image-container">
            <div className="pinned-image">
                <img src={imagePath} alt="" style={{ height: height }} />
            </div>
            <img src="/images/pin.png" className="pin-overlay" alt="" />
        </div>
    );
}
