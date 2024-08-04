import {Song} from "../types/Song";
import {SongNode} from "./SongNode";
import {SimilarityCalculation} from "../services/SimilarityCalculation";
import {SpotifyServices} from "../services/SpotifyServices";
import {CsvLoaderService} from "../services/CsvLoaderService"


export class SimilarityMap {
    private songs: Song[] = []; // Объявляем и инициируем songs
    constructor(private canvas: HTMLCanvasElement, private csvFilePath:string) {}



    async init() {

        try {
            const csvLoader = new CsvLoaderService(); // Создаем экземпляр класса
            this.songs = await csvLoader.loadData('path/to/your/csvfile.csv'); // Вызываем метод loadData
            const similarityMatrix = SimilarityCalculation.calculatedSimilarityMatrix(this.songs);
            this.render(this.songs, similarityMatrix);
        } catch (error) {
            console.error('Error loading CSV file:', error);
        }
    }


    render(songs: Song[], similarityMatrix: number[][]) {
        const ctx = this.canvas.getContext('2d');
        if (!ctx) {
            return; // проверка контекста
        }

        // Отрисовка узлов
        const nodes = songs.map((song) => {
            const node = new SongNode(song, this.canvas);
            const x = Math.random() * this.canvas.width;
            const y = Math.random() * this.canvas.height;
            node.draw(x, y);
            return { node, x, y }; // Возвращаем узел и его координаты
        });

        ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.lineWidth = 2;

        // Отрисовка связей на основе similarityMatrix
        for (let i = 0; i < similarityMatrix.length; i++) {
            for (let j = 0; j < similarityMatrix[i].length; j++) {
                const similarity = similarityMatrix[i][j];
                if (similarity > 0) {
                    const { x: x1, y: y1 } = nodes[i];
                    const { x: x2, y: y2 } = nodes[j];

                    ctx.beginPath();
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y2);
                    ctx.stroke();
                }
            }
        }
    }
}

