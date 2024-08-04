import {SimilarityMap} from "../componets/SimilarityMap";

const canvas = document.getElementById('similarityCanvas') as HTMLCanvasElement;
const csvFilePath = 'path/to/your/file.csv'; //Сделать чтобы на сайте можно было закинуть нужный файл
const map = new SimilarityMap(canvas, csvFilePath);
map.init();