export interface Anime {
    id: string;
    title: string;
    genres?: string[];
    image?: string;
}

export interface AnimeDetail {
    id?: string;
    title?: string;
    alternativeTitles?: string[];
    ranking?: number;
    genres?: string[];
    episodes?: number;
    hasEpisode?: boolean;
    hasRanking?: boolean;
    image?: string;
    link?: string;
    status?: string;
    synopsis?: string;
    thumb?: string;
    type?: string;
}