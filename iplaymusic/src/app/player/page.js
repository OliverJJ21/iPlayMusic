'use client';

import { IoIosArrowBack } from "react-icons/io";
import '@/app/player/player.scss'
import { useState, useEffect } from 'react'
import vinyl from '../pic/player/vinyl.svg'
import skipBackward from '../pic/player/skip-backward.svg'
import rewind from '../pic/player/rewind.svg';
import play from '../pic/player/play.svg';
import pause from '../pic/player/pause.svg';
import alternateplay from '../pic/player/alternate/alternateplay.svg'
import alternatepause from '../pic/player/alternate/alternatepause.svg'
import alternaterewind from '../pic/player/alternate/alternaterewind.svg'
import alternateskipbackward from '../pic/player/alternate/alternateskip-backward.svg'
import placeholdertemp from '../pic/player/alternate/placeholder.avif'
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Player() {
    const router = useRouter()
    const [isPlaying, setIsPlaying] = useState(false);
    const [alternateDesign, setAlternateDesign] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const designVersion = localStorage.getItem('designVersion');
            const darkModeValue = localStorage.getItem('darkMode');
            setAlternateDesign(designVersion === 'true');
            setDarkMode(darkModeValue === 'true');
        }
    }, []);

    const toggleDesign = () => {
        if (typeof window !== 'undefined') {
            const newDesign = !alternateDesign;
            localStorage.setItem('designVersion', String(newDesign));
            setAlternateDesign(newDesign);
        }
    };

    return (
        <div className={`player-wrapper${alternateDesign ? ' alternate-design' : ''}`}>
            <header>
                <nav className={`player__nav ${alternateDesign ? 'alternate-design' : ''}`}>
                    <IoIosArrowBack className='player__nav-icon' onClick={() => router.back()} />
                    <p>Playing</p>
                </nav>
            </header>

            <div className={`player-container ${alternateDesign ? 'alternate-design' : ''}`}>
                <div className={`cover-art ${alternateDesign ? 'alternate-design' : ''}`}>
                    <div className="svg-overlay" onClick={toggleDesign}>
                        {alternateDesign ? (
                            <Image className='svg-alternate' src={placeholdertemp} alt="placeholder" width={225} height={225} />
                        ) : (
                            <Image src={vinyl} alt="" />
                        )}
                    </div>
                </div>

                <div className={`track-info ${alternateDesign ? 'alternate-design' : ''}`}>
                    <h3 className="title">Title</h3>
                    <p className="artist">Artist </p>
                </div>

                <div className={`progress-bar ${alternateDesign ? 'alternate-design' : ''}`}>
                    <div className="progress-line">
                        <div className="progress-slider"></div>
                    </div>

                    <div className="progress-time">
                        <p className="time-current">0:00</p>
                        <p className="time-total">1:23</p>
                    </div>
                </div>

                <div className={`controls ${alternateDesign ? 'alternate-design' : ''}`}>
                    <button className="skip-back">
                        <Image src={alternateDesign ? alternateskipbackward : skipBackward} alt="" />
                    </button>

                    <button className="skip-back-double">
                        <Image src={(alternateDesign || darkMode) ? alternaterewind : rewind} alt="" />
                    </button>

                    <button className="play-pause" onClick={() => setIsPlaying(!isPlaying)}>
                        <Image src={alternateDesign ? (isPlaying ? alternatepause : alternateplay) : (isPlaying ? pause : play)} alt="" />
                    </button>

                    <button className="skip-forward-double">
                        <Image src={(alternateDesign || darkMode) ? alternaterewind : rewind} alt="" />
                    </button>

                    <button className="skip-forward">
                        <Image src={alternateDesign ? alternateskipbackward : skipBackward} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
}
