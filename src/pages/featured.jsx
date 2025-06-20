import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import '../style/components/featured.scss'
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

function Featured() {
    const navigate = useNavigate();

    return (
        <>
            <header className="featured-header">
                <IoIosArrowBack className='header-icon' onClick={() => window.history.go(-1)} />
                <p>Featured</p>
                <IoSearchOutline className='header-icon' />
            </header>    
            <h1 className="header-title-featured">Featured</h1>
            <div className="featured__card" onClick={() => navigate("/player")}>
                <img src="https://placehold.co/325x425/333/fff" alt="placeholder" className="featured__card-image"/>
                <div className="featured__card-content">
                    <h2 className="featured__card-title">Example</h2>
                    <p className="featured__card-description">Soundtrack</p>
                </div>
            </div>
            <div className="featured__card" onClick={() => navigate("/player")}>
                <img src="https://placehold.co/325x425/333/fff" alt="placeholder" className="featured__card-image"/>
                <div className="featured__card-content">
                    <h2 className="featured__card-title">Example 2</h2>
                    <p className="featured__card-description">Soundtrack</p>
                </div>
            </div>

            <Navbar />
        </>
    );
}

export default Featured;