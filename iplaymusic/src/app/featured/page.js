import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import '../featured/featured.scss'
import Navbar from "@/app/components/navbar";
import { cookies } from "next/headers";
import FeaturedCard from "../components/featured-card";


export default async function Featured() {

    const cookieStore = await cookies();

    const access_token = cookieStore.get("ipm_access_token");

    const response = await fetch("https://api.spotify.com/v1/browse/new-releases", {
        headers: {
            "Authorization": `Bearer ${access_token.value}`
        }
    });

    const data = await response.json();
    console.log("data", data);


    return (
        <>
            <header className="featured-header">
                <IoIosArrowBack className='header-icon' />
                <p>Featured</p>
                <IoSearchOutline className='header-icon' />
            </header>

            <h1 className="header-title-featured">Featured</h1>

            {data.albums.items.map(album => <FeaturedCard key={album.id} album={album} />)}
            <Navbar />
        </>
    );
}
