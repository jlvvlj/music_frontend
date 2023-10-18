
export function Card({ id, name, artist, image_url }: { id: string; name: string; artist: string; image_url: string }) {
  // const style = { viewTransitionName: `photo-${id}` }
  return (
    <div id={id} className="flex flex-col">
      <div
        className="pageContent shadow-md hover:shadow-lg relative"
        style={{ viewTransitionName: `photo-${id}` }}
      // transition:name={`record-${id}`}
      >
        <img
          className="card-image rounded-md relative z-10"
          src={image_url}
          alt={name}
          width="400"
          height="400"
        />
        <img
          src="/vynil-lp.webp"
          width="400"
          height="400"
          // transition: name={`vinyl-${id}`}
          className="absolute top-0 vynil-image opacity-0"
        />
      </div>
      <p className="pt-4 font-semibold"  >{name} </p>
      <p className="pt-1 text-gray-700"  >{artist}</p>
    </div>
  )
}
