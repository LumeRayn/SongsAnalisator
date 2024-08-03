import axios from "axios";
import  {Song} from "../types/Song";

export class SpotifyServices{
    static async fetchSongs(): Promise<Song[]> {
        const response = await axios.get("api/main");
        return response.data;
    }
    static async getPreviewURL(songId: string): Promise<string>{
        const response= await axios.get(`PREDPROSLUSHKA/${songId}`);
        return response.data.preview_url;
    }
}