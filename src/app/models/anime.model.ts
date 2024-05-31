export interface AnimeApiRes {
    data: Anime[];
    meta: Meta;
}

export interface Anime {
    _id:                string;
    title:             string;
    alternativeTitles?: string[];
    ranking?:           number;
    genres?:            string[];
    episodes?:          number;
    hasEpisode?:        boolean;
    hasRanking?:        boolean;
    image?:             string;
    link?:              string;
    status?:            Status;
    synopsis?:          string;
    thumb?:             string;
    type?:              Type;
}

export type Status = "Finished Airing" | "Currently Airing";

export type Type = "TV" | "Special" | "Movie";

export interface Meta {
    page?:      number;
    size?:      number;
    totalData?: number;
    totalPage?: number;
}

// N.B! in angular lascio le stesse chiavi del json