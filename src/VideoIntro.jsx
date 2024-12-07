import React, { useEffect, useRef, useState } from 'react';

const VideoIntro = ({ onVideoEnd }) => {
    const videoRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasStartedTimer, setHasStartedTimer] = useState(false);

    useEffect(() => {
        const video = videoRef.current;

        if (video) {
            const handleLoadedData = () => {
                setIsLoaded(true); // Video is loaded
            };

            const handlePlay = () => {
                if (!hasStartedTimer) {
                    const id = setTimeout(() => {
                        onVideoEnd(); 
                    }, 6000);
                    setHasStartedTimer(true);

                    // Cleanup the timer when component unmounts
                    return () => {
                        clearTimeout(id); 
                    };
                }
            };

            // Add event listeners for loadeddata and play events
            video.addEventListener('loadeddata', handleLoadedData);
            video.addEventListener('play', handlePlay);

            return () => {
                video.removeEventListener('loadeddata', handleLoadedData);
                video.removeEventListener('play', handlePlay);
            };
        }
    }, [onVideoEnd, hasStartedTimer]);

    return (
        <div style={styles.container}>
            {!isLoaded && <div style={styles.loading}>Loading...</div>}
            <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                style={styles.video}
            >
                <source src="/LandJ.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

const styles = {
    container: {
        position: 'unset',
        top: 0,
        left: 0,
        width: '100%',
        height: '60%',
        overflow: 'hidden',
        backgroundColor: '#ECEDFB',
        border: 'none',
        margin: 0,
        padding: 0,
    },
    video: {
        position: 'absolute',
        top: '45%',
        left: '50%',
        width: '65%',
        height: '90%',
        objectFit: 'cover',
        transform: 'translate(-50%, -50%)',
        border: 'none',
        margin: 0,
        padding: 0,
    },
    loading: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        color: 'white',
        fontSize: '24px',
        transform: 'translate(-50%, -50%)',
    },
};

export default VideoIntro;
