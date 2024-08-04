import {Song} from "../types/Song";

export class SongNode {
    constructor(private  song: Song, private canvas: HTMLCanvasElement) {}

    draw (x: number, y: number) {
        const ctx = this.canvas.getContext('2d');
        const size = this.song.AllTimeRank /100 * 50;
        if (ctx !== null) {
            ctx.beginPath();
            ctx.arc(x,y,size,0,2 * Math.PI);
            ctx.fillStyle = 'blue';
            ctx. fill();
            ctx.stroke();
        } else {
            console.error('Canvas context is null');
        }
    }
}