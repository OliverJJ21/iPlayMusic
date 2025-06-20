import { IoIosArrowBack } from "react-icons/io";
import '../style/components/player.scss'
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

function Player() {
    const [isPlaying, setIsPlaying] = useState(0);
    const [alternateDesign, setAlternateDesign] = useState(false);

    useEffect(() => {
        const designVersion = localStorage.getItem('designVersion');
        if (designVersion === null) {
            localStorage.setItem('designVersion', 'false');
            setAlternateDesign(false);
        } else {
            setAlternateDesign(designVersion === 'true');
        }
    }, []);

    const toggleDesign = () => {
        const newDesign = !alternateDesign;
        localStorage.setItem('designVersion', String(newDesign));
        setAlternateDesign(newDesign);
    }

    return (
        <>
            <div className={`player-wrapper${alternateDesign ? ' alternate-design' : ''}`}>
                <header>
                    <nav className={`player__nav ${alternateDesign ? 'alternate-design' : ''}`}>
                        <IoIosArrowBack className='player__nav-icon' onClick={() => window.history.go(-1)} />
                        <p onClick={toggleDesign}>Playing</p>
                    </nav>
                </header>

                <div className={`player-container ${alternateDesign ? 'alternate-design' : ''}`}>
                    <div className={`cover-art ${alternateDesign ? 'alternate-design' : ''}`}>
                        <div className="svg-overlay">
                            {alternateDesign ? (
                                <img className='svg-alternate' src="https://placehold.co/225x225" alt="placeholder" />
                            ) : (
                                <img src={vinyl} alt="" />
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
                            {alternateDesign ? (
                                <img src={alternateskipbackward} alt="" />
                            ) : (
                                <img src={skipBackward} alt="" />
                            )}
                        </button>
                        <button className="skip-back-double">
                            {alternateDesign || localStorage.getItem('darkMode') === 'true' ? (
                                <img src={alternaterewind} alt="" />
                            ) : (
                                <img src={rewind} alt="" />
                            )}
                        </button>
                        <button className="play-pause" onClick={() => setIsPlaying(!isPlaying)}>
                            {alternateDesign ? (
                                <img src={isPlaying ? alternatepause : alternateplay} alt="" />
                            ) : (
                                <img src={isPlaying ? pause : play} alt="" />
                            )}
                        </button>
                        <button className="skip-forward-double">
                            {alternateDesign || localStorage.getItem('darkMode') === 'true' ? (
                                <img src={alternaterewind} alt="" />
                            ) : (
                                <img src={rewind} alt="" />
                            )}
                        </button>
                        <button className="skip-forward">
                            {alternateDesign ? (
                                <img src={alternateskipbackward} alt="" />
                            ) : (
                                <img src={skipBackward} alt="" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Player;