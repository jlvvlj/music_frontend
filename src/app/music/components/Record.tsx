
export default function Record({
  albumId,
  title,
  imageUrl,
  isPlaying,
  currentTrackPosition,
}: {
  albumId: string
  title: string
  imageUrl: string
  isPlaying: boolean
  currentTrackPosition: number

}) {
  const isPlayingCurrentRecord = isPlaying
  // isPlaying && currentTrack!.albumId === albumId
  const className =
    'absolute top-0 opacity-0 vynil-image vynil-animation-in' +
    (isPlayingCurrentRecord ? '-spinning' : '')
  // const style = { viewTransitionName: `photo-${albumId}` }

  return (
    <div className="pageContent relative shadow-xl mr-32 sm:w-72 md:w-auto"

    >
      <img
        src={imageUrl}
        alt={title}
        width="400"
        height="400"
        className="block rounded-md tag-album-cover relative bg-white"
        style={{ viewTransitionName: `photo-${albumId}` }}
      />
    </div>
  )
}
