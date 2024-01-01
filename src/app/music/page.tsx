// import { Layout } from '../layouts/layout'
// import '../styles/transitions.css'
import '../globals.css'
import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

import { Card } from './components/Card'
import albums from './data/albums.json'

import { PlusCircledIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { AlbumArtwork } from "./components/album-artwork"
import { Menu } from "./components/menu"
import { PodcastEmptyPlaceholder } from "./components/podcast-empty-placeholder"
import { Sidebar } from "./components/sidebar"
import { listenNowAlbums, madeForYouAlbums } from "./data/albums"
import { playlists } from "./data/playlists"

import MainNav from "@/components/dashboard/main-nav"
import TeamSwitcher from "@/components/dashboard/team-switcher"
import Search from "@/components/dashboard/search"
import ModeToggle from "@/components/ui/mode-toggle"
import UserNav from "@/components/dashboard/user-nav"


export const metadata: Metadata = {
  title: "Music App",
  description: "Example music app using the components.",
}

export default function MusicPage() {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/music-light.png"
          width={1280}
          height={1114}
          alt="Music"
          className="block dark:hidden"
        />
        <Image
          src="/examples/music-dark.png"
          width={1280}
          height={1114}
          alt="Music"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden md:block">
        <Menu />
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
              <Sidebar playlists={playlists} className="hidden lg:block" />
              <div className="col-span-3 lg:col-span-4 lg:border-l">
                <div className="h-full px-4 py-6 lg:px-8">
                  <Tabs defaultValue="music" className="h-full space-y-6">
                    <div className="space-between flex items-center">
                      <TabsList>
                        <TabsTrigger value="music" className="relative">
                          Music
                        </TabsTrigger>
                        <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
                        <TabsTrigger value="live" disabled>
                          Live
                        </TabsTrigger>
                      </TabsList>
                      <div className="ml-auto mr-4">
                        <Button>
                          <PlusCircledIcon className="mr-2 h-4 w-4" />
                          Add music
                        </Button>
                      </div>
                    </div>
                    <TabsContent
                      value="music"
                      className="border-none p-0 outline-none"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            Your Tracks
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Click on tracks below to get tracks data and contract.
                          </p>
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <div className="relative">
                        <ScrollArea>
                          {/* <div className="flex space-x-4 pb-4">
                            {listenNowAlbums.map((album) => (
                              <Link href="/contracts/track_page">
                                <AlbumArtwork
                                  key={album.name}
                                  album={album}
                                  // className="w-[250px]"
                                  // aspectRatio="portrait"
                                  width={250}
                                  height={150}
                                />
                              </Link>
                            ))}
                          </div> */}

                          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                            {
                              albums.results.map((album: { idAlbum: string; strAlbum: string; strArtist: string; strAlbumThumb: string }, index) => (
                                <Link key={index} href={`music/${album.idAlbum}`}>
                                  <Card
                                    key={album.idAlbum}
                                    // viewTransitionName={album.idAlbum}
                                    id={album.idAlbum}
                                    name={album.strAlbum}
                                    artist={album.strArtist}
                                    image_url={album.strAlbumThumb}
                                  />
                                </Link>
                              ))
                            }
                          </div>



                          <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                      </div>
                      <Separator className="my-4" />
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            Your Tracks
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Click on tracks below to get tracks data and contract.
                          </p>
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <div className="relative">
                        <ScrollArea>
                          <div className="flex space-x-4 pb-4">
                            {listenNowAlbums.map((album, index) => (
                              <Link key={index} href="/contracts/contract_page">
                                <AlbumArtwork
                                  key={album.name}
                                  album={album}
                                  // className="w-[250px]"
                                  // aspectRatio="portrait"
                                  width={250}
                                  height={150}
                                />
                              </Link>
                            ))}
                          </div>
                          <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                      </div>
                      <div className="mt-6 space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight">
                          Tracks you might like
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Your personal playlists. From Miuu Artists.
                        </p>
                      </div>
                      <Separator className="my-4" />
                      <div className="relative">
                        <ScrollArea>
                          <div className="flex space-x-4 pb-4">
                            {madeForYouAlbums.map((album) => (
                              <AlbumArtwork
                                key={album.name}
                                album={album}
                                className="w-[150px]"
                                aspectRatio="square"
                                width={150}
                                height={150}
                              />
                            ))}
                          </div>
                          <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                      </div>
                    </TabsContent>
                    <TabsContent
                      value="podcasts"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            New Episodes
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Your favorite podcasts. Updated daily.
                          </p>
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <PodcastEmptyPlaceholder />
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
