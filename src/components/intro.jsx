import '../style/components/intro.scss'
import intrologo from '../pic/intrologo.svg'
import intrologoDark from '../pic/darkmode/introdark.svg'

function Intro() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    return (
        <>
            <div className="intro-wrapper">
            <img src={isDarkMode ? intrologoDark : intrologo} alt="" />
            <h1>iPlayMusic</h1>
            </div>
        </>
    );
}

export default Intro;