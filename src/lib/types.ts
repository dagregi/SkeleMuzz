export type PlaylistResponse = {
  data: Playlist[];
  total?: number;
  next?: string;
};

export type TrackResponse = {
  data: Track[];
  total?: number;
  next?: string;
};

export type AlbumResponse = {
  data: Album[];
  total?: number;
  next?: string;
};

export type ArtistResponse = {
  data: Artist[];
  total?: number;
  next?: string;
};

export type Track = {
  id?: number;
  readable?: boolean;
  title?: string;
  title_short?: string;
  title_version?: string;
  link?: string;
  duration?: number;
  time_add?: number;
  rank?: number;
  explicit_yrics?: boolean;
  explicit_content_lyrics?: number;
  explicit_content_cover?: number;
  preview?: string;
  contributors?: Contributor;
  md5_image?: string;
  artist?: Artist;
  album?: Album;
  type?: "track";
};

export type Album = {
  id?: number;
  title?: string;
  upc?: string;
  link?: string;
  share?: string;
  cover?: string;
  cover_small?: string;
  cover_medium?: string;
  cover_big?: string;
  cover_xl?: string;
  md5_image?: string;
  genre_id?: number;
  genres?: { data: Genre[] };
  label?: string;
  duration?: number;
  fans?: number;
  release_date?: string;
  record_type?: string;
  available?: boolean;
  nb_tracks?: number;
  recordtype?: string;
  tracklist?: string;
  explicit_lyrics?: boolean;
  explicit_content_lyrics?: number;
  explicit_content_cover?: number;
  contributors?: Contributor[];
  artist?: Artist;
  tracks?: { data: Track[] };
  type?: "album";
};

export type Artist = {
  id?: number;
  name?: string;
  link?: string;
  share?: string;
  picture?: string;
  picture_small?: string;
  picture_medium?: string;
  picture_big?: string;
  picture_xl?: string;
  nb_album?: number;
  nb_fan?: number;
  radio?: boolean;
  tracklist?: string;
  type?: "artist";
};

export type Playlist = {
  id?: number;
  title?: string;
  description?: string;
  duration?: number;
  is_loved_track?: boolean;
  collaborative?: boolean;
  fans?: number;
  public: boolean;
  nb_tracks?: number;
  link?: string;
  share?: string;
  picture?: string;
  picture_small?: string;
  picture_medium?: string;
  picture_big?: string;
  picture_xl?: string;
  checksum?: string;
  tracklist?: string;
  creation_date?: string;
  md5_image?: string;
  picture_type?: "playlist";
  user?: User;
  creator?: User;
  tracks?: { data: Track[] };
  type?: "playlist";
};

type User = {
  id: number;
  name: string;
  tracklist: string;
  type: "user";
};

interface Contributor extends Artist {
  role?: Role;
}

type Genre = {
  id: number;
  name: string;
  picture: string;
  type: "genre";
};

type Role = "Main" | "Featured";
