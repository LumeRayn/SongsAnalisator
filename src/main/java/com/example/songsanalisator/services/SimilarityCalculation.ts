import {Song} from "../types/Song";

export class SimilarityCalculation{
    static cousinesSimilary(a: number[], b: number[]): number {
        const dotProduct = a.reduce((sum, value, index) => sum + value * b[index], 0);
        const magnitudeA = Math.sqrt(a.reduce((sum, value) => sum + value * value, 0));
        const magnitudeB = Math.sqrt(b.reduce((sum, value) => sum + value * value, 0));
        return dotProduct / (magnitudeA * magnitudeB);
    }
    static calculatedSimilarityMatrix (song: Song[]) : number[][]{
        const matrix = Array.from({length: song.length}, () => Array(song.length).fill(0));
        for ( let i = 0; i < song.length; i++){
            for (let j = i + 1; j<song.length; j++){
                const similarity = this.cousinesSimilary(song[i].features, song[j].features);
                matrix[i][j] = similarity;
                matrix[j][i] = similarity;
            }
        }
        return matrix;
    }
}