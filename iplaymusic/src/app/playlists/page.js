import { IoIosArrowBack } from 'react-icons/io';
import '../playlists/playlists.scss'
import { IoSearchOutline } from 'react-icons/io5';
import Songs from '../components/songs';
import Navbar from '../components/navbar';
import { cookies } from 'next/headers';
import ImageHighlight from '../components/imagehighlight';

export default async function Playlists() {
    const cookieStore = await cookies();
    const access_token = cookieStore.get("ipm_access_token");

    const response = await fetch(
        "https://api.spotify.com/v1/tracks?ids=7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
        {
            headers: {
                "Authorization": `Bearer ${access_token.value}`
            }
        }
    );

    const data = await response.json();
    console.log("data", data);

    return (
        <>
            <header className="playlists">
                <div className="playlists__top">
                    <IoIosArrowBack className='playlists__icon'/>
                    <p className="playlists__title">Playlists</p>
                    <IoSearchOutline className='playlists__icon' />
                </div>
                <h1 className="playlists__heading">Playlists</h1>
                <ImageHighlight/>
            </header>

            <div className="playlists__info">
                <p className="playlists__name">Top 3</p>
                <p className="playlists__name">Songs</p>
            </div>


            {data.tracks.map(track => (
                <Songs
                    key={track.id}
                    name={track.name}
                    artist={track.artists.map(artist => artist.name).join(", ")}
                />
            ))}


            <div className="playlists__controls">
                <button className="playlists__button">Listen All</button>
            </div>
            <Navbar />
        </>
    );
}
