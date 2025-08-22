'use client';

import '../walkthrough/walkthrough.scss'
import { IoIosRadio, IoIosMusicalNote, IoMdHeart } from "react-icons/io";
import { useState } from 'react';
import gradientwave from '../pic/gradientwave.svg';
import Image from 'next/image';

export default function Walkthrough() {
    const [activeSlide, setActiveSlide] = useState(1);

    const handleSlideChange = (slideNumber) => {
        setActiveSlide(slideNumber);
    };

    return (
        <>
            <div className='walkthrough-container'>
                <Image className='gradient-img' src={gradientwave} alt="" priority/>
                <div className="walkthrough-wrapper">

                    <div className={`slide slide1 ${activeSlide === 1 ? 'active' : ''}`}>
                        <h1>Where Words Fail Music Speaks</h1>
                        <p>Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo. Vestibulum pellentesque lacinia eleifend.</p>
                    </div>
                    <div className={`slide slide2 ${activeSlide === 2 ? 'active' : ''}`}>
                        <h1>No Music No Life</h1>
                        <p>Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo. Vestibulum pellentesque lacinia eleifend.</p>
                    </div>
                    <div className={`slide slide3 ${activeSlide === 3 ? 'active' : ''}`}>
                        <h1>Peace. Love Music</h1>
                        <p>Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo. Vestibulum pellentesque lacinia eleifend.</p>
                    </div>
                    <div className="slide-controls">
                        <div className={`round-button ${activeSlide === 1 ? 'active' : ''}`} onClick={() => handleSlideChange(1)}><IoIosRadio /></div>
                        <div className={`round-button ${activeSlide === 2 ? 'active' : ''}`} onClick={() => handleSlideChange(2)}><IoMdHeart /></div>
                        <div className={`round-button ${activeSlide === 3 ? 'active' : ''}`} onClick={() => handleSlideChange(3)}><IoIosMusicalNote /></div>
                    </div>

                </div>
                <div className='skip-wrapper'>
                    <button className="skip-button" onClick={() => window.location.href = '/featured'}>Skip</button>
                </div></div>
        </>
    );
}
