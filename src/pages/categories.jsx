import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import '../style/components/categories.scss'
import Navbar from "../components/navbar";
import { useState } from "react";

function Categories() {
    const [expandedCategory, setExpandedCategory] = useState(null);

    const categories = [
        { name: "Alternative", color: "#d70060", items: ["Example", "Example", "Example", "Example"] },
        { name: "Blues", color: "#e54028", items: ["Example", "Example", "Example", "Example"] },
        { name: "Classical", color: "#f18d05", items: ["Example", "Example", "Example", "Example"] },
        { name: "Country", color: "#f2bc06", items: ["Example", "Example", "Example", "Example"] },
        { name: "Dance", color: "#5eb11c", items: ["Example", "Example", "Example", "Example"] },
        { name: "Electronic", color: "#3a7634", items: ["Example", "Example", "Example", "Example"] },
        { name: "Fitness & Workout", color: "#0abebe", items: ["Example", "Example", "Example", "Example"] },
        { name: "Hip-Hop/Rap", color: "#00a1cb", items: ["Example", "Example", "Example", "Example"] },
        { name: "Industrial", color: "#115793", items: ["Example", "Example", "Example", "Example"] }];

    const toggleCategory = (index) => {
        setExpandedCategory(expandedCategory === index ? null : index);
    };

    return (
        <>
            <header className="categories-header">
                <IoIosArrowBack className='header-icon' onClick={() => window.history.go(-1)} />
                <p>Categories</p>
                <IoSearchOutline className='header-icon' />
            </header>
            <h1 className="header-title">Categories</h1>
            <div className="categories-list">
                {categories.map((category, index) => (
                    <div key={index}>
                        <div
                            className="category-item"
                            style={{ backgroundColor: category.color }}
                            onClick={() => toggleCategory(index)}>
                            {category.name}
                            <div className="icons">
                                <BsThreeDots className="three-dots-icon" />
                            </div>
                        </div>
                        {expandedCategory === index && (
                            <div className="subcategories">
                                {category.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className="subcategory-item">
                                        {item}
                                        <IoIosArrowForward className="arrow-icon" />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <Navbar />
        </>
    );
}

export default Categories;