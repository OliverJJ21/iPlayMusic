'use client';
import Image from "next/image";
import { redirect } from "next/navigation";


export default function FeaturedCard({ album }) {
    return (
        <>
            <div className="featured__card" onClick={() => redirect("/player")}>
                <Image unoptimized className="featured__card-image" src={album.images[0].url} width={album.images[0].width} height={album.images[0].height} alt=""  priority />
                <div className="featured__card-content">
                    <h2 className="featured__card-title">{album.name}</h2>
                    <p className="featured__card-description">Soundtrack</p>
                </div>
            </div>
        </>
    );
}