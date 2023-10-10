import { signal } from '@preact/signals'

export type Track = {
  id: string
  title: string
  position: number
  length: string
}

export type PlayerTrack = Track & {
  albumId: string
  artist: string
  imageUrl: string
}


export const currentTrack = <PlayerTrack | null>(null)

export const isPlaying = false