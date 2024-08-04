import Papa from 'papaparse';
import fs from 'fs';

export interface Song {
    Track: string;
    AlbumName: string;
    Artist: string;
    ReleaseDate: string;
    ISRC: string;
    AllTimeRank: number;
    TrackScore: number;
    SpotifyStreams: number;
    SpotifyPlaylistCount: number;
    SpotifyPlaylistReach: number;
    SpotifyPopularity: number;
    YouTubeViews: number;
    YouTubeLikes: number;
    TikTokPosts: number;
    TikTokLikes: number;
    TikTokViews: number;
    YouTubePlaylistReach: number;
    AppleMusicPlaylistCount: number;
    AirPlaySpins: number;
    SiriusXMSpins: number;
    DeezerPlaylistCount: number;
    DeezerPlaylistReach: number;
    AmazonPlaylistCount: number;
    PandoraStreams: number;
    PandoraTrackStations: number;
    SoundcloudStreams: number;
    ShazamCounts: number;
    TIDALPopularity: number [];
    ExplicitTrack: boolean; // Предполагается, что это булево значение


    /*
     title: string;
    artist: string;
    popularity: number;
    features: number[];
*/
}
