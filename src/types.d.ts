// The MovieDb API Types

export interface ICredit {
  adult: boolean,
  cast_id: number,
  character: string,
  credit_id: string,
  gender: number,
  id: number, 
  known_for_department: string,
  name: string,
  order: number,
  original_name: string,
  popularity: number,
  profile_path: string
}

export interface IGenre {
  id: number,
  name: String
}

export interface IImage {
   aspect_ratio: number,
   file_path: string,
   height: number,
   iso_639_1: string,
   vote_average: number,
   vote_count: number,
   width: number
}

export interface IVideo {
  id: string 
  key: string 
  name: string 
  site: string 
  size: number 
  type: string 
}

export interface IShortMovie {
  id: number
  release_date: string 
  title: string 
  vote_average: number
}

export interface IMovie {
  budget: number 
  credits: { cast: ICredit[], crew: ICredit[] } 
  genres: IGenre[] 
  id: number 
  images: { backdrops: IImage[], posters: IImage[] } 
  original_language: string 
  original_title: string
  overview: string 
  popularity: number 
  poster_path: string 
  release_date: string
  revenue: number 
  runtime: number
  title: string 
  video: boolean 
  videos: { results: IVideo[] } 
  vote_average: number 
  vote_count: number
}
