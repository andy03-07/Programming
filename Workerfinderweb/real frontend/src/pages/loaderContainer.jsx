import React from 'react';
import '../Styles/loader.css'; // Import CSS for additional styling if needed

const Loader = () => {
    return (
        <div style={styles.loaderContainer}>
            {/* Background logo */}
            <img src="logo.png" alt="Worker Finder Logo" style={styles.backgroundLogo} />

            {/* Blinking text */}
            <div style={styles.blinkingText}>
                <span style={{ ...styles.letter, ...styles.letter1 }}>W</span>
                <span style={{ ...styles.letter, ...styles.letter2 }}>F</span>
                <span style={{ ...styles.letter, ...styles.letter3 }}>W</span>
            </div>
        </div>
    );
};

// Inline CSS styles
const styles = {
    loaderContainer: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f4f4f4',
        overflow: 'hidden',
    },
    backgroundLogo: {
        position: 'absolute',
        width: '200px',
        height: 'auto',
        opacity: 0.1,
        zIndex: 1,
    },
    blinkingText: {
        fontSize: '4rem',
        fontWeight: 'bold',
        fontFamily: 'Arial, sans-serif',
        zIndex: 2,
        display: 'flex',
        gap: '15px',
    },
    letter: {
        animation: 'blink 1.5s infinite',
        color: '#333',
    },
    letter1: {
        animationDelay: '0s',
        color: '#FF5733',
    },
    letter2: {
        animationDelay: '0.5s',
        color: '#33B5FF',
    },
    letter3: {
        animationDelay: '1s',
        color: '#33FF57',
    },
};

export default Loader;
