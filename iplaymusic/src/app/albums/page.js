import { IoIosArrowBack } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import '@/app/albums/albums.scss';
import Navbar from "../components/navbar";
import Image from "next/image";
import { cookies } from "next/headers";

export default async function Albums() {
  const cookieStore = await cookies();
  const access_token = await cookieStore.get("ipm_access_token");

  const response = await fetch(
    "https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc,4aawyAB9vmqN3uQ7FjRGTy,0sNOF9WDwhWunNAHPD3Baj,6JWc4iAiJ9FjyK0B59ABb4,1DFixLWuPkv3KT3TnV35m3,2dIGnmEIy1WZIcZCFSj6i8,6akEvsycLGftJxYudPjmqK,3KuXEGcqLcnEYWnn3OEGy0",
    {
      headers: {
        Authorization: `Bearer ${access_token.value}`,
      }
    }
  );


  const data = await response.json();
  const albums = data.albums;

  return (
    <>
      <header className="albums-header">
        <IoIosArrowBack className='header-icon' />
        <p>Music</p>
        <IoSearchOutline className='header-icon' />
      </header>

      <h1 className="albums-title">All Albums</h1>

      <div className="featured-section">
        <div className="featured-header">
          <h2 className="featured-title">Featured Albums</h2>
          <a href="#" className="view-all">View All</a>
        </div>
        <div className="album-gallery">
          {albums.map(album => (
            <Image
              priority
              key={album.id}
              src={album.images[0]?.url}
              alt={album.name}
              width={130}
              height={130}
              className="album-image"
            />
          ))}
        </div>
      </div>

      <div className="releases-section">
        <div className="releases-header">
          <h2 className="releases-title">New Releases</h2>
          <a href="#" className="view-all">View All</a>
        </div>
        <div className="releases-gallery">
          {albums.map(album => (
            <div
              key={album.id}
              className="album-item">
              <Image
                src={album.images[0]?.url}
                alt={album.name}
                width={50}
                height={50}
                className="album-image"
              />
              <div className="album-info">
                <h3 className="album-title">{album.name}</h3>
                <p className="album-artist">{album.artists.map(a => a.name).join(", ")}</p>
              </div>
              <p className="album-songs">{album.total_tracks} Songs</p>
            </div>
          ))}
        </div>
      </div>

      <Navbar />
    </>
  );
}
