import {Song} from "../types/Song";
import {SongNode} from "./SongNode";
import {SimilarityCalculation} from "../services/SimilarityCalculation";
import {SpotifyServices} from "../services/SpotifyServices";

export class SimilarityMap {
    init() {
        throw new Error("Method not implemented.");
    }
    private songs: string;
    constructor(private canvas: HTMLCanvasElement) {
        async function init(this: any) {
            const songs = await SpotifyServices.fetchSongs();
            const similarityMatrix = SimilarityCalculation.calculatedSimilarityMatrix(songs);
            this.render(songs, similarityMatrix);
        }

        render(this.songs: Song[], similarityMatrix: number[][]){
         const ctx = this.canvas.getContext('2d');
         if (!ctx){
             return; // проверка контекста
         }

         const nodes:SongNode[] = songs.map((song, index) =>{
             const node = new SongNode(song, this.canvas);
             const x = Math.random() * this.canvas.width;
             const y = Math.random() * this.canvas.height;
             node.draw(x,y);
             return { node, x, y};
         });

         ctx.strokeStyle = 'rgb(0,0,0, 0.5)'
            ctx.lineWidth = 2;
         for (let i = 0; i < similarityMatrix.length; i++){
             for (let j = 0; j < similarityMatrix[i].length; j++){
                 const similarity = similarityMatrix[i][j];
                 if (similarity >0) {
                     const {x:x1, y:y1} = nodes[i];
                     const {x:x2, y:y2} = nodes[j];

                     ctx.beginPath();
                     ctx.moveTo(x1, y1);
                     ctx.lineTo(x2,y2);
                     ctx.stroke();
                 }
             }
         }
         songs.forEach((song, index) =>{
             const node = new SongNode(song, this.canvas);
             const x = Math.random() * this.canvas.width;
             const y = Math.random() * this.canvas.height;
             node.draw(x,y);
         });
        }
    }
}

function render(songs: any, arg1: any, similarityMatrix: any, arg3: any) {
    throw new Error("Function not implemented.");
}
