import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform{
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform:Platform }[];
  metacritic:number;
}

const useGames = (selectefGenre: Genre | null) => {
  return useData<Game>('/games', {params: { genres: selectefGenre?.id }}, [selectefGenre?.id]);
}

export default useGames