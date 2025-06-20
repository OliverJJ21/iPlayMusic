import { IoIosArrowBack } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import '../style/components/albums.scss'
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

function Albums() {
    const navigate = useNavigate();

    return (
        <>
            <header className="albums-header">
                <IoIosArrowBack className='header-icon' onClick={() => window.history.go(-1)} />
                <p>Music</p>
                <IoSearchOutline className='header-icon' />
            </header>
            <h1 className="albums-title">All Albums</h1>

            <div className="featured-section">
                <div className="featured-header">
                    <h2 className="featured-title">Featured Albums</h2>
                    <a href="#" className="view-all">View All</a>
                </div>
                <div className="album-gallery">
                    <img src="https://placehold.co/130x130" alt="Album 1" className="album-image" onClick={() => navigate('/albumdetails')} />
                    <img src="https://placehold.co/130x130" alt="Album 2" className="album-image" onClick={() => navigate('/albumdetails')} />
                    <img src="https://placehold.co/130x130" alt="Album 3" className="album-image" onClick={() => navigate('/albumdetails')} />
                    <img src="https://placehold.co/130x130" alt="Album 4" className="album-image" onClick={() => navigate('/albumdetails')} />
                    <img src="https://placehold.co/130x130" alt="Album 5" className="album-image" onClick={() => navigate('/albumdetails')} />
                </div>
            </div>

            <div className="releases-section">
                <div className="releases-header">
                    <h2 className="releases-title">New Releases</h2>
                    <a href="#" className="view-all">View All</a>
                </div>
                <div className="releases-gallery">
                    <div className="album-item" onClick={() => navigate('/albumdetails')}>
                        <img src="https://placehold.co/50x50" alt="Album 1" className="album-image" />
                        <div className="album-info">
                            <h3 className="album-title">Album Title</h3>
                            <p className="album-artist">Artist Name</p>
                        </div>
                        <p className="album-songs">Songs</p>
                    </div>
                    <div className="album-item" onClick={() => navigate('/albumdetails')}>
                        <img src="https://placehold.co/50x50" alt="Album 2" className="album-image" />
                        <div className="album-info">
                            <h3 className="album-title">Album Title</h3>
                            <p className="album-artist">Artist Name</p>
                        </div>
                        <p className="album-songs">Songs</p>
                    </div>
                    <div className="album-item" onClick={() => navigate('/albumdetails')}>
                        <img src="https://placehold.co/50x50" alt="Album 3" className="album-image" />
                        <div className="album-info">
                            <h3 className="album-title">Album Title</h3>
                            <p className="album-artist">Artist Name</p>
                        </div>
                        <p className="album-songs">Songs</p>
                    </div>
                    <div className="album-item" onClick={() => navigate('/albumdetails')}>
                        <img src="https://placehold.co/50x50" alt="Album 4" className="album-image" />
                        <div className="album-info">
                            <h3 className="album-title">Album Title</h3>
                            <p className="album-artist">Artist Name</p>
                        </div>
                        <p className="album-songs">Songs</p>
                    </div>
                </div>
            </div>
            <Navbar />
        </>
    );
}

export default Albums;