import React, { useEffect, useRef, useState } from 'react';

const MouseFollower = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMoving, setIsMoving] = useState(false);
    const lightRef = useRef(null);
    const glowRef = useRef(null);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            setIsMoving(true);

            // Clear previous timeout
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            // Set new timeout to detect when mouse stops
            timeoutRef.current = setTimeout(() => {
                setIsMoving(false);
            }, 100);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <>
            {/* Main cursor light */}
            <div
                ref={lightRef}
                className="pointer-events-none fixed z-50 mix-blend-screen transition-opacity duration-300"
                style={{
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`,
                    transform: 'translate(-50%, -50%)',
                    opacity: isMoving ? 0.8 : 0.4,
                }}
            >
                {/* Inner bright core */}
                <div className="absolute inset-0 w-32 h-32 -translate-x-1/2 -translate-y-1/2">
                    <div className="absolute inset-0 bg-gradient-radial from-nhiquela-purple/60 via-nhiquela-pink/40 to-transparent rounded-full blur-xl animate-pulse" />
                </div>

                {/* Middle glow layer */}
                <div className="absolute inset-0 w-48 h-48 -translate-x-1/2 -translate-y-1/2">
                    <div className="absolute inset-0 bg-gradient-radial from-nhiquela-cyan/40 via-nhiquela-purple/20 to-transparent rounded-full blur-2xl" />
                </div>

                {/* Outer subtle halo */}
                <div className="absolute inset-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2">
                    <div className="absolute inset-0 bg-gradient-radial from-white/10 via-nhiquela-cyan/10 to-transparent rounded-full blur-3xl" />
                </div>
            </div>

            {/* Trailing glow effect */}
            <div
                ref={glowRef}
                className="pointer-events-none fixed z-40 mix-blend-screen transition-all duration-500 ease-out"
                style={{
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`,
                    transform: 'translate(-50%, -50%)',
                    opacity: isMoving ? 0.6 : 0.2,
                }}
            >
                <div className="absolute inset-0 w-96 h-96 -translate-x-1/2 -translate-y-1/2">
                    <div className="absolute inset-0 bg-gradient-radial from-nhiquela-purple/20 via-nhiquela-pink/10 to-transparent rounded-full blur-3xl" />
                </div>
            </div>

            {/* Ambient light particles */}
            <div
                className="pointer-events-none fixed z-30 mix-blend-screen transition-all duration-700 ease-out"
                style={{
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`,
                    transform: 'translate(-50%, -50%)',
                    opacity: isMoving ? 0.3 : 0.1,
                }}
            >
                <div className="absolute inset-0 w-[32rem] h-[32rem] -translate-x-1/2 -translate-y-1/2">
                    <div className="absolute inset-0 bg-gradient-radial from-nhiquela-cyan/15 via-transparent to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '3s' }} />
                </div>
            </div>
        </>
    );
};

export default MouseFollower;
