import Papa from "papaparse";
import { Song } from "../types/Song";
import fs from "fs";

export class CsvLoaderService {
    async loadData(filePath: string): Promise<Song[]> {
        return new Promise((resolve, reject) => {
            const results: Song[] = [];

            Papa.parse(fs.createReadStream(filePath), {
                header: true,
                dynamicTyping: true,
                complete: (data) => {
                    // Явно указываем тип данных
                    const parsedData = data.data as Song[];
                    results.push(...parsedData);
                    resolve(results);
                },
                error: (error) => {
                    reject(error);
                },
            });
        });
    }
}
