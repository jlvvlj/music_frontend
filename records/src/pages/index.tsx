import { Card } from '../components/Card'
import { Layout } from '../layouts/layout'
import albums from '../albums.json'
import '../styles/transitions.css'
import Link from 'next/link'

export default function AlbumGrid() {
  return (
    <Layout>
      <section className="py-8">
        <div className="container mx-auto max-w-screen-lg px-6 lg:px-0 flex items-center flex-wrap pt-4 pb-12">
          <h2 className="font-bold text-3xl text-black tracking-tight mb-12">
            Recently Played
          </h2>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {
              albums.results.map((album: { idAlbum: string; strAlbum: string; strArtist: string; strAlbumThumb: string }) => (
                <Link href={`album/${album.idAlbum}`}>
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
        </div>
      </section>
    </Layout>

  )
}
