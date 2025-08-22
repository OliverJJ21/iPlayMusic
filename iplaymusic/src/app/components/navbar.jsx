
import '../style/components/navbar.scss';
// import { useDarkMode } from '@/context/DarkModeContext';
import Link from 'next/link';
import PulseIcon from '../pic/navbar/pulse.svg';
import MicrophoneIcon from '../pic/navbar/microphone.svg';
import CenterIcon from '../pic/navbar/centericon.svg';
// import CenterIconDark from '../pic/darkmode/centericondark.svg';
import ContrastIcon from '../pic/navbar/contrast.svg';
import SettingsIcon from '../pic/navbar/settings.svg';
import Image from 'next/image';

export default function Navbar() {
    // const { darkMode, setDarkMode } = useDarkMode();

    // const toggleDarkMode = () => {
    //     setDarkMode(prev => !prev);
    // };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-icons">
                    <Link href="/featured" className="nav-link">
                        <Image src={PulseIcon} alt="" />
                    </Link>

                    <Link href="/playlists" className="nav-link">
                        <Image src={MicrophoneIcon} alt="" />
                    </Link>

                    <Link href="/albums" className="nav-link__big">
                        <Image src={CenterIcon} alt="" />
                    </Link>

                    <div className="nav-link">
                        <Image src={ContrastIcon} alt="" />
                    </div>

                    <Link href="/categories" className="nav-link">
                        <Image src={SettingsIcon} alt="" />
                    </Link>

                </div>
            </div>
        </nav>
    );
}
