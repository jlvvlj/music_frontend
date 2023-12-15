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
            <div className="container mx-auto max-w-screen-lg px-6 lg:px-0 flex flex-col items-start md:items-end md:flex-row pt-8 pb-12 overflow-hidden">
              <Record
                albumId={album.idAlbum}
                title={album.strAlbum}
                imageUrl={album.strAlbumThumb}
                isPlaying={isPlaying}
                currentTrackPosition={currentTrackPosition}
              />
              <div className="flex-1 flex flex-col justify-end pt-8">
                <h1
                  className="text-5xl font-bold tracking-tight text-gray-900"
                  style={titleStyle}
                >
                  {album.strAlbum}
                </h1>
                <p className="mt-3 text-3xl">{album.strArtist}</p>
                <p className="mt-2 text-lg">
                  {album.strGenre} — {album.intYearReleased}
                </p>
                <div className="mt-3 flex">
                  <button
                    type="button"
                    className="text-pink-600 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-lg px-10 py-3 text-center inline-flex items-center dark:focus:ring-gray-500 mr-4"
                    onClick={() => {
                      setIsPlaying(true);
                      // setCurrentTrackPosition(album.tracks[0].position)
                    }}
                  >
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
                    Play
                  </button>
                  {/* <PlayButton
                                        tracks={album.tracks}
                                        albumId={album.idAlbum}
                                        artist={album.strArtist}
                                        imageUrl={album.strAlbumThumb}
                                    /> */}
                  <button
                    type="button"
                    className="text-pink-600 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-lg px-10 py-3 text-center inline-flex items-center dark:focus:ring-gray-500 mr-4"
                  >
                    <svg
                      className="w-6 h-6 mr-2 -ml-1 text-pink-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Shuffle
                  </button>
                </div>
              </div>
            </div>
            <div className="container mx-auto max-w-screen-lg mb-10">
              <ul className="text-xl">
                {album.tracks.map((track: any) => {
                  const isCurrentTrack = track.position == currentTrackPosition;
                  // console.log(isCurrentTrack)
                  return (
                    <li
                      key={track.id}
                      className="hover:bg-gray-50 cursor-pointer px-6 py-4 flex border-b first:border-t items-center"
                      onClick={() => {
                        setCurrentTrackPosition(track.position);
                        setTitle(track.title);
                        console.log(currentTrackPosition);
                        console.log(isPlaying);
                        if (isCurrentTrack && isPlaying === true)
                          setIsPlaying(false);
                        else setIsPlaying(true);
                      }}
                    >
                      <span className="text-gray-500 w-8 mr-2">
                        {/* {console.log("track.position:"+track.position + " current track:" + currentTrackPosition)} */}
                        {/* {console.log("current track:" + isCurrentTrack, "is playing:" + isPlaying)} */}
                        {isCurrentTrack && !isPlaying
                          ? playIcon
                          : isCurrentTrack && isPlaying
                          ? pauseIcon
                          : track.position}
                      </span>
                      <span className="font-medium">{track.title}</span>
                      <span className="text-gray-500 ml-auto">
                        {track.length}
                      </span>
                    </li>
                  );
                })}
              </ul>
              {/* <TrackList
                                tracks={album.tracks}
                                albumId={album.idAlbum}
                                artist={album.strArtist}
                                imageUrl={album.strAlbumThumb}
                            /> */}
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
