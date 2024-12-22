import { useState } from 'react';
import ReactDOM from 'react-dom';

const ImagePopupDesktop = ({ showModal, images, closeModal }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = (direction) => {
        if (direction === 'next') {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        } else if (direction === 'prev') {
            setActiveIndex((prevIndex) =>
                (prevIndex - 1 + images.length) % images.length
            );
        }
    };

    if (!showModal) return null;

    return ReactDOM.createPortal(
        <div className="fullscreen-popup">
            <div className="w-100 d-flex justify-content-end position-absolute ms-3 mt-5 me-4 top-0 end-0">
                <button className="btn-close" aria-label="Close" onClick={closeModal}></button>
            </div>
            <div className="popup-content">
                <div className="image-slider" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Slide ${index}`}
                            className={`slider-image ${activeIndex === index ? 'active' : ''}`}
                        />
                    ))}
                </div>

                <button className="arrow-btn prev" onClick={() => handleScroll('prev')}><img className = "arrLeft" src='/previous.png' width={40} height={40} /></button>
                <button className="arrow-btn next" onClick={() => handleScroll('next')}><img className = "arrRight" src='/next.png' width={40} height={40} /></button>
            </div>
        </div>,
        document.body
    );
};

export default ImagePopupDesktop;