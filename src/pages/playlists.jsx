import { IoIosArrowBack } from 'react-icons/io';
import '../style/components/playlists.scss'
import { IoSearchOutline } from 'react-icons/io5';
import Songs from '../components/songs';
import Navbar from '../components/navbar';
import { useState, useRef } from 'react';

function Playlists() {
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
        <>
            <header className="playlists">
                <div className="playlists__top">
                    <IoIosArrowBack className='playlists__icon' onClick={() => window.history.go(-1)} />
                    <p className="playlists__title">Playlists</p>
                    <IoSearchOutline className='playlists__icon' />
                </div>
                <h1 className="playlists__heading">Playlists</h1>
                <div
                    className="playlists__slideshow"
                    ref={slideshowRef}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div className={`playlists__slide ${activeIndex === 0 ? 'active' : ''}`}>
                        <img src="https://placehold.co/150x150" alt="" className="playlists__image" />
                    </div>
                    <div className={`playlists__slide ${activeIndex === 1 ? 'active' : ''}`}>
                        <img src="https://placehold.co/150x150" alt="" className="playlists__image" />
                    </div>
                    <div className={`playlists__slide ${activeIndex === 2 ? 'active' : ''}`}>
                        <img src="https://placehold.co/150x150" alt="" className="playlists__image" />
                    </div>
                </div>
            </header>
            <div className="playlists__info">
                <p className="playlists__name">Top 50</p>
                <p className="playlists__name">Example</p>
            </div>

            <Songs />
            <div className="playlists__controls">
                <button className="playlists__button">Listen All</button>
            </div>
            <Navbar />
        </>
    );
}

export default Playlists;