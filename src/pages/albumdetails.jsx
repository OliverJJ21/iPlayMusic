import { IoIosArrowBack } from "react-icons/io";
import '../style/components/albumdetails.scss'
import Navbar from "../components/navbar";
import Songs from "../components/songs";
function AlbumDetails() {
    return (
        <>
        <div className="album-details-wrapper">

        
            <header className="album-details">
                <div className="album-details__top">
                    <div className="album-details__nav">
                        <IoIosArrowBack className='album-details__nav-icon' onClick={() => window.history.go(-1)}/>
                        <p>Album</p>
                    </div>
                    <h1 className="album-details__title">Title</h1>
                    <p className="album-details__subtitle">Songs</p>
                    <div className="album-details__genres">
                        <p className="album-details__genres-text">Genres hashtags</p>
                        <div className="album-details__genres-container">
                            <span className="album-details__genres-tag">#Genre1</span>
                            <span className="album-details__genres-tag">#Genre2</span>
                        </div>
                    </div>

                </div>
            </header>
            <h2 className="songs-section-title">All Songs</h2>
            <Songs />
            <Navbar />
        </div></>
    );
}

export default AlbumDetails;