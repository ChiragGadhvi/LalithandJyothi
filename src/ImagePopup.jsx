// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';

// const ImagePopup = ({ showModal, images, closeModal }) => {
//     const [activeIndex, setActiveIndex] = useState(0);

//     const handleScroll = (direction) => {
//         if (direction === 'next') {
//             setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
//         } else if (direction === 'prev') {
//             setActiveIndex((prevIndex) =>
//                 (prevIndex - 1 + images.length) % images.length
//             );
//         }
//     };

//     if (!showModal) return null;

//     return ReactDOM.createPortal(
//         <div className="fullscreen-popup">
//             <div className="w-100 d-flex justify-content-end position-absolute ms-3 mt-5 me-4 top-0 end-0">
//                 <button className="btn-close" aria-label="Close" onClick={closeModal}></button>
//             </div>
//             <div className="popup-content">
//                 <div className="image-slider" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
//                     {images.map((image, index) => (
//                         <img
//                             key={index}
//                             src={image}
//                             alt={`Slide ${index}`}
//                             className={`slider-image ${activeIndex === index ? 'active' : ''}`}
//                         />
//                     ))}
//                 </div>

//                 <button className="arrow-btn prev" onClick={() => handleScroll('prev')}><img className = "arrLeft" src='/previous.png' width={40} height={40} /></button>
//                 <button className="arrow-btn next" onClick={() => handleScroll('next')}><img className = "arrRight" src='/next.png' width={40} height={40} /></button>
//             </div>
//         </div>,
//         document.body
//     );
// };

// export default ImagePopup;

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSwipeable } from 'react-swipeable';

const ImagePopup = ({ showModal, images, closeModal }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        // Prevent background scrolling when modal is open
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // Cleanup on component unmount
        return () => {
            document.body.style.overflow = '';
        };
    }, [showModal]);

    const handleSwipe = (direction) => {
        if (direction === 'left') {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        } else if (direction === 'right') {
            setActiveIndex((prevIndex) =>
                (prevIndex - 1 + images.length) % images.length
            );
        }
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => handleSwipe('left'),
        onSwipedRight: () => handleSwipe('right'),
        trackMouse: true, // Allows swipe gestures with a mouse as well
    });

    if (!showModal) return null;

    return ReactDOM.createPortal(
        <div className="fullscreen-popup">
            {/* Close Button */}
            <div className="w-100 d-flex justify-content-end position-absolute ms-3 mt-3 me-3 top-0 end-0">
                <button
                    className="btn-close"
                    aria-label="Close"
                    onClick={closeModal}
                ></button>
            </div>

            {/* Slider Content */}
            <div
                className="popup-content"
                {...swipeHandlers} // Attach swipe handlers here
            >
                <div
                    className="image-slider"
                    style={{
                        display: 'flex',
                        transition: 'transform 0.3s ease-in-out',
                        transform: `translateX(-${activeIndex * 100}%)`,
                    }}
                >
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Slide ${index}`}
                            className="slider-image"
                            style={{
                                width: '100%',
                                flexShrink: 0,
                                objectFit: 'contain',
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>,
        document.body
    );
};

export default ImagePopup;

