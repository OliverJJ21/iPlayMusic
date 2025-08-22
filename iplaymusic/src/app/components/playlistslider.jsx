'use client';

import Image from "next/image";
import { useRef, useState } from "react";

export default function PlaylistSlider({ source }) {
    const [activeIndex, setActiveIndex] = useState(1);
    const slideshowRef = useRef(null);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const handleTouchStart = (e) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart && !touchEnd) return;
        const distance = touchStart - touchEnd;
        const minSwipeDistance = 50;

        if (Math.abs(distance) < minSwipeDistance) return;

        if (distance > 0 && activeIndex < 2) {
            setActiveIndex(activeIndex + 1);
        }
        if (distance < 0 && activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
        }

        setTouchStart(null);
        setTouchEnd(null);
    };

    return (
        <div
            className="playlists__slideshow"
            ref={slideshowRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}>
            {source.map((img, index) => (
                <div
                    key={img.id}
                    className={`playlists__slide ${activeIndex === index ? 'active' : ''}`}>
                    <Image
                        src={img.images[0].url} width={img.images[0].width} height={img.images[0].height} alt={img.name} className="playlists__image" />
                </div>
            ))}
        </div>
    );
}
