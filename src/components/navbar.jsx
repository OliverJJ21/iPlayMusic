import '../style/components/navbar.scss';
import { useDarkMode } from '../context/DarkModeContext';
import { Link } from "react-router";
import pulse from '../pic/navbar/pulse.svg';
import microphone from '../pic/navbar/microphone.svg';
import centericon from '../pic/navbar/centericon.svg';
import centericonDark from '../pic/darkmode/centericondark.svg';
import contrast from '../pic/navbar/contrast.svg';
import settings from '../pic/navbar/settings.svg';

function Navbar() {
    const { darkMode, setDarkMode } = useDarkMode();

    const toggleDarkMode = () => {
        setDarkMode(prev => !prev);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-icons">
                    <Link to="/featured" className="nav-link">
                        <img src={pulse} alt="nav icon" />
                    </Link>

                    <Link to="/playlists" className="nav-link">
                        <img src={microphone} alt="nav icon" />
                    </Link>

                    <Link to="/albums" className="nav-link__big">
                        <img src={darkMode ? centericonDark : centericon} alt="nav icon" />
                    </Link>

                    <div onClick={toggleDarkMode} className="nav-link">
                        <img src={contrast} alt="nav icon" />
                    </div>

                    <Link to="/categories" className="nav-link">
                        <img src={settings} alt="nav icon" />
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;