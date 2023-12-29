"use client";
import "../../globals.css";
import "../../transitions.css";

import { usePathname } from "next/navigation";

// import PlayButton from '../../components/PlayButton'
// import TrackList from '../../components/TrackList'
import Player from "../components/Player";
import Record from "../components/Record";
import { Layout } from "../components/layout";
import albums from "../../album/data/albums.json";
import {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from "react";
// import '../../styles/transitions.css'
import { useRouter } from "next/navigation";
import { PlayCircle, RefreshCcw } from "lucide-react";
import { MusicDataTable } from "../components/MusicDataTable";

interface Props {
  id: string;
  albums: any;
}
export type Track = {
  id: string;
  title: string;
  position: number;
  length: string;
};

export type PlayerTrack = Track & {
  albumId: string;
  artist: string;
  imageUrl: string;
};

const currentTrack: PlayerTrack | null = null;

export const isPlaying = false;

const playIcon = (
  <svg
    aria-hidden="true"
    className="w-6 h-6 mr-2 -ml-1 text-pink-600"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
      clipRule="evenodd"
    ></path>
  </svg>
);

const pauseIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 mr-2 -ml-1 text-pink-600"
  >
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM9 8.25a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h.75a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75H9zm5.25 0a.75.75 0 00-.75.75v6c0 .414.336.75.75.75H15a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75h-.75z"
      clipRule="evenodd"
    />
  </svg>
);

export default function Album() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackPosition, setCurrentTrackPosition] = useState(1);
  const [title, setTitle] = useState("");
  const searchParams = usePathname();
  const pathname = usePathname();
  console.log(pathname);
  // const [position, setPosition] = useState(0)
  // const [currentTrack, setCurrentTrack] = useState({
  //     id: "",
  //     title: '',
  //     length: '',
  //     lengthMs: 0,
  //     position: 0,
  // })
  return albums.results.map(
    (album: {
      tracks: {
        id: string;
        title: string;
        length: string;
        lengthMs: number;
        position: number;
      }[];
      intYearReleased: ReactNode;
      strGenre: ReactNode;
      idAlbum: string;
      strAlbum: string;
      strArtist: string;
      strAlbumThumb: string;
    }) => {
      // const router = useRouter()
      // const { id } = router.query
      // if (album.idAlbum === id) {

      // const router = useRouter()
      // const { id } = router.query
      //  if (album.idAlbum === id) {
      // router.push(`/music/${album.idAlbum}`)

      if (pathname === `/music/${album.idAlbum}`) {
        const titleStyle = { viewTransitionName: `title-${album.idAlbum}` };
        return (
          <Layout key={album.idAlbum}>
            <div className="container mx-auto max-w-screen-xl 2xl:px-0 px-4 flex flex-col items-start lg:flex-row pt-8 pb-12 overflow-hidden">
              <Record
                albumId={album.idAlbum}
                title={album.strAlbum}
                imageUrl={album.strAlbumThumb}
                isPlaying={isPlaying}
                currentTrackPosition={currentTrackPosition}
              />
              <div className="flex-1 flex flex-col justify-end pt-4">
                <h1
                  className="text-5xl font-bold tracking-tight text-white"
                  style={titleStyle}
                >
                  {album.strAlbum}
                </h1>
                <p className="mt-4 text-3xl text-white">{album.strArtist}</p>
                <p className="mt-2 text-lg  text-white">
                  {album.strGenre} — {album.intYearReleased}
                </p>
                <div className="mt-[26px] flex flex-wrap gap-4">
                  <button
                    type="button"
                    className="text-pink-600 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-normal rounded-lg text-lg px-10 py-3 text-center inline-flex items-center dark:focus:ring-gray-500"
                    onClick={() => {
                      setIsPlaying(true);
                    }}
                  >
                    <PlayCircle className="h-5 w-5 mr-2" />
                    Play
                  </button>
                  <button
                    type="button"
                    className="text-pink-600 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-normal rounded-lg text-lg px-10 py-3 text-center inline-flex items-center dark:focus:ring-gray-500"
                  >
                    <RefreshCcw className="h-5 w-5 mr-2" />
                    Shuffle
                  </button>
                </div>
              </div>
            </div>
            <div className="container mx-auto max-w-screen-xl mb-10 2xl:px-0 px-4">
              <MusicDataTable album={album} />
            </div>
            {album.tracks.map((track: any) => {
              return (
                <Player
                  key={track.id}
                  album={album.idAlbum}
                  title={title}
                  position={currentTrackPosition}
                  artist={album.strArtist}
                  imageUrl={album.strAlbumThumb}
                  isPlaying={isPlaying}
                  setIsPlaying={setIsPlaying}
                />
              );
            })}
          </Layout>
        );
      }
    }
  );
}
