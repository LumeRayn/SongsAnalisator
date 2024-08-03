import {SimilarityMap} from "../componets/SimilarityMap";

const canvas = document.getElementById('similarityCanvas') as HTMLCanvasElement;
const map = new SimilarityMap(canvas);
map.init();