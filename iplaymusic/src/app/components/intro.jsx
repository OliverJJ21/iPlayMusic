'use client';

import '../style/components/intro.scss';
import intrologo from '../pic/intrologo.svg';
import intrologoDark from '../pic/darkmode/introdark.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function Intro() {
    const [isDarkMode, setIsDarkMode] = useState('');

    useEffect(() => {
        const darkMode = localStorage.getItem('darkMode') === 'true';
        setIsDarkMode(darkMode);
    }, []);

    return (
        <div className="intro-wrapper">
            <Image src={isDarkMode ? intrologoDark : intrologo} alt="Logo" priority/>
            <h1>iPlayMusic</h1>
        </div>
    );
}

export default Intro;
