import '@/app/style/components/songs.scss'
import Link from 'next/link';
import Playbutton from '@/app/pic/icons/playbutton.svg'
import Image from 'next/image';

export default function Songs({name, artist}) {
    
    return (
        <section className="album-details__songs">
            <div className="album-details__songs-list">
                <Link href="/player" className="album-details__song">
                    <div className="album-details__song-left">
                        <Image src={Playbutton} width="" height="" alt="Play" />
                        <div className="album-details__song-info">
                            <p className="album-details__song-title">{name}</p>
                            <p className="album-details__song-artist">{artist}</p>
                        </div>
                    </div>
                    <span className="album-details__song-duration"></span>
                </Link>
            </div>
        </section>
    );
}
