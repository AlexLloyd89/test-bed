import { Platform } from './platform.model';

export interface GameDetail {
  gameId: number;
  title: string;
  overview: string;
  releaseDate: string;
  genres: string[];
  publishers: string[];
  platform: Platform;
  imageUrl?: string;
}

