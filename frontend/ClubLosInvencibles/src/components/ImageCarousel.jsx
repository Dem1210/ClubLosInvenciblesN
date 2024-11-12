// src/components/ImageCarousel.jsx
import { useState, useEffect } from 'react';

export default function ImageCarousel({ images, isMaleTeam }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className={`relative w-full sm:w-[800px] h-[400px] sm:h-[550px] mx-0 overflow-hidden rounded-2xl ${
            isMaleTeam
                ? 'drop-shadow-[4px_4px_0px_rgba(0,0,0,0.25)]' 
                : 'drop-shadow-[-4px_4px_0px_rgba(0,0,0,0.25)]' 
        }`}>
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((player, index) => (
                    <img
                        key={index}
                        src={player.image}
                        alt={`Slide ${index + 1}`}
                        className="w-full  h-[400px] sm:h-[550px] object-cover"
                    />
                ))}
            </div>
            {/* Dots for navigation */}
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
                {images.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`cursor-pointer w-2 h-2 rounded-full ${
                            index === currentIndex ? 'bg-white' : 'bg-gray-400'
                        }`}
                    ></span>
                ))}
            </div>
        </div>
        
    );
}
