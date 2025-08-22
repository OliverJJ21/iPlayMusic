import { cookies } from "next/headers";
import PlaylistSlider from "./playlistslider";



export default async function ImageHighlight() {

        const cookieStore = await cookies();
        const access_token = cookieStore.get("ipm_access_token");

        const response = await fetch(
            "https://api.spotify.com/v1/browse/new-releases?limit=3",
            {
                headers: {
                    "Authorization": `Bearer ${access_token.value}`
                }
            }
        );

        const data = await response.json();
        const dataAlbumSongs = await data.albums.items



    return (
        <>
          <PlaylistSlider key={"yes"} source={dataAlbumSongs}/>
        </>
    );
}

