import '../style/components/songs.scss'
import { useNavigate } from 'react-router-dom';
import playbutton from '../pic/icons/playbutton.svg';

function Songs() {
    const navigate = useNavigate();

    return ( 
        <>
        <section className="album-details__songs">
                <div className="album-details__songs-list">
                    <div className="album-details__song" onClick={() => navigate('/player')}>
                        <div className="album-details__song-left">
                            <img src={playbutton} alt="" />
                            <div className="album-details__song-info">
                                <p className="album-details__song-title">Song Title 1</p>
                                <p className="album-details__song-artist">Artist 1</p>
                            </div>
                        </div>
                        <span className="album-details__song-duration">3:45</span>
                    </div>
                    <div className="album-details__song" onClick={() => navigate('/player')}>
                        <div className="album-details__song-left">
                            <img src={playbutton} alt="" />
                            <div className="album-details__song-info">
                                <p className="album-details__song-title">Song Title 2</p>
                                <p className="album-details__song-artist">Artist 2</p>
                            </div>
                        </div>
                        <span className="album-details__song-duration">4:20</span>
                    </div>
                    <div className="album-details__song" onClick={() => navigate('/player')}>
                        <div className="album-details__song-left">
                            <img src={playbutton} alt="" />
                            <div className="album-details__song-info">
                                <p className="album-details__song-title">Song Title 3</p>
                                <p className="album-details__song-artist">Artist 3</p>
                            </div>
                        </div>
                        <span className="album-details__song-duration">3:30</span>
                    </div>
                    <div className="album-details__song" onClick={() => navigate('/player')}>
                        <div className="album-details__song-left">
                            <img src={playbutton} alt="" />
                            <div className="album-details__song-info">
                                <p className="album-details__song-title">Song Title 4</p>
                                <p className="album-details__song-artist">Artist 4</p>
                            </div>
                        </div>
                        <span className="album-details__song-duration">5:15</span>
                    </div>
                    <div className="album-details__song" onClick={() => navigate('/player')}>
                        <div className="album-details__song-left">
                            <img src={playbutton} alt="" />
                            <div className="album-details__song-info">
                                <p className="album-details__song-title">Song Title 5</p>
                                <p className="album-details__song-artist">Artist 5</p>
                            </div>
                        </div>
                        <span className="album-details__song-duration">4:05</span>
                    </div>
                    <div className="album-details__song" onClick={() => navigate('/player')}>
                        <div className="album-details__song-left">
                            <img src={playbutton} alt="" />
                            <div className="album-details__song-info">
                                <p className="album-details__song-title">Song Title 6</p>
                                <p className="album-details__song-artist">Artist 6</p>
                            </div>
                        </div>
                        <span className="album-details__song-duration">3:55</span>
                    </div>
                </div>
            </section>
        </>
     );
}

export default Songs;